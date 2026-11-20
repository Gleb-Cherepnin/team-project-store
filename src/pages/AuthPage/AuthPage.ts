import styles from './AuthPage.module.scss';
import inputStyles from '../../components/Input/Input.module.scss';

import { createInput } from '../../components/Input/Input';
import { createButton } from '../../components/Button/Button';

export function createAuthPage(onForgotPassword: () => void, onSuccess: () => void): HTMLElement {
  const page = document.createElement('main');
  page.className = styles['auth-page'];

  function isValidEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }

  // Image
  const image = document.createElement('img');
  image.className = styles['auth-page__image'];
  image.src = '/images/auth/auth-image.png';
  image.alt = 'Welcome to our store';

  // Logo
  const logo = document.createElement('img');
  logo.className = styles['auth-page__logo'];
  logo.src = '/images/auth/logo.png';
  logo.alt = 'Logo';

  // Form container
  const content = document.createElement('section');
  content.className = styles['auth-page__content'];

  // Login form
  const form = document.createElement('form');
  form.className = styles['auth-form'];
  form.noValidate = true;

  const heading = document.createElement('div');
  heading.className = styles['auth-form__heading'];

  const title = document.createElement('h1');
  title.textContent = 'Welcome 👋';

  const subtitle = document.createElement('p');
  subtitle.textContent = 'Please login here';

  heading.append(title, subtitle);

  // Login email
  const emailGroup = document.createElement('div');
  emailGroup.className = styles['auth-form__group'];

  const emailLabel = document.createElement('label');
  emailLabel.textContent = 'Email Address';
  emailLabel.htmlFor = 'email';

  const emailInput = createInput({
    type: 'email',
    placeholder: 'Enter your email',
    name: 'email',
  });

  emailInput.id = 'email';
  emailInput.autocomplete = 'email';

  emailGroup.append(emailLabel, emailInput);

  // Login password
  const passwordGroup = document.createElement('div');
  passwordGroup.className = styles['auth-form__group'];

  const passwordLabel = document.createElement('label');
  passwordLabel.textContent = 'Password';
  passwordLabel.htmlFor = 'password';

  const passwordInput = createInput({
    type: 'password',
    placeholder: 'Enter your password',
    name: 'password',
  });

  passwordInput.id = 'password';
  passwordInput.autocomplete = 'current-password';

  passwordGroup.append(passwordLabel, passwordInput);

  // Remember me and Forgot password
  const options = document.createElement('div');
  options.className = styles['auth-form__options'];

  const rememberLabel = document.createElement('label');
  rememberLabel.className = styles['auth-form__remember'];

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.name = 'remember';
  checkbox.className = styles['auth-form__checkbox'];

  const rememberText = document.createElement('span');
  rememberText.textContent = 'Remember Me';

  rememberLabel.append(checkbox, rememberText);

  const forgotLink = document.createElement('a');
  forgotLink.className = styles['auth-form__forgot'];
  forgotLink.href = '#';
  forgotLink.textContent = 'Forgot Password?';

  forgotLink.addEventListener('click', (event) => {
    event.preventDefault();
    onForgotPassword();
  });

  options.append(rememberLabel, forgotLink);

  // Login button
  const loginButton = createButton('Login');

  // Switch to registration
  const loginSwitch = document.createElement('p');
  loginSwitch.className = styles['auth-form__switch'];

  const loginSwitchText = document.createElement('span');
  loginSwitchText.textContent = "Don't have an account?";

  const registerLink = document.createElement('button');
  registerLink.type = 'button';
  registerLink.className = styles['auth-form__switch-link'];
  registerLink.textContent = 'Sign Up';

  loginSwitch.append(loginSwitchText, registerLink);

  form.append(heading, emailGroup, passwordGroup, options, loginButton, loginSwitch);

  // Registration form
  const registerForm = document.createElement('form');
  registerForm.className = styles['auth-form'];
  registerForm.noValidate = true;
  registerForm.hidden = true;

  const registerHeading = document.createElement('div');
  registerHeading.className = styles['auth-form__heading'];

  const registerTitle = document.createElement('h1');
  registerTitle.textContent = 'Create New Account';

  const registerSubtitle = document.createElement('p');
  registerSubtitle.textContent = 'Please enter details';

  registerHeading.append(registerTitle, registerSubtitle);

  // First name
  const firstNameGroup = document.createElement('div');
  firstNameGroup.className = styles['auth-form__group'];

  const firstNameLabel = document.createElement('label');
  firstNameLabel.textContent = 'First Name';
  firstNameLabel.htmlFor = 'first-name';

  const firstNameInput = createInput({
    type: 'text',
    placeholder: 'Enter your first name',
    name: 'firstName',
  });

  firstNameInput.id = 'first-name';
  firstNameInput.autocomplete = 'given-name';

  firstNameGroup.append(firstNameLabel, firstNameInput);

  // Last name
  const lastNameGroup = document.createElement('div');
  lastNameGroup.className = styles['auth-form__group'];

  const lastNameLabel = document.createElement('label');
  lastNameLabel.textContent = 'Last Name';
  lastNameLabel.htmlFor = 'last-name';

  const lastNameInput = createInput({
    type: 'text',
    placeholder: 'Enter your last name',
    name: 'lastName',
  });

  lastNameInput.id = 'last-name';
  lastNameInput.autocomplete = 'family-name';

  lastNameGroup.append(lastNameLabel, lastNameInput);

  // Registration email
  const registerEmailGroup = document.createElement('div');
  registerEmailGroup.className = styles['auth-form__group'];

  const registerEmailLabel = document.createElement('label');
  registerEmailLabel.textContent = 'Email Address';
  registerEmailLabel.htmlFor = 'register-email';

  const registerEmailInput = createInput({
    type: 'email',
    placeholder: 'Enter your email',
    name: 'email',
  });

  registerEmailInput.id = 'register-email';
  registerEmailInput.autocomplete = 'email';

  registerEmailGroup.append(registerEmailLabel, registerEmailInput);

  // Registration password
  const registerPasswordGroup = document.createElement('div');
  registerPasswordGroup.className = styles['auth-form__group'];

  const registerPasswordLabel = document.createElement('label');
  registerPasswordLabel.textContent = 'Password';
  registerPasswordLabel.htmlFor = 'register-password';

  const registerPasswordInput = createInput({
    type: 'password',
    placeholder: 'Enter your password',
    name: 'password',
  });

  registerPasswordInput.id = 'register-password';
  registerPasswordInput.autocomplete = 'new-password';

  registerPasswordGroup.append(registerPasswordLabel, registerPasswordInput);

  // Terms and conditions
  const termsLabel = document.createElement('label');
  termsLabel.className = styles['auth-form__terms'];

  const termsCheckbox = document.createElement('input');
  termsCheckbox.type = 'checkbox';
  termsCheckbox.name = 'terms';
  termsCheckbox.className = styles['auth-form__checkbox'];

  const termsText = document.createElement('span');
  termsText.append('I agree to the ');

  const termsLink = document.createElement('strong');
  termsLink.textContent = 'Terms & Conditions';

  termsText.append(termsLink);
  termsLabel.append(termsCheckbox, termsText);

  // Registration button
  const registerButton = createButton('Signup');

  // Switch to login
  const registerSwitch = document.createElement('p');
  registerSwitch.className = styles['auth-form__switch'];

  const registerSwitchText = document.createElement('span');
  registerSwitchText.textContent = 'Already have an account?';

  const loginLink = document.createElement('button');
  loginLink.type = 'button';
  loginLink.className = styles['auth-form__switch-link'];
  loginLink.textContent = 'Login';

  registerSwitch.append(registerSwitchText, loginLink);

  registerForm.append(
    registerHeading,
    firstNameGroup,
    lastNameGroup,
    registerEmailGroup,
    registerPasswordGroup,
    termsLabel,
    registerButton,
    registerSwitch,
  );

  // Switch forms and images
  registerLink.addEventListener('click', () => {
    form.hidden = true;
    registerForm.hidden = false;

    image.src = '/images/auth/signup-image.png';
    image.alt = 'Create your account';
  });

  loginLink.addEventListener('click', () => {
    registerForm.hidden = true;
    form.hidden = false;

    image.src = '/images/auth/auth-image.png';
    image.alt = 'Welcome to our store';
  });

  // Login validation
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const isEmailInvalid = !isValidEmail(emailInput.value);
    const isPasswordInvalid = passwordInput.value.trim() === '';

    emailInput.classList.toggle(inputStyles['input--error'], isEmailInvalid);
    passwordInput.classList.toggle(inputStyles['input--error'], isPasswordInvalid);

    if (isEmailInvalid || isPasswordInvalid) {
      return;
    }

    onSuccess();
  });

  // Login input events
  emailInput.addEventListener('input', () => {
    emailInput.classList.toggle(inputStyles['input--error'], !isValidEmail(emailInput.value));
  });

  passwordInput.addEventListener('input', () => {
    passwordInput.classList.toggle(inputStyles['input--error'], passwordInput.value.trim() === '');
  });

  // Registration validation
  registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const isFirstNameInvalid = firstNameInput.value.trim() === '';
    const isLastNameInvalid = lastNameInput.value.trim() === '';
    const isEmailInvalid = !isValidEmail(registerEmailInput.value);
    const isPasswordInvalid = registerPasswordInput.value.trim() === '';
    const isTermsInvalid = !termsCheckbox.checked;

    firstNameInput.classList.toggle(inputStyles['input--error'], isFirstNameInvalid);
    lastNameInput.classList.toggle(inputStyles['input--error'], isLastNameInvalid);
    registerEmailInput.classList.toggle(inputStyles['input--error'], isEmailInvalid);
    registerPasswordInput.classList.toggle(inputStyles['input--error'], isPasswordInvalid);
    termsCheckbox.classList.toggle(inputStyles['input--error'], isTermsInvalid);

    if (
      isFirstNameInvalid ||
      isLastNameInvalid ||
      isEmailInvalid ||
      isPasswordInvalid ||
      isTermsInvalid
    ) {
      return;
    }

    onSuccess();
  });

  // Registration input events
  firstNameInput.addEventListener('input', () => {
    firstNameInput.classList.toggle(
      inputStyles['input--error'],
      firstNameInput.value.trim() === '',
    );
  });

  lastNameInput.addEventListener('input', () => {
    lastNameInput.classList.toggle(inputStyles['input--error'], lastNameInput.value.trim() === '');
  });

  registerEmailInput.addEventListener('input', () => {
    registerEmailInput.classList.toggle(
      inputStyles['input--error'],
      !isValidEmail(registerEmailInput.value),
    );
  });

  registerPasswordInput.addEventListener('input', () => {
    registerPasswordInput.classList.toggle(
      inputStyles['input--error'],
      registerPasswordInput.value.trim() === '',
    );
  });

  termsCheckbox.addEventListener('change', () => {
    termsCheckbox.classList.toggle(inputStyles['input--error'], !termsCheckbox.checked);
  });

  content.append(form, registerForm);
  page.append(image, logo, content);

  return page;
}
