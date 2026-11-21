import styles from './Notifications.module.scss';

const icons = {
  order: 'm12 2 9 5v10l-9 5-9-5V7l9-5Z M3 7l9 5 9-5 M12 12v10 M7 4.8l9 5v5',
  delivered:
    'm3 9 9 5 9-5 M4 12v6l8 4 8-4v-6 M12 14v8 M3 9l3-5 6 3 6-3 3 5 M8 10l-4 2 M16 10l4 2 M9 3l2 2 4-4',
  lock: 'M7 9V7a5 5 0 0 1 10 0v2 M7 9h10a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3Z M14 15a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z',
};

export function createNotifications(): HTMLElement {
  const section = document.createElement('section');
  section.className = styles.notifications;
  section.setAttribute('aria-label', 'Notifications');
  const list = document.createElement('ul');
  list.className = styles.list;
  const notifications: {
    title: string;
    description: string;
    time: string;
    icon?: keyof typeof icons;
  }[] = [
    {
      title: 'Profile Update',
      description: 'You just update your profile picture',
      time: 'Just Now',
    },
    {
      title: 'Your order placed successfully',
      description: 'You place a new order',
      time: '11:16 AM',
      icon: 'order',
    },
    {
      title: 'Order delivered',
      description: 'Your order has been delivered successfully',
      time: '09:00 AM',
      icon: 'delivered',
    },
    {
      title: 'You share your feedback',
      description: '“It was an amazing experience with your company”',
      time: 'Yesterday',
    },
    {
      title: 'Password Update successfully',
      description: 'Your password has been updated successfully',
      time: 'Yesterday',
      icon: 'lock',
    },
  ];
  notifications.forEach((notification) => {
    const item = document.createElement('li');
    item.className = styles.item;
    const avatar = document.createElement('div');
    avatar.className = styles.avatar;
    if (notification.icon) {
      avatar.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${icons[notification.icon]}"/></svg>`;
    } else {
      const image = document.createElement('img');
      image.src = '/images/reviews/avatar-1.png';
      image.alt = '';
      image.dataset.profileAvatar = '';
      avatar.append(image);
    }
    const content = document.createElement('div');
    content.className = styles.content;
    const title = document.createElement('h2');
    title.textContent = notification.title;
    const description = document.createElement('p');
    description.textContent = notification.description;
    content.append(title, description);
    const time = document.createElement('span');
    time.className = styles.time;
    time.textContent = notification.time;
    item.append(avatar, content, time);
    list.append(item);
  });
  const status = document.createElement('p');
  status.className = styles.status;
  status.setAttribute('role', 'status');
  section.append(list, status);
  return section;
}
