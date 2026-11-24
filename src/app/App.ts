import { createCheckoutPage } from '../pages/CheckoutPage/CheckoutPage';
import { createCartPage } from '../pages/CartPage/CartPage';
import { createAboutPage } from '../pages/AboutPage/AboutPage';
import { createContactsPage } from '../pages/ContactsPage/ContactsPage';

import { createAuthPage } from '../pages/AuthPage/AuthPage';
import { createForgotPasswordPage } from '../pages/ForgotPassword/ForgotPassword';
import { createHomePage } from '../pages/HomePage/HomePage';
import { createProfilePage } from '../pages/ProfilePage/ProfilePage';
import { createShopPage } from '../pages/ShopPage/ShopPage';
import { createDescriptionsPage } from '../pages/DescriptionsPage/DescriptionsPage';
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

  function showShopPage(category: string): void {
    app.replaceChildren(createShopPage(category));
  }

  function showDescriptionsPage(): void {
    app.replaceChildren(createDescriptionsPage());
  }

  function completeLogin(): void {
    login();
    window.location.hash = 'profile';
    handlePageRoute();
  }

  function handlePageRoute(): void {
    const hash = window.location.hash;

    if (!hash || hash === '#' || hash === '#about') {
      app.replaceChildren(createAboutPage());
    } else if (hash === '#contacts') {
      app.replaceChildren(createContactsPage());
    } else if (hash === '#home') {
      showHomePage();
    } else if (hash.startsWith('#shop/')) {
      const category = decodeURIComponent(hash.replace('#shop/', ''));
      showShopPage(category);
    } else if (hash === '#shipping' || hash === '#payment') {
      app.replaceChildren(createCheckoutPage(hash === '#payment'));
    } else if (hash === '#review') {
      app.replaceChildren(createCheckoutPage(true, true));
    } else if (hash === '#orders') {
      app.replaceChildren(createProfilePage(true));
    } else if (hash === '#cart') {
      app.replaceChildren(createCartPage());
    } else if (hash === '#descriptions') {
      showDescriptionsPage();
    } else if (hash === '#profile') {
      if (isAuthenticated()) {
        app.replaceChildren(createProfilePage());
      } else {
        window.location.replace('#login');
      }
    } else if (isAuthenticated()) {
      window.location.replace('#profile');
    } else {
      showLoginPage();
    }
  }

  window.addEventListener('hashchange', handlePageRoute);
  window.addEventListener('storage', handlePageRoute);

  handlePageRoute();

  return app;
}
