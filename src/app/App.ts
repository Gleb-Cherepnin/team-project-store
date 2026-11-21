import { createAuthPage } from '../pages/AuthPage/AuthPage';
import { createForgotPasswordPage } from '../pages/ForgotPassword/ForgotPassword';
import { createHomePage } from '../pages/HomePage/HomePage';

export function createApp(): HTMLElement {
  const app = document.createElement('div');
  app.className = 'app';

  function showLoginPage(): void {
    app.replaceChildren(createAuthPage(showForgotPasswordPage, navigateToHomePage));
  }

  function showForgotPasswordPage(): void {
    app.replaceChildren(createForgotPasswordPage(showLoginPage));
  }

  function showHomePage(): void {
    app.replaceChildren(createHomePage());
  }

  // HOME PAGE ROUTE — отдельный блок
  function navigateToHomePage(): void {
    window.location.hash = 'home';
  }

  function handlePageRoute(): void {
    if (window.location.hash === '#home') {
      showHomePage();
    } else {
      showLoginPage();
    }
  }

  window.addEventListener('hashchange', handlePageRoute);

  handlePageRoute();
  // END HOME PAGE ROUTE

  return app;
}
