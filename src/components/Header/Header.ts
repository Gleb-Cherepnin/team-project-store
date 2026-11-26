import { createMiniCart } from '../MiniCart/MiniCart';
import styles from './Header.module.scss';
import { isAuthenticated, logout } from '../../services/auth';

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

  const links = ['Home', 'Shop', 'About us', 'Contact Us'];

  links.forEach((linkText) => {
    const link = document.createElement('a');
    link.className = styles.header__link;
    link.textContent = linkText;
    const routes: Record<string, string> = {
      Home: '#home',
      Shop: '#shop/all',
      'About us': '#about',
      'Contact Us': '#contacts',
    };
    link.href = routes[linkText] || '#';

    if (linkText === 'Shop') {
      link.classList.add(styles['header__link--shop']);

      // Arrow
      const arrow = document.createElement('span');
      arrow.className = styles.header__arrow;
      link.append(arrow);

      // Mega Menu
      const megaMenu = document.createElement('div');
      megaMenu.className = styles.header__megaMenu;

      const columns = [
        [
          {
            title: 'Men',
            items: ['T-Shirts', 'Casual Shirts', 'Formal Shirts', 'Jackets', 'Blazers & Coats'],
          },
          {
            title: 'Indian & Festive Wear',
            items: ['Jeans', 'Sherwanis'],
          },
        ],
        [
          {
            title: 'Women',
            items: ['Jeans', 'Sarees', 'Ethnic Wear', 'Lehenga Cholis', 'Jackets'],
          },
          {
            title: 'Western Wear',
            items: ['Dresses', 'Jumpsuits'],
          },
        ],
        [
          {
            title: 'Footwear',
            items: ['Flats', 'Casual Shoes', 'Heels', 'Boots', 'Sports Shoes & Floaters'],
          },
          {
            title: 'Product Features',
            items: ['360 Product Viewer', 'Product with Video'],
          },
        ],
        [
          {
            title: 'Kids',
            items: [
              'T-Shirts',
              'Shirts',
              'Jeans',
              'Trousers',
              'Party Wear',
              'Innerwear & Thermal',
              'Track Pants',
              'Value Pack',
            ],
          },
        ],
      ];

      columns.forEach((column) => {
        const columnElement = document.createElement('div');
        columnElement.className = styles.header__megaColumn;

        column.forEach((group) => {
          const groupElement = document.createElement('div');
          groupElement.className = styles.header__megaGroup;

          const title = document.createElement('h3');
          title.className = styles.header__megaTitle;
          title.textContent = group.title;

          const list = document.createElement('ul');
          list.className = styles.header__megaList;

          group.items.forEach((item) => {
            const listItem = document.createElement('li');
            listItem.className = styles.header__megaItem;

            const itemLink = document.createElement('a');
            itemLink.className = styles.header__megaLink;
            itemLink.href = `#shop/${encodeURIComponent(item.toLowerCase())}`;
            itemLink.textContent = item;

            listItem.append(itemLink);
            list.append(listItem);
          });

          groupElement.append(title, list);
          columnElement.append(groupElement);
        });

        megaMenu.append(columnElement);
      });

      link.append(megaMenu);
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
      name: 'profile',
      alt: 'Profile',
      path: 'M20 21a8 8 0 0 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z',
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
    if (icon.name === 'profile') {
      button.addEventListener('click', () => {
        window.location.hash = isAuthenticated() ? 'profile' : 'login';
      });
    }

    let searchForm: HTMLFormElement | undefined;

    if (icon.name === 'search') {
      searchForm = document.createElement('form');
      searchForm.className = styles.header__searchForm;
      searchForm.hidden = true;

      const searchInput = document.createElement('input');
      searchInput.className = styles.header__searchInput;
      searchInput.type = 'search';
      searchInput.placeholder = 'Enter category';
      searchInput.setAttribute('aria-label', 'Search category');

      searchForm.append(searchInput);

      button.addEventListener('click', () => {
        searchForm!.hidden = !searchForm!.hidden;

        if (!searchForm!.hidden) {
          searchInput.focus();
        }
      });

      searchForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const category = searchInput.value.trim().toLowerCase();

        if (!category) return;

        window.location.hash = `shop/${encodeURIComponent(category)}`;
      });
    }

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
    if (icon.name === 'search' && searchForm) {
      const searchWrapper = document.createElement('div');
      searchWrapper.className = styles.header__searchWrapper;
      searchWrapper.append(button, searchForm);
      actions.append(searchWrapper);
    } else {
      actions.append(icon.name === 'cart' ? createMiniCart(button) : button);
    }
  });

  // Login
  const loginButton = document.createElement('button');
  loginButton.className = styles.header__login;
  loginButton.type = 'button';
  loginButton.textContent = isAuthenticated() ? 'Logout' : 'Login';

  loginButton.addEventListener('click', () => {
    if (isAuthenticated()) {
      logout();
      loginButton.textContent = 'Login';
    }
    window.location.hash = 'login';
  });

  actions.append(loginButton);

  header.append(logo, navigation, actions);

  return header;
}
