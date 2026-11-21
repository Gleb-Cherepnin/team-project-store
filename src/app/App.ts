import { createAuthPage } from '../pages/AuthPage/AuthPage';
import { createForgotPasswordPage } from '../pages/ForgotPassword/ForgotPassword';
import { createHomePage } from '../pages/HomePage/HomePage';
import { createProfilePage } from '../pages/ProfilePage/ProfilePage';
import { isAuthenticated, login } from '../services/auth';

export function createApp(): HTMLElement {
  const app = document.createElement('div');
  app.className = 'app';

  function showLoginPage(): void {
    app.replaceChildren(createAuthPage(showForgotPasswordPage, completeLogin));
  }

  function showForgotPasswordPage(): void {
    app.replaceChildren(createForgotPasswordPage(showLoginPage));
  }

  function showHomePage(): void {
    app.replaceChildren(createHomePage());
  }

  // HOME PAGE ROUTE — отдельный блок
  function completeLogin(): void {
    login();
    window.location.hash = 'profile';
  }

  function handlePageRoute(): void {
    if (window.location.hash === '#home') {
      showHomePage();
    } else if (isAuthenticated()) {
      if (window.location.hash !== '#profile') {
        window.location.replace('#profile');
        return;
      }
      app.replaceChildren(createProfilePage());
    } else {
      if (window.location.hash === '#profile') {
        window.location.replace('#login');
        return;
      }
      showLoginPage();
    }
  }

  window.addEventListener('hashchange', handlePageRoute);
  window.addEventListener('storage', handlePageRoute);

  handlePageRoute();
  // END HOME PAGE ROUTE

  return app;
}
