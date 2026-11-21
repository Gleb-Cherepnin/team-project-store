import { createHeader } from '../../components/Header/Header';
import { createFooter } from '../../components/Footer/Footer';
import headerStyles from '../../components/Header/Header.module.scss';
import footerStyles from '../../components/Footer/Footer.module.scss';
import styles from './ProfilePage.module.scss';
import { createWishlist } from './Wishlist';

const paths = {
  user: 'M20 21v-2a7 7 0 0 0-14 0v2 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
  box: 'm12 2 9 5v10l-9 5-9-5V7l9-5Z M3 7l9 5 9-5 M12 12v10 M7 4.8l9 5v5',
  heart:
    'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z',
  pin: 'M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0 1 18 0Z M15 10a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z',
  card: 'M5 3h14a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z M2 8h20 M2 12h20 M6 17h4',
  bell: 'M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9 M9 20a3 3 0 0 0 6 0',
  settings:
    'm9 3 1-2h4l1 2 3 2 2 0 2 4-1 2v3l1 2-2 4h-3l-2 2h-4l-2-2H6l-2-4 1-2v-3L4 9l2-4h2Z M16 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z',
  edit: 'M12 3H5a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3v-7 M16 3l5 5 M10 14l-1 5 5-1L22 10a3.5 3.5 0 0 0-5-5Z',
};
function icon(name: keyof typeof paths): string {
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[name]}"/></svg>`;
}

export function createProfilePage(): HTMLElement {
  const page = document.createElement('div');
  page.className = styles.page;
  const header = createHeader();
  header.classList.add(styles.header);
  header
    .querySelectorAll(`.${headerStyles.header__link}`)
    .forEach((el) => el.classList.add(styles.headerLink));
  header.querySelector(`.${headerStyles.header__navigation}`)?.classList.add(styles.navigation);
  const footer = createFooter();
  footer.classList.add(styles.footer);
  footer.querySelector(`.${footerStyles.footer__content}`)?.classList.add(styles.footerContent);
  footer.querySelector(`.${footerStyles.footer__bottom}`)?.classList.add(styles.footerBottom);
  const main = document.createElement('main');
  main.className = styles.profile;
  main.innerHTML = `<h1>My Profile</h1><div class="${styles.layout}"><aside class="${styles.sidebar}"><div class="${styles.greeting}"><img src="/images/reviews/avatar-1.png" alt=""/><div><span>Hello 👋</span><strong>Robert Fox</strong></div></div><nav aria-label="My account">${(
    [
      ['user', 'Personal Information'],
      ['box', 'My Orders'],
      ['heart', 'My Wishlists'],
      ['pin', 'Manage Addresses'],
      ['card', 'Saved Cards'],
      ['bell', 'Notifications'],
      ['settings', 'Settings'],
    ] as [keyof typeof paths, string][]
  )
    .map(
      ([key, label], index) =>
        `<button type="button" ${index === 0 ? 'aria-current="page"' : ''}>${icon(key)}${label}</button>`,
    )
    .join(
      '',
    )}</nav></aside><section class="${styles.details}" aria-label="Personal information"><form><div class="${styles.toolbar}"><div class="${styles.avatar}"><img src="/images/reviews/avatar-1.png" alt="Profile photo"/><button type="button" aria-label="Change profile photo">${icon('edit')}</button></div><button class="${styles.edit}" type="submit">${icon('edit')}<span>Edit Profile</span></button></div><div class="${styles.fields}"></div><p class="${styles.status}" role="status"></p></form></section></div>`;
  const fields = main.querySelector(`.${styles.fields}`)!;
  const definitions = [
    ['firstName', 'First Name', 'Robert', 'text', 'given-name'],
    ['lastName', 'Last Name', 'Fox', 'text', 'family-name'],
    ['phone', 'Phone Number', '(252) 555-0126', 'tel', 'tel'],
    ['email', 'Email Address', 'robertfox@exmple.com', 'email', 'email'],
    ['address', 'Address', '2464 Royal Ln. Mesa, New Jersey 45463', 'text', 'street-address'],
  ];
  for (const [name, title, value, type, autocomplete] of definitions) {
    const label = document.createElement('label');
    label.textContent = title!;
    const input = document.createElement('input');
    input.name = name!;
    input.value = value!;
    input.type = type!;
    input.setAttribute('autocomplete', autocomplete!);
    input.readOnly = true;
    input.required = true;
    label.append(input);
    fields.append(label);
  }
  const status = main.querySelector(`.${styles.status}`)!;
  let editing = false;
  main.querySelector('form')!.addEventListener('submit', (event) => {
    event.preventDefault();
    editing = !editing;
    main.querySelectorAll('input').forEach((input) => {
      input.readOnly = !editing;
    });
    main.querySelector(`.${styles.edit} span`)!.textContent = editing
      ? 'Save Changes'
      : 'Edit Profile';
    status.textContent = editing ? '' : 'Changes applied for this visit.';
    const inputs = main.querySelectorAll('input');
    main.querySelector(`.${styles.greeting} strong`)!.textContent =
      `${inputs[0]!.value} ${inputs[1]!.value}`;
    if (editing) inputs[0]!.focus();
  });
  const upload = document.createElement('input');
  upload.type = 'file';
  upload.accept = 'image/png,image/jpeg,image/webp';
  upload.hidden = true;
  main.querySelector(`.${styles.avatar} button`)!.addEventListener('click', () => upload.click());
  upload.addEventListener('change', () => {
    const file = upload.files?.[0];
    if (!file) return;
    if (
      !['image/png', 'image/jpeg', 'image/webp'].includes(file.type) ||
      file.size > 5 * 1024 * 1024
    ) {
      status.textContent = 'Choose a PNG, JPEG or WebP image under 5 MB.';
      return;
    }
    const reader = new FileReader();
    reader.onload = () =>
      main
        .querySelectorAll<HTMLImageElement>(`.${styles.avatar} img, .${styles.greeting} img`)
        .forEach((img) => {
          img.src = String(reader.result);
        });
    reader.readAsDataURL(file);
  });
  const details = main.querySelector<HTMLElement>(`.${styles.details}`)!;
  const wishlist = createWishlist();
  wishlist.hidden = true;
  details.after(wishlist);
  main.querySelectorAll('nav button').forEach((button, index) =>
    button.addEventListener('click', () => {
      if (index === 0 || index === 2) {
        main.querySelectorAll('nav button').forEach((item) => item.removeAttribute('aria-current'));
        button.setAttribute('aria-current', 'page');
        details.hidden = index === 2;
        wishlist.hidden = index !== 2;
        return;
      }
      if (details.hidden) {
        wishlist.querySelector('[role="status"]')!.textContent =
          `${button.textContent} is not available yet.`;
        return;
      }
      status.textContent = `${button.textContent} is not available yet.`;
    }),
  );
  page.append(header, main, upload, footer);
  return page;
}
