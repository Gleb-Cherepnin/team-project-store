import styles from './Settings.module.scss';

export function createSettings(): HTMLElement {
  const section = document.createElement('section');
  section.className = styles.settings;
  section.setAttribute('aria-label', 'Settings');
  const rows = [
    {
      id: 'appearance',
      title: 'Appearance',
      description: 'Customize how your theme looks on your device',
      options: ['Light', 'Dark', 'System'],
    },
    {
      id: 'language',
      title: 'Language',
      description: 'Select your language',
      options: ['English', 'Русский'],
    },
    {
      id: 'two-factor',
      title: 'Two-factor Authentication',
      description: 'Keep your account secure by enabling 2FA via mail',
    },
    { id: 'push', title: 'Push Notifications', description: 'Receive push notification' },
    {
      id: 'desktop',
      title: 'Desktop Notification',
      description: 'Receive push notification  in desktop',
    },
    { id: 'email', title: 'Email Notifications', description: 'Receive email notification' },
  ];
  const status = document.createElement('p');
  status.className = styles.status;
  status.setAttribute('role', 'status');
  rows.forEach(({ id, title, description, options }) => {
    const row = document.createElement('div');
    row.className = styles.row;
    const text = document.createElement('div');
    text.className = styles.text;
    const heading = document.createElement('h2');
    heading.id = `settings-${id}-label`;
    heading.textContent = title;
    const help = document.createElement('p');
    help.id = `settings-${id}-description`;
    help.textContent = description;
    text.append(heading, help);
    let control: HTMLSelectElement | HTMLInputElement;
    let container: HTMLElement;
    if (options) {
      container = document.createElement('div');
      container.className = styles.select;
      const select = document.createElement('select');
      options.forEach((value) => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        select.append(option);
      });
      control = select;
      container.append(select);
    } else {
      container = document.createElement('div');
      container.className = styles.toggle;
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.setAttribute('role', 'switch');
      input.checked = true;
      const track = document.createElement('span');
      track.setAttribute('aria-hidden', 'true');
      control = input;
      container.append(input, track);
    }
    control.setAttribute('aria-labelledby', heading.id);
    control.setAttribute('aria-describedby', help.id);
    control.addEventListener('change', () => {
      status.textContent =
        'Preview only: these settings are not connected to account services yet.';
    });
    row.append(text, container);
    section.append(row);
  });
  section.append(status);
  return section;
}
