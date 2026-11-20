import styles from './Header.module.scss';

export function createHeader(): HTMLElement {
  const header = document.createElement('header');
  header.className = styles.header;

  // Logo
  const logo = document.createElement('img');
  logo.className = styles.header__logo;
  logo.src = '/images/auth/logo.png';
  logo.alt = 'Logo';

  // Navigation
  const navigation = document.createElement('nav');
  navigation.className = styles.header__navigation;

  const links = ['Home', 'Shop', 'Our Story', 'Blog', 'Contact Us'];

  links.forEach((linkText) => {
    const link = document.createElement('a');
    link.className = styles.header__link;
    link.textContent = linkText;
    link.href = '#';

    if (linkText === 'Shop') {
      link.classList.add(styles['header__link--shop']);

      const arrow = document.createElement('span');
      arrow.className = styles.header__arrow;

      link.append(arrow);
    }

    navigation.append(link);
  });

  // Actions
  const actions = document.createElement('div');
  actions.className = styles.header__actions;

  const icons = [
    {
      name: 'search',
      alt: 'Search',
      path: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM17 17l5 5',
    },
    {
      name: 'wishlist',
      alt: 'Wishlist',
      path: 'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z',
    },
    {
      name: 'cart',
      alt: 'Cart',
      path: 'M5 8h14l1 13H4L5 8ZM9 8V6a3 3 0 0 1 6 0v2',
    },
  ];

  icons.forEach((icon) => {
    const button = document.createElement('button');
    button.className = styles.header__icon;
    button.type = 'button';
    button.setAttribute('aria-label', icon.alt);

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('width', '22');
    svg.setAttribute('height', '22');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '1.5');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    path.setAttribute('d', icon.path);

    svg.append(path);
    button.append(svg);
    actions.append(button);
  });

  // Login
  const loginButton = document.createElement('button');
  loginButton.className = styles.header__login;
  loginButton.type = 'button';
  loginButton.textContent = 'Login';

  loginButton.addEventListener('click', () => {
    window.location.hash = '';
  });

  actions.append(loginButton);

  header.append(logo, navigation, actions);

  return header;
}
