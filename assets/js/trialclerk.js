// --- CONFIGURE PROTECTED PAGES ---
const pageAccessConfig = {
 'about.html': { loggedIn: true },
 'event.html': { loggedIn: true },
 'schoolwork.html': { loggedIn: true },
'beyondschool.html': { loggedIn: true },
'podcasts.html': { loggedIn: true },
'blog-left-sidebar.html': { loggedIn: true },
'contact.html': { loggedIn: true },
};

// --- UTILITIES ---
function getUserRoles(user) {
  const md = user?.publicMetadata || {};
  return Array.isArray(md.roles) ? md.roles : (md.role ? [md.role] : []);
}

function normalizePath(path) {
  if (!path) return '/';
  return path.replace(/^\//, '');
}

function getAccessRequirement(href) {
  const url = new URL(href, window.location.href);
  const path = normalizePath(url.pathname);
  return pageAccessConfig[path] || {};
}

function hasAccess(user, requirement) {
  // If no requirement is specified, access is always true.
  if (!requirement || Object.keys(requirement).length === 0) {
    return true;
  }

  // If the requirement is just to be logged in, check if the user object exists.
  if (requirement.loggedIn) {
    return !!user; // Returns true if user is not null or undefined.
  }

  // Fallback to role-based check if a specific role is required
  // This handles future cases like { role: 'admin' }
  if (requirement.role) {
    const roles = getUserRoles(user);
    return roles.includes(requirement.role);
  }

  return true;
}

// --- MODALS ---
function showSignInRequiredModal() {
  const modal = new bootstrap.Modal(document.getElementById('signinRequiredModal'));
  modal.show();
  cancelSignInTimer(); // Prevent timer from also prompting
}

function showTimedPromptModal() {
  const user = window.Clerk?.user;
  if (user) return;
  const modal = new bootstrap.Modal(document.getElementById('timedPromptModal'));
  modal.show();
}

// --- LOAD MAIN.JS AFTER SIGN-IN ---
function loadMainScript() {
  const script = document.createElement('script');
  script.src = 'main.js';
  script.defer = true;
  document.body.appendChild(script);
}

// --- UI UPDATE BASED ON LOGIN ---
function updateHeaderUI(user) {
  const userInfo = document.getElementById('user-info');
  const authButtons = document.getElementById('auth-buttons');
  const userName = document.getElementById('user-name');
  const userAvatar = document.getElementById('user-avatar');

  if (user) {
    userInfo.style.display = 'flex';
    authButtons.style.display = 'none';
    userName.textContent = user.firstName || user.username || 'User';
    userAvatar.src = user.imageUrl || '';
    loadMainScript(); // ✅ Load main.js after successful login
  } else {
    userInfo.style.display = 'none';
    authButtons.style.display = 'flex';
  }
}


// --- GUARD DIRECT PAGE LOADS ---
function guardCurrentPageOnLoad(user) {
  const path = normalizePath(window.location.pathname);
  const requirement = pageAccessConfig[path];

  // If the page is not in the config, no need to guard
  if (!requirement) return;

  // Wait for the Clerk user object to be defined
  if (window.Clerk.user === undefined) {
    // Retry the check after a short delay
    setTimeout(() => guardCurrentPageOnLoad(window.Clerk.user), 50);
    return;
  }

  // Check if the user has access now that the user object is available
  if (!hasAccess(user, requirement)) {
    // If the user does not have access, redirect them to the index page
    window.location.href = 'trailclerk.html';
  }
}

// --- SIGN-IN TIMER LOGIC ---
let signInTimer = null;

function startSignInTimer() {
  signInTimer = setTimeout(showTimedPromptModal, 40000);
}

function cancelSignInTimer() {
  if (signInTimer) {
    clearTimeout(signInTimer);
    signInTimer = null;
  }
}

// --- INITIALIZE CLERK & EVENTS ---
async function initAccessControl() {
  // Wait until Clerk is loaded
  if (typeof window.Clerk === 'undefined') {
    await new Promise((resolve) => {
      const check = setInterval(() => {
        if (window.Clerk) {
          clearInterval(check);
          resolve();
        }
      }, 100);
    });
  }

  try {
    await window.Clerk.load({ debug: true });

    // Clicks on Sign In / Sign Out buttons
    document.getElementById('sign-in-btn')?.addEventListener('click', () => window.Clerk.openSignIn());
    document.getElementById('sign-out-btn')?.addEventListener('click', () => window.Clerk.signOut());

    // Timed modal Sign-In button
    document.getElementById('timed-signin-btn')?.addEventListener('click', () => {
      cancelSignInTimer();
      bootstrap.Modal.getInstance(document.getElementById('timedPromptModal'))?.hide();
      window.Clerk.openSignIn({ initialValue: 'oauth_google' });
    });

    // Required modal Sign-In button
    document.getElementById('signin-required-btn')?.addEventListener('click', () => {
      cancelSignInTimer();
      bootstrap.Modal.getInstance(document.getElementById('signinRequiredModal'))?.hide();
      window.Clerk.openSignIn({ initialValue: 'oauth_google' });
    });

    // Update UI based on sign-in
    window.Clerk.addListener(({ user }) => {
      updateHeaderUI(user);
    });

    updateHeaderUI(window.Clerk.user);

    // Guard direct access
    guardCurrentPageOnLoad(window.Clerk.user);

    // Intercept all internal links
    document.addEventListener('click', function (e) {
      const a = e.target.closest('a[href]');
      if (!a) return;

      const href = a.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;

      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return;

      const req = getAccessRequirement(href);
      const user = window.Clerk.user;

      if (!hasAccess(user, req)) {
        e.preventDefault();
        showSignInRequiredModal();
      }
    });

    // Start timer for guest users
    if (!window.Clerk.user) {
      startSignInTimer();
    }

  } catch (error) {
    console.error('Clerk error:', error);
  }
}

// --- LAUNCH ON PAGE LOAD ---
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAccessControl);
} else {
  initAccessControl();
}
