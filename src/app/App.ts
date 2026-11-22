import { createAuthPage } from '../pages/AuthPage/AuthPage';
import { createForgotPasswordPage } from '../pages/ForgotPassword/ForgotPassword';
import { createHomePage } from '../pages/HomePage/HomePage';
import { createShopPage } from '../pages/ShopPage/ShopPage';

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

  function showShopPage(category: string): void {
    app.replaceChildren(createShopPage(category));
  }

  function navigateToHomePage(): void {
    window.location.hash = 'home';
  }

  function handlePageRoute(): void {
    const hash = window.location.hash;

    if (hash === '#home') {
      showHomePage();
    } else if (hash.startsWith('#shop/')) {
      const category = decodeURIComponent(hash.replace('#shop/', ''));
      showShopPage(category);
    } else {
      showLoginPage();
    }
  }

  window.addEventListener('hashchange', handlePageRoute);

  handlePageRoute();

  return app;
}
