    async function initTestPage() {
      if (typeof window.Clerk === 'undefined') {
        await new Promise(resolve => {
          const check = setInterval(() => {
            if (typeof window.Clerk !== 'undefined') { clearInterval(check); resolve(); }
          }, 100);
        });
      }

      await window.Clerk.load();
      const user = window.Clerk.user;

      if (!user) {
        document.getElementById('access-denied').style.display = 'block';
        setTimeout(() => { window.location.href = 'trialclerk.html'; }, 3000);
        return;
      }

      const userInfo = document.getElementById('user-info');
      userInfo.style.display = 'block';
      const userName = user.firstName || user.primaryEmailAddress?.emailAddress || 'User';
      document.getElementById('user-name').textContent = userName;
      document.getElementById('user-avatar').src = user.imageUrl || user.profileImageUrl || 'https://www.gravatar.com/avatar/?d=mp';

      document.getElementById('sign-out-btn').addEventListener('click', () => {
        window.Clerk.signOut();
        window.location.href = 'trialclerk.html';
      });
    }

    document.addEventListener('DOMContentLoaded', initTestPage);
  