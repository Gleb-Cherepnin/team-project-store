import '../AuthPage/AuthPage.css';
import './ForgotPassword.css';

import { createInput } from '../../components/Input/Input';
import { createButton } from '../../components/Button/Button';

const OTP_LENGTH = 5;

export function createForgotPasswordPage(onBack: () => void): HTMLElement {
  const page = document.createElement('main');
  page.className = 'auth-page';

  // Email, который пользователь ввёл на первом экране
  let savedEmail = '';

  function isValidEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }

  // Image
  const image = document.createElement('img');
  image.className = 'auth-page__image';

  // Content
  const content = document.createElement('section');
  content.className = 'auth-page__content';

  // Кнопка Back: каждый экран сам решает, куда она ведёт
  function createBackButton(onClick: () => void): HTMLButtonElement {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'forgot-password__back';
    button.textContent = '← Back';
    button.addEventListener('click', onClick);

    return button;
  }

  // ---------- Модальное окно после Verify ----------
  function showSuccessModal(): void {
    // Если окно уже открыто, второе не создаём
    if (page.querySelector('.modal-overlay')) return;

    // Размытие фона на весь экран
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';

    // Закрытие окна: убираем его и снимаем обработчик Esc
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

    // Клик по размытому фону (но не по самому окну) закрывает окно
    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) {
        closeModal();
      }
    });

    // Само окно 432 x 332
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');

    // Три кольца и белый кружок внутри друг друга
    const ring1 = document.createElement('div');
    ring1.className = 'modal__ring modal__ring--1';

    const ring2 = document.createElement('div');
    ring2.className = 'modal__ring modal__ring--2';

    const ring3 = document.createElement('div');
    ring3.className = 'modal__ring modal__ring--3';

    const ring4 = document.createElement('div');
    ring4.className = 'modal__ring modal__ring--4';

    // Закруглённая галочка 10 x 10
    ring4.innerHTML = `
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
        <path
          d="M1.5 5.2L4 7.5L8.5 2.5"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `;

    // Вкладываем: ring4 в ring3, ring3 в ring2, ring2 в ring1
    ring3.append(ring4);
    ring2.append(ring3);
    ring1.append(ring2);

    // Заголовок
    const modalTitle = document.createElement('h2');
    modalTitle.className = 'modal__title';
    modalTitle.textContent = 'Password Changed Successfully';

    // Текст под заголовком
    const modalText = document.createElement('p');
    modalText.className = 'modal__text';
    modalText.textContent = 'Your password has been updated successfully';

    // Кнопка возврата на страницу логина
    const modalButton = document.createElement('button');
    modalButton.type = 'button';
    modalButton.className = 'modal__button';
    modalButton.textContent = 'Back to Login';
    modalButton.addEventListener('click', () => {
      closeModal();
      onBack();
    });

    modal.append(ring1, modalTitle, modalText, modalButton);
    overlay.append(modal);
    page.append(overlay);
  }

  // ---------- Экран 1: Forgot Password ----------
  function showForgotPassword(): void {
    image.src = '/images/auth/forgot-password-image.png';
    image.alt = 'Forgot password';

    const form = document.createElement('form');
    form.className = 'auth-form';
    form.noValidate = true;

    // Назад -> на страницу логина
    const backButton = createBackButton(onBack);

    // Heading
    const heading = document.createElement('div');
    heading.className = 'auth-form__heading';

    const title = document.createElement('h1');
    title.textContent = 'Forgot Password';

    const subtitle = document.createElement('p');
    subtitle.textContent =
      'Enter your registered email address. we’ll send you a code to reset your password.';

    heading.append(title, subtitle);

    // Email
    const emailGroup = document.createElement('div');
    emailGroup.className = 'auth-form__group';

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
    // Если вернулись назад, подставляем введённый ранее email
    emailInput.value = savedEmail;

    emailGroup.append(emailLabel, emailInput);

    // Send OTP button
    const sendButton = createButton('Send OTP');

    form.append(backButton, heading, emailGroup, sendButton);

    // Валидация и переход на второй экран
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const isEmailInvalid = !isValidEmail(emailInput.value);

      emailInput.classList.toggle('input--error', isEmailInvalid);

      if (!isEmailInvalid) {
        savedEmail = emailInput.value.trim();
        showOtp(savedEmail);
      }
    });

    emailInput.addEventListener('input', () => {
      savedEmail = emailInput.value;

      emailInput.classList.toggle('input--error', !isValidEmail(emailInput.value));
    });

    content.replaceChildren(form);
  }

  // ---------- Экран 2: Enter OTP ----------
  function showOtp(email: string): void {
    image.src = '/images/auth/verify-otp-image.png';
    image.alt = 'Verify email';

    const form = document.createElement('form');
    form.className = 'auth-form';
    form.noValidate = true;

    // Назад -> на предыдущий экран (Forgot Password)
    const backButton = createBackButton(showForgotPassword);

    // Heading
    const heading = document.createElement('div');
    heading.className = 'auth-form__heading';

    const title = document.createElement('h1');
    title.textContent = 'Enter OTP';

    // Один текст: первая строка, перенос, потом email
    const subtitle = document.createElement('p');
    subtitle.append(
      'We have share a code of your registered email address',
      document.createElement('br'),
      email,
    );

    heading.append(title, subtitle);

    // 5 квадратиков
    const otpContainer = document.createElement('div');
    otpContainer.className = 'forgot-password__otp';

    const otpInputs: HTMLInputElement[] = [];

    for (let i = 0; i < OTP_LENGTH; i += 1) {
      const input = document.createElement('input');

      input.className = 'forgot-password__otp-input';
      input.type = 'text';
      input.inputMode = 'numeric';
      input.maxLength = 1;
      input.autocomplete = i === 0 ? 'one-time-code' : 'off';
      input.setAttribute('aria-label', `OTP digit ${i + 1}`);

      otpInputs.push(input);
      otpContainer.append(input);
    }

    // Чёрная рамка у заполненных квадратиков.
    // Как только в квадратик ввели цифру, красная рамка с него уходит.
    function updateOtpStyles(): void {
      otpInputs.forEach((otpInput) => {
        const isFilled = otpInput.value !== '';

        otpInput.classList.toggle('is-filled', isFilled);

        if (isFilled) {
          otpInput.classList.remove('is-error');
        }
      });
    }

    otpInputs.forEach((input, index) => {
      // Ввод: оставляем только одну цифру и сразу прыгаем дальше
      input.addEventListener('input', () => {
        const digit = input.value.replace(/\D/g, '').slice(-1);

        input.value = digit;

        if (digit && index < otpInputs.length - 1) {
          otpInputs[index + 1].focus();
        }

        updateOtpStyles();
      });

      // Backspace и стрелки
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

      // Вставка кода целиком (Cmd + V)
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

    // Verify: пока введены не все цифры, окно не открываем
    // и подсвечиваем красным пустые квадратики
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const isCodeComplete = otpInputs.every((input) => input.value !== '');

      if (!isCodeComplete) {
        otpInputs.forEach((input) => {
          input.classList.toggle('is-error', input.value === '');
        });

        // Курсор в первый пустой квадратик
        otpInputs.find((input) => input.value === '')?.focus();

        return;
      }

      showSuccessModal();
    });

    content.replaceChildren(form);

    // Курсор сразу в первый квадратик
    otpInputs[0].focus();
  }

  page.append(image, content);

  showForgotPassword();

  return page;
}
