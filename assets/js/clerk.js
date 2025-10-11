async function initClerk() {
      if (typeof window.Clerk === 'undefined') {
        await new Promise(resolve => {
          const check = setInterval(() => {
            if (typeof window.Clerk !== 'undefined') { clearInterval(check); resolve(); }
          }, 100);
        });
      }

      await window.Clerk.load();
      const user = window.Clerk.user;

      const userInfoSection = document.getElementById('user-info');
      const authButtons = document.getElementById('auth-buttons');

      // Show user info if logged in
      if (user) {
        const userName = user.firstName || user.primaryEmailAddress?.emailAddress || 'User';
        const userAvatar = document.getElementById('user-avatar');
        userAvatar.src = user.imageUrl || user.profileImageUrl || 'https://www.gravatar.com/avatar/?d=mp';
        document.getElementById('user-name').textContent = userName;

        userInfoSection.style.display = 'flex';
        authButtons.style.display = 'none';

        document.getElementById('sign-out-btn').addEventListener('click', () => {
          window.Clerk.signOut();
          window.location.reload();
        });

      } else {
        userInfoSection.style.display = 'none';
        authButtons.style.display = 'flex';

        document.getElementById('sign-in-btn').addEventListener('click', () => window.Clerk.openSignIn());
        document.getElementById('sign-up-btn').addEventListener('click', () => window.Clerk.openSignUp());
      }

      // Intercept clicks on protected links
      document.querySelectorAll('.protected-link').forEach(link => {
        link.addEventListener('click', (e) => {
          if (!window.Clerk.user) {
            e.preventDefault();
            alert('Login required to access this page!');
            window.Clerk.openSignIn();
          }
        });
      });
    }

    document.addEventListener('DOMContentLoaded', initClerk);