import styles from './StoreBenefits.module.scss';

export function createStoreBenefits(): HTMLElement {
  const benefits = document.createElement('div');
  benefits.className = styles['store-benefits'];

  const benefitsData = [
    {
      icon: '/images/auth/shipping.png',
      title: 'Free Shipping',
      description: 'Free shipping for order above $150',
    },
    {
      icon: '/images/auth/money.png',
      title: 'Money Guarantee',
      description: 'Within 30 days for an exchange',
    },
    {
      icon: '/images/auth/support.png',
      title: 'Online Supports',
      description: '24 hours a day, 7 days a week',
    },
    {
      icon: '/images/auth/payment.png',
      title: 'Flexible Payment',
      description: 'Pay with multiple credit cards',
    },
  ];

  benefitsData.forEach((benefit) => {
    const item = document.createElement('div');
    item.className = styles['store-benefits__item'];

    const icon = document.createElement('img');
    icon.className = styles['store-benefits__icon'];
    icon.src = benefit.icon;
    icon.alt = '';

    const info = document.createElement('div');
    info.className = styles['store-benefits__info'];

    const title = document.createElement('h3');
    title.className = styles['store-benefits__title'];
    title.textContent = benefit.title;

    const description = document.createElement('p');
    description.className = styles['store-benefits__description'];
    description.textContent = benefit.description;

    info.append(title, description);
    item.append(icon, info);
    benefits.append(item);
  });

  return benefits;
}
