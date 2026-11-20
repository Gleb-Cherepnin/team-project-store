import styles from './Footer.module.scss';

export function createFooter(): HTMLElement {
  const footer = document.createElement('footer');
  footer.className = styles['footer'];

  // Main content
  const content = document.createElement('div');
  content.className = styles['footer__content'];

  // Logo and contacts
  const contacts = document.createElement('div');
  contacts.className = styles['footer__contacts'];

  const logo = document.createElement('img');
  logo.className = styles['footer__logo'];
  logo.src = '/images/auth/white-logo.png';
  logo.alt = 'Logo';

  const contactList = document.createElement('div');
  contactList.className = styles['footer__contact-list'];

  // Contact item helper
  function createContact(iconPath: string, text: string, className = ''): HTMLElement {
    const item = document.createElement('div');
    item.className = `${styles['footer__contact']} ${className}`;

    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    icon.setAttribute('viewBox', '0 0 24 24');
    icon.setAttribute('width', '20');
    icon.setAttribute('height', '20');
    icon.setAttribute('fill', 'none');
    icon.setAttribute('stroke', 'currentColor');
    icon.setAttribute('stroke-width', '1.6');
    icon.setAttribute('stroke-linecap', 'round');
    icon.setAttribute('stroke-linejoin', 'round');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    path.setAttribute('d', iconPath);
    icon.append(path);

    const textElement = document.createElement('p');
    textElement.className = styles['footer__contact-text'];
    textElement.textContent = text;

    item.append(icon, textElement);

    return item;
  }

  const phone = createContact(
    'M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z',
    '(704) 555-0127',
  );

  const email = createContact('M3 5h18v14H3z M3 6l9 7 9-7', 'krist@example.com');

  const address = createContact(
    'M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z M12 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
    '3891 Ranchview Dr. Richardson, California 62639',
    styles['footer__contact--address'],
  );

  contactList.append(phone, email, address);
  contacts.append(logo, contactList);

  // Footer links helper
  function createLinkColumn(titleText: string, links: string[]): HTMLElement {
    const column = document.createElement('div');
    column.className = styles['footer__column'];

    const title = document.createElement('h3');
    title.className = styles['footer__column-title'];
    title.textContent = titleText;

    const list = document.createElement('ul');
    list.className = styles['footer__links'];

    links.forEach((linkText) => {
      const item = document.createElement('li');

      const link = document.createElement('a');
      link.className = styles['footer__link'];
      link.href = '#';
      link.textContent = linkText;

      item.append(link);
      list.append(item);
    });

    column.append(title, list);

    return column;
  }

  const information = createLinkColumn('Information', [
    'My Account',
    'Login',
    'My Cart',
    'My Wishlist',
    'Checkout',
  ]);

  const service = createLinkColumn('Service', [
    'About Us',
    'Careers',
    'Delivery Information',
    'Privacy Policy',
    'Terms & Conditions',
  ]);

  // Subscribe
  const subscribe = document.createElement('div');
  subscribe.className = styles['footer__subscribe'];

  const subscribeTitle = document.createElement('h3');
  subscribeTitle.className = styles['footer__column-title'];
  subscribeTitle.textContent = 'Subscribe';

  const subscribeText = document.createElement('p');
  subscribeText.className = styles['footer__subscribe-text'];
  subscribeText.textContent =
    'Enter your email below to be the first to know about new collections and product launches.';

  const subscribeForm = document.createElement('form');
  subscribeForm.className = styles['footer__form'];
  subscribeForm.noValidate = true;

  const emailIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  emailIcon.setAttribute('viewBox', '0 0 24 24');
  emailIcon.setAttribute('width', '20');
  emailIcon.setAttribute('height', '20');
  emailIcon.setAttribute('fill', 'none');
  emailIcon.setAttribute('stroke', 'currentColor');
  emailIcon.setAttribute('stroke-width', '1.6');
  emailIcon.setAttribute('stroke-linecap', 'round');
  emailIcon.setAttribute('stroke-linejoin', 'round');

  const emailIconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

  emailIconPath.setAttribute('d', 'M3 5h18v14H3z M3 6l9 7 9-7');
  emailIcon.append(emailIconPath);

  const emailInput = document.createElement('input');
  emailInput.className = styles['footer__input'];
  emailInput.type = 'email';
  emailInput.placeholder = 'Your Email';
  emailInput.setAttribute('aria-label', 'Your Email');

  const submitButton = document.createElement('button');
  submitButton.className = styles['footer__submit'];
  submitButton.type = 'submit';
  submitButton.setAttribute('aria-label', 'Subscribe');

  const arrowIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

  arrowIcon.setAttribute('viewBox', '0 0 24 24');
  arrowIcon.setAttribute('width', '22');
  arrowIcon.setAttribute('height', '22');
  arrowIcon.setAttribute('fill', 'none');
  arrowIcon.setAttribute('stroke', 'currentColor');
  arrowIcon.setAttribute('stroke-width', '1.6');
  arrowIcon.setAttribute('stroke-linecap', 'round');
  arrowIcon.setAttribute('stroke-linejoin', 'round');

  const arrowPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

  arrowPath.setAttribute('d', 'M4 12h16 M13 5l7 7-7 7');
  arrowIcon.append(arrowPath);
  submitButton.append(arrowIcon);

  subscribeForm.append(emailIcon, emailInput, submitButton);

  // Email validation
  function isValidEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  emailInput.addEventListener('input', () => {
    const value = emailInput.value.trim();

    subscribeForm.classList.toggle(
      styles['footer__form--invalid'],
      value.length > 0 && !isValidEmail(value),
    );
  });

  subscribeForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const isValid = isValidEmail(emailInput.value.trim());

    subscribeForm.classList.toggle(styles['footer__form--invalid'], !isValid);

    if (!isValid) {
      emailInput.focus();
      return;
    }

    emailInput.value = '';
    subscribeForm.classList.remove(styles['footer__form--invalid']);
  });

  subscribe.append(subscribeTitle, subscribeText, subscribeForm);

  // Main footer content
  content.append(contacts, information, service, subscribe);
  footer.append(content);

  // Bottom separator
  const separator = document.createElement('div');
  separator.className = styles['footer__separator'];

  // Bottom section
  const bottom = document.createElement('div');
  bottom.className = styles['footer__bottom'];

  // Payment icons
  const payments = document.createElement('div');
  payments.className = styles['footer__payments'];

  const paymentIcons = [
    '/images/auth/visa.png',
    '/images/auth/mc.png',
    '/images/auth/gp.png',
    '/images/auth/amex.png',
    '/images/auth/ap.png',
  ];

  paymentIcons.forEach((iconPath) => {
    const icon = document.createElement('img');
    icon.src = iconPath;
    icon.alt = 'Payment method';
    icon.className = styles['footer__payment-icon'];
    payments.append(icon);
  });

  // Copyright
  const copyright = document.createElement('p');
  copyright.className = styles['footer__copyright'];
  copyright.textContent = '©2023 Krist All Rights are reserved';

  // Social icons
  const social = document.createElement('div');
  social.className = styles['footer__social'];

  const socialIcons = [
    '/images/auth/facebook.png',
    '/images/auth/instagram.png',
    '/images/auth/twitter.png',
  ];

  socialIcons.forEach((iconPath) => {
    const icon = document.createElement('img');
    icon.src = iconPath;
    icon.alt = 'Social media';
    icon.className = styles['footer__social-icon'];
    social.append(icon);
  });

  bottom.append(payments, copyright, social);
  footer.append(separator, bottom);

  return footer;
}
