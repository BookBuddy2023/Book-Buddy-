/*
  Hardened Clerk + access-control script
  - Defensive (won't throw when elements are missing)
  - Uses live window.Clerk.user for all checks
  - Cancels sign-in timer on successful login
  - Loads main.js only once
  - Optional DEBUG mode (set to false for production)
*/

const DEBUG = true;

function debug(...args) { if (DEBUG) console.debug('[ACL]', ...args); }
function warn(...args) { if (DEBUG) console.warn('[ACL]', ...args); }

const pageAccessConfig = {
  'about.html': { role: 'user' },
  'event.html': { role: 'user' },
  'schoolwork.html': { role: 'user' },
  'beyondschool.html': { role: 'user' },
  'podcasts.html': { role: 'user' },
  'blog-left-sidebar.html': { role: 'user' },
  'contact.html': { role: 'user' },
};

let signInTimer = null;
let mainScriptLoaded = false;
let lastKnownUser = undefined; // fallback polling if addListener missing

// --- UTILITIES ---
function safeGet(id) {
  return document.getElementById(id) || null;
}

function getUserRoles(user) {
  const md = user?.publicMetadata || {};
  return Array.isArray(md.roles) ? md.roles : (md.role ? [md.role] : []);
}

function normalizePath(path) {
  if (!path) return '/';
  return path.replace(/^\//, '');
}

function getAccessRequirement(href) {
  try {
    const url = new URL(href, window.location.href);
    const path = normalizePath(url.pathname);
    return pageAccessConfig[path] || {};
  } catch (err) {
    // If URL constructor fails, treat as no special requirement
    debug('getAccessRequirement - invalid href:', href, err);
    return {};
  }
}

// Always check the live clerk user
function userHasAccess(requirement) {
  const user = window.Clerk?.user;
  if (!requirement || Object.keys(requirement).length === 0) return true;
  if (!user) return false;
  const roles = getUserRoles(user);
  return !requirement.role || roles.includes(requirement.role);
}

// --- MODAL helpers (safe) ---
function showModalById(id) {
  const el = safeGet(id);
  if (!el) {
    debug('Modal element not found:', id);
    return;
  }
  try {
    const modal = bootstrap.Modal.getOrCreateInstance(el);
    modal.show();
  } catch (err) {
    warn('showModalById failed for', id, err);
  }
}

function hideModalById(id) {
  const el = safeGet(id);
  if (!el) return;
  try {
    const modal = bootstrap.Modal.getOrCreateInstance(el);
    modal.hide();
  } catch (err) {
    warn('hideModalById failed for', id, err);
  }
}

function showSignInRequiredModal() {
  cancelSignInTimer();
  showModalById('signinRequiredModal');
}

function showTimedPromptModal() {
  if (window.Clerk?.user) {
    debug('User already logged in — skipping timed prompt');
    return;
  }
  showModalById('timedPromptModal');
}

// --- Load main.js only once ---
function loadMainScript() {
  if (mainScriptLoaded) {
    debug('main.js already loaded - skipping');
    return;
  }
  const script = document.createElement('script');
  script.src = 'main.js';
  script.defer = true;
  script.onload = () => debug('main.js loaded');
  script.onerror = (e) => warn('main.js failed to load', e);
  document.body.appendChild(script);
  mainScriptLoaded = true;
}

// --- UI UPDATE BASED ON LOGIN ---
function updateHeaderUI(user) {
  try {
    const userInfo = safeGet('user-info');
    const authButtons = safeGet('auth-buttons');
    const userNameEl = safeGet('user-name');
    const userAvatarEl = safeGet('user-avatar');

    if (user) {
      debug('updateHeaderUI -> logged in', user);
      if (userInfo) userInfo.style.display = 'flex';
      if (authButtons) authButtons.style.display = 'none';
      if (userNameEl) userNameEl.textContent = user.firstName || user.primaryEmailAddress?.emailAddress || user.username || 'User';
      if (userAvatarEl) userAvatarEl.src = user.imageUrl || user.profileImageUrl || 'https://www.gravatar.com/avatar/?d=mp';

      // load main.js once on login
      loadMainScript();

      // sign out button (safe attach)
      const signOutBtn = safeGet('sign-out-btn');
      if (signOutBtn) {
        signOutBtn.onclick = () => {
          try {
            window.Clerk.signOut();
            // reload to reset guarded pages and header
            window.location.reload();
          } catch (err) {
            warn('signOut error', err);
          }
        };
      }
    } else {
      debug('updateHeaderUI -> logged out');
      if (userInfo) userInfo.style.display = 'none';
      if (authButtons) authButtons.style.display = 'flex';

      const signInBtn = safeGet('sign-in-btn');
      const signUpBtn = safeGet('sign-up-btn');
      if (signInBtn) signInBtn.onclick = () => window.Clerk?.openSignIn?.();
      if (signUpBtn) signUpBtn.onclick = () => window.Clerk?.openSignUp?.();
    }
  } catch (err) {
    warn('updateHeaderUI error', err);
  }
}

// --- GUARD CURRENT PAGE LOAD ---
function guardCurrentPageOnLoad(retries = 0) {
  try {
    const path = normalizePath(window.location.pathname);
    const requirement = pageAccessConfig[path];
    if (!requirement) {
      debug('No guard for this page:', path);
      return;
    }

    // If Clerk has not finished initializing, retry a few times
    if (typeof window.Clerk === 'undefined' || window.Clerk.user === undefined) {
      if (retries < 40) {
        setTimeout(() => guardCurrentPageOnLoad(retries + 1), 50);
      } else {
        warn('Clerk not ready after retries - redirecting to index for safety');
        window.location.href = 'index.html';
      }
      return;
    }

    if (!userHasAccess(requirement)) {
      debug('guardCurrentPageOnLoad -> no access, redirecting to index');
      window.location.href = 'index.html';
    } else {
      debug('guardCurrentPageOnLoad -> access ok');
    }
  } catch (err) {
    warn('guardCurrentPageOnLoad error', err);
  }
}

// --- SIGN-IN TIMER ---
function startSignInTimer() {
  cancelSignInTimer();
  signInTimer = setTimeout(() => {
    debug('Sign-in timer expired -> showing timed prompt');
    showTimedPromptModal();
  }, 40000);
}

function cancelSignInTimer() {
  if (signInTimer) {
    clearTimeout(signInTimer);
    signInTimer = null;
    debug('Sign-in timer cancelled');
  }
}

// --- INTERCEPT LINKS (single safe handler) ---
function setupLinkInterception() {
  document.addEventListener('click', function (e) {
    try {
      const a = e.target.closest && e.target.closest('a[href]');
      if (!a) return;

      const href = a.getAttribute('href');
      if (!href) return;
      const skipPrefixes = ['#', 'mailto:', 'tel:', 'javascript:'];
      if (skipPrefixes.some(p => href.startsWith(p))) return;

      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return; // external link - do nothing

      const req = getAccessRequirement(href);

      if (!userHasAccess(req)) {
        e.preventDefault();
        debug('intercept -> user lacks access for', href, 'showing sign-in modal');
        showSignInRequiredModal();
      }
    } catch (err) {
      // don't let link interception break the page
      warn('Link interception error', err);
    }
  });
}

// --- PROTECTED-LINKS fallback (per-element) ---
function setupProtectedLinkElements() {
  document.querySelectorAll('.protected-link')?.forEach(link => {
    link.addEventListener('click', (e) => {
      try {
        if (!window.Clerk?.user) {
          e.preventDefault();
          alert('Login required to access this page!');
          window.Clerk?.openSignIn?.();
        }
      } catch (err) {
        warn('protected-link click error', err);
      }
    });
  });
}

// --- Initialize Clerk & handlers ---
async function initClerkSafe() {
  try {
    // wait for Clerk object to appear on window (if the SDK is loaded async)
    if (typeof window.Clerk === 'undefined') {
      debug('Waiting for window.Clerk to appear...');
      await new Promise((resolve) => {
        const check = setInterval(() => {
          if (typeof window.Clerk !== 'undefined') { clearInterval(check); resolve(); }
        }, 100);
      });
    }

    // load clerk (SDK's load function may be present)
    if (typeof window.Clerk.load === 'function') {
      await window.Clerk.load?.({ debug: false }).catch(err => {
        warn('Clerk.load failed but continuing', err);
      });
      debug('window.Clerk.load completed (if available)');
    } else {
      debug('window.Clerk.load not present, continuing');
    }

    // initial user
    const user = window.Clerk?.user;
    lastKnownUser = user;
    debug('Initial Clerk user:', user);

    // update UI for initial state
    updateHeaderUI(user);

    // guard page access
    guardCurrentPageOnLoad();

    // attach UI modal buttons safely
    const timedSigninBtn = safeGet('timed-signin-btn');
    if (timedSigninBtn) timedSigninBtn.onclick = () => {
      cancelSignInTimer();
      hideModalById('timedPromptModal');
      window.Clerk?.openSignIn?.({ initialValue: 'oauth_google' });
    };

    const signinRequiredBtn = safeGet('signin-required-btn');
    if (signinRequiredBtn) signinRequiredBtn.onclick = () => {
      cancelSignInTimer();
      hideModalById('signinRequiredModal');
      window.Clerk?.openSignIn?.({ initialValue: 'oauth_google' });
    };

    // React to user changes: prefer addListener if available, else fallback to polling
    if (typeof window.Clerk.addListener === 'function') {
      window.Clerk.addListener(({ user: newUser }) => {
        debug('Clerk.addListener => user changed:', newUser);
        lastKnownUser = newUser;
        updateHeaderUI(newUser);
        if (newUser) cancelSignInTimer();
      });
    } else {
      // fallback polling (every 500ms, stop when stable)
      debug('Clerk.addListener missing - using fallback polling for user changes');
      const pollInterval = setInterval(() => {
        const current = window.Clerk?.user;
        if (current !== lastKnownUser) {
          debug('Polling detected user change', current);
          lastKnownUser = current;
          updateHeaderUI(current);
          if (current) cancelSignInTimer();
        }
      }, 500);

      // clear polling after some time (to avoid indefinite polling)
      setTimeout(() => clearInterval(pollInterval), 5 * 60 * 1000); // stop after 5min
    }

    // Intercept links and .protected-link hooks
    setupLinkInterception();
    setupProtectedLinkElements();

    // Start sign-in timer for guest users only
    if (!window.Clerk?.user) {
      startSignInTimer();
    } else {
      cancelSignInTimer();
    }

    debug('initClerkSafe - completed initialization');
  } catch (err) {
    warn('initClerkSafe failed', err);
  }
}

// Launch on DOM ready (safe)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initClerkSafe);
} else {
  initClerkSafe();
}
