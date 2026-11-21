import { createHeader } from '../../components/Header/Header';
import { createFooter } from '../../components/Footer/Footer';
import headerStyles from '../../components/Header/Header.module.scss';
import footerStyles from '../../components/Footer/Footer.module.scss';
import styles from './ProfilePage.module.scss';
import { createWishlist } from './tabs/Wishlist/Wishlist';
import { createAddresses } from './tabs/Addresses/Addresses';
import { createSavedCards } from './tabs/SavedCards/SavedCards';
import { createNotifications } from './tabs/Notifications/Notifications';
import { createSettings } from './tabs/Settings/Settings';

const profileIcons = {
  user: 'icon_profile.svg',
  box: 'icon_orders.svg',
  heart: 'icon_wishlist.svg',
  pin: 'icon_address.svg',
  card: 'icon_cards.svg',
  bell: 'icon_notification.svg',
  settings: 'icon_settings.svg',
};
function icon(name: keyof typeof profileIcons | 'edit'): string {
  if (name !== 'edit') {
    return `<span class="${styles.menuIcon}" style="--profile-icon: url('/images/profile/${profileIcons[name]}')" aria-hidden="true"></span>`;
  }
  return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3H5a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3v-7 M16 3l5 5 M10 14l-1 5 5-1L22 10a3.5 3.5 0 0 0-5-5Z"/></svg>';
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
    ] as [keyof typeof profileIcons, string][]
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
    details.querySelectorAll('input').forEach((input) => {
      input.readOnly = !editing;
    });
    main.querySelector(`.${styles.edit} span`)!.textContent = editing
      ? 'Save Changes'
      : 'Edit Profile';
    status.textContent = editing ? '' : 'Changes applied for this visit.';
    const inputs = details.querySelectorAll('input');
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
        .querySelectorAll<HTMLImageElement>(
          `.${styles.avatar} img, .${styles.greeting} img, [data-profile-avatar]`,
        )
        .forEach((img) => {
          img.src = String(reader.result);
        });
    reader.readAsDataURL(file);
  });
  const details = main.querySelector<HTMLElement>(`.${styles.details}`)!;
  const wishlist = createWishlist();
  const addresses = createAddresses();
  const cards = createSavedCards();
  const notifications = createNotifications();
  const settings = createSettings();
  settings.hidden = true;
  notifications.hidden = true;
  cards.hidden = true;
  addresses.hidden = true;
  wishlist.hidden = true;
  details.after(wishlist, addresses, cards, notifications, settings);
  main.querySelectorAll('nav button').forEach((button, index) =>
    button.addEventListener('click', () => {
      if (index === 0 || index === 2 || index === 3 || index === 4 || index === 5 || index === 6) {
        main.querySelectorAll('nav button').forEach((item) => item.removeAttribute('aria-current'));
        button.setAttribute('aria-current', 'page');
        details.hidden = index !== 0;
        wishlist.hidden = index !== 2;
        addresses.hidden = index !== 3;
        cards.hidden = index !== 4;
        notifications.hidden = index !== 5;
        settings.hidden = index !== 6;
        return;
      }
      if (details.hidden) {
        [wishlist, addresses, cards, notifications, settings]
          .find((panel) => !panel.hidden)!
          .querySelector('[role="status"]')!.textContent =
          `${button.textContent} is not available yet.`;
        return;
      }
      status.textContent = `${button.textContent} is not available yet.`;
    }),
  );
  page.append(header, main, upload, footer);
  return page;
}
