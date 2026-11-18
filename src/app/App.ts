import { createAuthPage } from '../pages/AuthPage/AuthPage';
import { createForgotPasswordPage } from '../pages/ForgotPassword/ForgotPassword';

export function createApp(): HTMLElement {
  const app = document.createElement('div');
  app.className = 'app';

  function showLoginPage(): void {
    app.replaceChildren(createAuthPage(showForgotPasswordPage));
  }

  function showForgotPasswordPage(): void {
    app.replaceChildren(createForgotPasswordPage(showLoginPage));
  }

  showLoginPage();

  return app;
}
