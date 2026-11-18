import authStyles from '../AuthPage/AuthPage.module.scss';
import styles from './ForgotPassword.module.scss';
import inputStyles from '../../components/Input/Input.module.scss';

import { createInput } from '../../components/Input/Input';
import { createButton } from '../../components/Button/Button';

const OTP_LENGTH = 5;

export function createForgotPasswordPage(onBack: () => void): HTMLElement {
  const page = document.createElement('main');
  page.className = authStyles['auth-page'];

  let savedEmail = '';

  function isValidEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }

  // Image
  const image = document.createElement('img');
  image.className = authStyles['auth-page__image'];

  // Content
  const content = document.createElement('section');
  content.className = authStyles['auth-page__content'];

  // Back button
  function createBackButton(onClick: () => void): HTMLButtonElement {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = styles['forgot-password__back'];
    button.textContent = '← Back';
    button.addEventListener('click', onClick);

    return button;
  }

  // Success modal
  function showSuccessModal(): void {
    if (page.querySelector(`.${styles['modal-overlay']}`)) return;

    const overlay = document.createElement('div');
    overlay.className = styles['modal-overlay'];

    function closeModal(): void {
      document.removeEventListener('keydown', handleEscape);
      overlay.remove();
    }

    function handleEscape(event: KeyboardEvent): void {
      if (event.key === 'Escape') {
        closeModal();
      }
    }

    document.addEventListener('keydown', handleEscape);

    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) {
        closeModal();
      }
    });

    const modal = document.createElement('div');
    modal.className = styles.modal;
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');

    // Rings
    const ring1 = document.createElement('div');
    ring1.className = `${styles['modal__ring']} ${styles['modal__ring--1']}`;

    const ring2 = document.createElement('div');
    ring2.className = `${styles['modal__ring']} ${styles['modal__ring--2']}`;

    const ring3 = document.createElement('div');
    ring3.className = `${styles['modal__ring']} ${styles['modal__ring--3']}`;

    const ring4 = document.createElement('div');
    ring4.className = `${styles['modal__ring']} ${styles['modal__ring--4']}`;

    // Checkmark
    const checkmark = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    checkmark.setAttribute('width', '10');
    checkmark.setAttribute('height', '10');
    checkmark.setAttribute('viewBox', '0 0 10 10');
    checkmark.setAttribute('fill', 'none');
    checkmark.setAttribute('aria-hidden', 'true');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M1.5 5.2L4 7.5L8.5 2.5');
    path.setAttribute('stroke', 'currentColor');
    path.setAttribute('stroke-width', '1.8');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');

    checkmark.append(path);
    ring4.append(checkmark);

    ring3.append(ring4);
    ring2.append(ring3);
    ring1.append(ring2);

    // Modal title
    const modalTitle = document.createElement('h2');
    modalTitle.className = styles['modal__title'];
    modalTitle.textContent = 'Password Changed Successfully';

    // Modal text
    const modalText = document.createElement('p');
    modalText.className = styles['modal__text'];
    modalText.textContent = 'Your password has been updated successfully';

    // Modal button
    const modalButton = document.createElement('button');
    modalButton.type = 'button';
    modalButton.className = styles['modal__button'];
    modalButton.textContent = 'Back to Login';

    modalButton.addEventListener('click', () => {
      closeModal();
      onBack();
    });

    modal.append(ring1, modalTitle, modalText, modalButton);
    overlay.append(modal);
    page.append(overlay);
  }

  // Screen 1: Forgot Password
  function showForgotPassword(): void {
    image.src = '/images/auth/forgot-password-image.png';
    image.alt = 'Forgot password';

    const form = document.createElement('form');
    form.className = authStyles['auth-form'];
    form.noValidate = true;

    const backButton = createBackButton(onBack);

    // Heading
    const heading = document.createElement('div');
    heading.className = authStyles['auth-form__heading'];

    const title = document.createElement('h1');
    title.textContent = 'Forgot Password';

    const subtitle = document.createElement('p');
    subtitle.className = styles['forgot-password__subtitle'];
    subtitle.textContent =
      'Enter your registered email address. we’ll send you a code to reset your password.';

    heading.append(title, subtitle);

    // Email
    const emailGroup = document.createElement('div');
    emailGroup.className = authStyles['auth-form__group'];

    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email Address';
    emailLabel.htmlFor = 'forgot-email';

    const emailInput = createInput({
      type: 'email',
      placeholder: 'robertfox@example.com',
      name: 'email',
    });

    emailInput.id = 'forgot-email';
    emailInput.autocomplete = 'email';
    emailInput.value = savedEmail;

    emailGroup.append(emailLabel, emailInput);

    const sendButton = createButton('Send OTP');

    form.append(backButton, heading, emailGroup, sendButton);

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const isEmailInvalid = !isValidEmail(emailInput.value);

      emailInput.classList.toggle(inputStyles['input--error'], isEmailInvalid);

      if (!isEmailInvalid) {
        savedEmail = emailInput.value.trim();
        showOtp(savedEmail);
      }
    });

    emailInput.addEventListener('input', () => {
      savedEmail = emailInput.value;

      emailInput.classList.toggle(inputStyles['input--error'], !isValidEmail(emailInput.value));
    });

    content.replaceChildren(form);
  }

  // Screen 2: Enter OTP
  function showOtp(email: string): void {
    image.src = '/images/auth/verify-otp-image.png';
    image.alt = 'Verify email';

    const form = document.createElement('form');
    form.className = authStyles['auth-form'];
    form.noValidate = true;

    const backButton = createBackButton(showForgotPassword);

    // Heading
    const heading = document.createElement('div');
    heading.className = authStyles['auth-form__heading'];

    const title = document.createElement('h1');
    title.textContent = 'Enter OTP';

    const subtitle = document.createElement('p');
    subtitle.className = styles['forgot-password__subtitle'];
    subtitle.append(
      'We have share a code of your registered email address',
      document.createElement('br'),
      email,
    );

    heading.append(title, subtitle);

    // OTP inputs
    const otpContainer = document.createElement('div');
    otpContainer.className = styles['forgot-password__otp'];

    const otpInputs: HTMLInputElement[] = [];

    for (let i = 0; i < OTP_LENGTH; i += 1) {
      const input = document.createElement('input');

      input.className = styles['forgot-password__otp-input'];
      input.type = 'text';
      input.inputMode = 'numeric';
      input.maxLength = 1;
      input.autocomplete = i === 0 ? 'one-time-code' : 'off';
      input.setAttribute('aria-label', `OTP digit ${i + 1}`);

      otpInputs.push(input);
      otpContainer.append(input);
    }

    function updateOtpStyles(): void {
      otpInputs.forEach((otpInput) => {
        const isFilled = otpInput.value !== '';

        otpInput.classList.toggle(styles['is-filled'], isFilled);

        if (isFilled) {
          otpInput.classList.remove(styles['is-error']);
        }
      });
    }

    otpInputs.forEach((input, index) => {
      input.addEventListener('input', () => {
        const digit = input.value.replace(/\D/g, '').slice(-1);

        input.value = digit;

        if (digit && index < otpInputs.length - 1) {
          otpInputs[index + 1].focus();
        }

        updateOtpStyles();
      });

      input.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace' && input.value === '' && index > 0) {
          otpInputs[index - 1].focus();
        }

        if (event.key === 'ArrowLeft' && index > 0) {
          otpInputs[index - 1].focus();
        }

        if (event.key === 'ArrowRight' && index < otpInputs.length - 1) {
          otpInputs[index + 1].focus();
        }
      });

      input.addEventListener('paste', (event) => {
        event.preventDefault();

        const pastedText = (event.clipboardData?.getData('text') ?? '')
          .replace(/\D/g, '')
          .slice(0, otpInputs.length - index);

        pastedText.split('').forEach((digit, digitIndex) => {
          otpInputs[index + digitIndex].value = digit;
        });

        updateOtpStyles();

        const nextIndex = Math.min(index + pastedText.length, otpInputs.length - 1);

        otpInputs[nextIndex].focus();
      });
    });

    // Verify button
    const verifyButton = createButton('Verify');

    form.append(backButton, heading, otpContainer, verifyButton);

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const isCodeComplete = otpInputs.every((input) => input.value !== '');

      if (!isCodeComplete) {
        otpInputs.forEach((input) => {
          input.classList.toggle(styles['is-error'], input.value === '');
        });

        otpInputs.find((input) => input.value === '')?.focus();

        return;
      }

      showSuccessModal();
    });

    content.replaceChildren(form);
    otpInputs[0].focus();
  }

  page.append(image, content);

  showForgotPassword();

  return page;
}
