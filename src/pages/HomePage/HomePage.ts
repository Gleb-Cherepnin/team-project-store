import { createHeader } from '../../components/Header/Header';
import { createArrowButton } from '../../components/ArrowButton/ArrowButton';

import { createProductCard, type Product } from '../../components/ProductCard/ProductCard';

import styles from './HomePage.module.scss';
import { createFooter } from '../../components/Footer/Footer';
export function createHomePage(): HTMLElement {
  const page = document.createElement('main');
  page.className = styles['home-page'];

  // Header
  const header = createHeader();

  // Home content
  const content = document.createElement('section');
  content.className = styles['home-page__content'];

  // Background text
  const backgroundText = document.createElement('span');
  backgroundText.className = styles['home-page__background-text'];

  const visibleText = document.createElement('span');
  visibleText.textContent = 'BEST ';

  const hiddenText = document.createElement('span');
  hiddenText.textContent = 'STOR';

  const visibleLetter = document.createElement('span');
  visibleLetter.textContent = 'E';

  backgroundText.append(visibleText, hiddenText, visibleLetter);

  // Intro container
  const intro = document.createElement('div');
  intro.className = styles['home-page__intro'];

  // Subtitle
  const subtitle = document.createElement('p');
  subtitle.textContent = 'Classic Exclusive';

  // Title
  const title = document.createElement('h1');
  title.textContent = "Women's Collection";

  // Discount
  const discount = document.createElement('p');
  discount.textContent = 'UPTO 40% OFF';

  // Shop button
  const shopButton = document.createElement('button');
  shopButton.className = styles['home-page__button'];
  shopButton.type = 'button';
  shopButton.textContent = 'Shop Now';

  const arrow = document.createElement('span');
  arrow.className = styles['home-page__arrow'];

  shopButton.append(arrow);

  intro.append(subtitle, title, discount, shopButton);

  // Image
  const image = document.createElement('img');
  image.className = styles['home-page__image'];
  image.src = '/images/auth/home-image.png';
  image.alt = "Women's Collection";

  content.append(backgroundText, intro, image);

  // Shop by Categories
  const categories = document.createElement('section');
  categories.className = styles['home-page__categories'];

  // Categories header
  const categoriesHeader = document.createElement('div');
  categoriesHeader.className = styles['home-page__categories-header'];

  // Categories title
  const categoriesTitle = document.createElement('h2');
  categoriesTitle.className = styles['home-page__categories-title'];
  categoriesTitle.textContent = 'Shop by Categories';

  // Navigation
  const navigation = document.createElement('div');
  navigation.className = styles['home-page__navigation'];

  // Cards window
  const cardsWindow = document.createElement('div');
  cardsWindow.className = styles['home-page__cards-window'];

  const cardsTrack = document.createElement('div');
  cardsTrack.className = styles['home-page__cards-track'];

  // Category images and titles
  const categoriesData = [
    { image: 'category-1.png', title: 'Casual Wear', background: 'Casual' },
    { image: 'category-2.png', title: 'Western Wear', background: 'Western' },
    { image: 'category-3.png', title: 'Jacket', background: 'Jacket' },
    { image: 'category-4.png', title: 'Kids cloth', background: 'Kids' },
    { image: 'category-5.png', title: 'T-shirts', background: 'T-shirts' },
    { image: 'category-6.png', title: 'Dresses', background: 'Dresses' },
    { image: 'category-7.png', title: 'Jumpsuits', background: 'Jumpsuits' },
    { image: 'category-8.png', title: 'Sarees', background: 'Sarees' },
  ];

  // Category cards
  categoriesData.forEach((category) => {
    const card = document.createElement('div');
    card.className = styles['home-page__card'];

    const cardBackgroundText = document.createElement('span');
    cardBackgroundText.className = styles['home-page__card-background-text'];
    cardBackgroundText.textContent = category.background;

    const categoryImage = document.createElement('img');
    categoryImage.className = styles['home-page__card-image'];
    categoryImage.src = `/images/categories/${category.image}`;
    categoryImage.alt = category.title;

    const label = document.createElement('div');
    label.className = styles['home-page__card-label'];
    label.textContent = category.title;

    card.append(cardBackgroundText, categoryImage, label);
    cardsTrack.append(card);
  });

  cardsWindow.append(cardsTrack);

  // Carousel logic
  let currentPage = 0;

  const totalPages = 2;
  const pageWidth = 1160;

  function updateCarousel(): void {
    cardsTrack.style.transform = `translateX(-${currentPage * pageWidth}px)`;

    previousButton.disabled = currentPage === 0;
    nextButton.disabled = currentPage === totalPages - 1;
  }

  // Previous button
  const previousButton = createArrowButton('previous', true, () => {
    if (currentPage > 0) {
      currentPage -= 1;
      updateCarousel();
    }
  });

  // Next button
  const nextButton = createArrowButton('next', false, () => {
    if (currentPage < totalPages - 1) {
      currentPage += 1;
      updateCarousel();
    }
  });

  navigation.append(previousButton, nextButton);

  categoriesHeader.append(categoriesTitle, navigation);
  categories.append(categoriesHeader, cardsWindow);

  // Our Bestseller
  const bestseller = document.createElement('section');
  bestseller.className = styles['home-page__bestseller'];

  // Bestseller title
  const bestsellerTitle = document.createElement('h2');
  bestsellerTitle.className = styles['home-page__bestseller-title'];
  bestsellerTitle.textContent = 'Our Bestseller';

  // Products data
  const products: Product[] = [
    {
      image: '/images/products/product-1.png',
      brand: 'Roadstar',
      name: 'Printed Cotton T-Shirt',
      price: '$38.00',
      oldPrice: '$40.00',
    },
    {
      image: '/images/products/product-2.png',
      brand: 'Allen Solly',
      name: 'Women Textured Handheld Bag',
      price: '$80.00',
      oldPrice: '$100.00',
    },
    {
      image: '/images/products/product-3.png',
      brand: 'Louis Philippe Sport',
      name: 'Polo Collar T-Shirt',
      price: '$50.00',
      oldPrice: '$55.00',
    },
    {
      image: '/images/products/product-4.png',
      brand: 'Adidas',
      name: 'Men adi-dash Running Shoes',
      price: '$60.00',
      oldPrice: '$75.00',
    },
    {
      image: '/images/products/product-5.png',
      brand: 'Trendyol',
      name: 'Floral Embroidered Maxi Dress',
      price: '$35.00',
      oldPrice: '$45.00',
    },
    {
      image: '/images/products/product-6.png',
      brand: 'YK Disney',
      name: 'Girls Pink Moana Printed Dress',
      price: '$80.00',
      oldPrice: '$100.00',
    },
    {
      image: '/images/products/product-7.png',
      brand: 'US Polo',
      name: 'Tailored Cotton Casual Shirt',
      price: '$40.00',
      oldPrice: '$50.00',
    },
    {
      image: '/images/products/product-8.png',
      brand: 'Zyla',
      name: 'Women Sandals',
      price: '$35.00',
      oldPrice: '$40.00',
    },
  ];

  // Products grid
  const productsGrid = document.createElement('div');
  productsGrid.className = styles['home-page__bestseller-grid'];

  products.forEach((product) => {
    productsGrid.append(createProductCard(product));
  });

  bestseller.append(bestsellerTitle, productsGrid);

  // Deals of the Month
  const deals = document.createElement('section');
  deals.className = styles['home-page__deals'];

  // Deals image
  const dealsImage = document.createElement('img');
  dealsImage.className = styles['home-page__deals-image'];
  dealsImage.src = '/images/auth/time-miss.jpg';
  dealsImage.alt = 'Deals of the Month';

  const dealsContent = document.createElement('div');
  dealsContent.className = styles['home-page__deals-content'];

  // Deals title
  const dealsTitle = document.createElement('h2');
  dealsTitle.className = styles['home-page__deals-title'];
  dealsTitle.textContent = 'Deals of the Month';

  // Description
  const dealsDescription = document.createElement('p');
  dealsDescription.className = styles['home-page__deals-description'];
  dealsDescription.textContent =
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters';

  // Countdown timer
  const timer = document.createElement('div');
  timer.className = styles['home-page__deals-timer'];

  const timerUnits = [
    { label: 'Days', value: 120, className: 'days' },
    { label: 'Hours', value: 18, className: '' },
    { label: 'Mins', value: 15, className: '' },
    { label: 'Secs', value: 10, className: '' },
  ];

  const timerElements: HTMLElement[] = [];

  timerUnits.forEach((unit) => {
    const box = document.createElement('div');
    box.className = styles['home-page__deals-timer-box'];

    const number = document.createElement('span');
    number.className = [
      styles['home-page__deals-timer-number'],
      unit.className ? styles[`home-page__deals-timer-number--${unit.className}`] : '',
    ]
      .filter(Boolean)
      .join(' ');

    number.textContent = String(unit.value);

    const label = document.createElement('span');
    label.className = styles['home-page__deals-timer-label'];
    label.textContent = unit.label;

    box.append(number, label);
    timer.append(box);
    timerElements.push(number);
  });

  // Countdown storage
  const storageKey = 'deals-of-month-countdown';
  const savedEndTime = Number(localStorage.getItem(storageKey));

  const countdownEnd =
    savedEndTime > Date.now()
      ? savedEndTime
      : Date.now() + 120 * 24 * 60 * 60 * 1000 + 18 * 60 * 60 * 1000 + 15 * 60 * 1000 + 10 * 1000;

  if (savedEndTime <= Date.now()) {
    localStorage.setItem(storageKey, String(countdownEnd));
  }

  function updateTimer(): void {
    const remaining = Math.max(0, countdownEnd - Date.now());

    const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((remaining / (1000 * 60)) % 60);
    const seconds = Math.floor((remaining / 1000) % 60);

    const values = [days, hours, minutes, seconds];

    timerElements.forEach((element, index) => {
      element.textContent = String(values[index]).padStart(index === 0 ? 1 : 2, '0');
    });
  }

  updateTimer();
  window.setInterval(updateTimer, 1000);

  // View All Products button
  const viewAllButton = document.createElement('button');
  viewAllButton.className = styles['home-page__deals-button'];
  viewAllButton.type = 'button';

  const buttonText = document.createElement('span');
  buttonText.textContent = 'View All Products';

  const dealsArrow = document.createElement('span');
  dealsArrow.className = styles['home-page__deals-arrow'];

  viewAllButton.append(buttonText, dealsArrow);

  dealsContent.append(dealsTitle, dealsDescription, timer, viewAllButton);

  deals.append(dealsContent, dealsImage);

  // What our Customer say's
  const reviews = document.createElement('section');
  reviews.className = styles['home-page__reviews'];

  const reviewsHeader = document.createElement('div');
  reviewsHeader.className = styles['home-page__reviews-header'];

  // Title
  const reviewsTitle = document.createElement('h2');
  reviewsTitle.className = styles['home-page__reviews-title'];
  reviewsTitle.textContent = "What our Customer say's";

  // Navigation
  const reviewsArrows = document.createElement('div');
  reviewsArrows.className = styles['home-page__reviews-arrows'];

  // Cards window
  const reviewsWindow = document.createElement('div');
  reviewsWindow.className = styles['home-page__reviews-window'];

  const reviewsTrack = document.createElement('div');
  reviewsTrack.className = styles['home-page__reviews-track'];

  // Reviews data
  const reviewsData = [
    {
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout, The point of using Lorem Ipsum.',
      name: 'Leslie Alexander',
      role: 'Model',
      image: '/images/reviews/avatar-1.png',
    },
    {
      text: 'I am impressed with the quality and style of the collection. The clothes fit perfectly, and the whole shopping experience was smooth and enjoyable.',
      name: 'Jacob Jones',
      role: 'Co-Founder',
      image: '/images/reviews/avatar-2.png',
    },
    {
      text: 'Great customer service and beautiful products! I found exactly what I was looking for. Definitely one of my favourite places to shop.',
      name: 'Jenny Wilson',
      role: 'Fashion Designer',
      image: '/images/reviews/avatar-3.png',
    },
    {
      text: 'The quality of the products exceeded my expectations. Everything looks beautiful, feels comfortable and arrived perfectly packaged.',
      name: 'Sophia Wilson',
      role: 'Model',
      image: '/images/reviews/avatar-4.png',
    },
    {
      text: 'I love the attention to detail and the variety of styles. Shopping here is always a pleasant experience.',
      name: 'Daniel Taylor',
      role: 'Photographer',
      image: '/images/reviews/avatar-5.png',
    },
    {
      text: 'A wonderful collection with timeless designs. I am very happy with my purchase and will definitely come back again.',
      name: 'Olivia Martin',
      role: 'Fashion Blogger',
      image: '/images/reviews/avatar-6.png',
    },
  ];

  // Create review cards
  reviewsData.forEach((review) => {
    const card = document.createElement('article');
    card.className = styles['home-page__reviews-card'];

    // Stars
    const stars = document.createElement('div');
    stars.className = styles['home-page__reviews-stars'];

    for (let i = 0; i < 5; i += 1) {
      const star = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

      star.setAttribute('viewBox', '0 0 24 24');
      star.setAttribute('width', '25');
      star.setAttribute('height', '25');
      star.setAttribute('fill', '#F5A623');

      const starPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

      starPath.setAttribute(
        'd',
        'M12 2.5c.4 0 .7.3.9.7l2.1 4.3 4.8.7c.9.1 1.2 1.2.5 1.8l-3.5 3.4.8 4.8c.1.9-.8 1.5-1.6 1.1L12 17l-4.3 2.3c-.8.4-1.7-.2-1.6-1.1l.8-4.8-3.5-3.4c-.7-.6-.4-1.7.5-1.8l4.8-.7 2.1-4.3c.2-.4.7-.7 1.2-.7Z',
      );

      star.append(starPath);
      stars.append(star);
    }

    // Review text
    const text = document.createElement('p');
    text.className = styles['home-page__reviews-text'];
    text.textContent = review.text;

    // Author
    const author = document.createElement('div');
    author.className = styles['home-page__reviews-author'];

    const avatar = document.createElement('img');
    avatar.className = styles['home-page__reviews-avatar'];
    avatar.src = review.image;
    avatar.alt = review.name;

    const authorInfo = document.createElement('div');
    authorInfo.className = styles['home-page__reviews-author-info'];

    const name = document.createElement('p');
    name.className = styles['home-page__reviews-name'];
    name.textContent = review.name;

    const role = document.createElement('p');
    role.className = styles['home-page__reviews-role'];
    role.textContent = review.role;

    authorInfo.append(name, role);
    author.append(avatar, authorInfo);

    card.append(stars, text, author);
    reviewsTrack.append(card);
  });

  reviewsWindow.append(reviewsTrack);

  // Carousel logic
  let currentReviewsPage = 0;

  const totalReviewsPages = 2;
  const reviewsPageWidth = 1170;

  function updateReviewsCarousel(): void {
    reviewsTrack.style.transform = `translateX(-${currentReviewsPage * reviewsPageWidth}px)`;

    reviewsPreviousButton.disabled = currentReviewsPage === 0;
    reviewsNextButton.disabled = currentReviewsPage === totalReviewsPages - 1;
  }

  // Previous button
  const reviewsPreviousButton = createArrowButton('previous', true, () => {
    if (currentReviewsPage > 0) {
      currentReviewsPage -= 1;
      updateReviewsCarousel();
    }
  });

  // Next button
  const reviewsNextButton = createArrowButton('next', false, () => {
    if (currentReviewsPage < totalReviewsPages - 1) {
      currentReviewsPage += 1;
      updateReviewsCarousel();
    }
  });

  reviewsArrows.append(reviewsPreviousButton, reviewsNextButton);
  updateReviewsCarousel();
  reviewsHeader.append(reviewsTitle, reviewsArrows);
  reviews.append(reviewsHeader, reviewsWindow);

  // Instagram Stories
  const instagram = document.createElement('section');
  instagram.className = styles['home-page__instagram'];

  // Title
  const instagramTitle = document.createElement('h2');
  instagramTitle.className = styles['home-page__instagram-title'];
  instagramTitle.textContent = 'Our Instagram Stories';

  // Instagram photos
  const instagramPhotos = document.createElement('div');
  instagramPhotos.className = styles['home-page__instagram-photos'];

  const instagramImages = [
    '/images/instagram/instagram-1.png',
    '/images/instagram/instagram-2.png',
    '/images/instagram/instagram-3.png',
    '/images/instagram/instagram-4.png',
  ];

  instagramImages.forEach((image, index) => {
    const photo = document.createElement('div');
    photo.className = styles['home-page__instagram-photo'];

    const img = document.createElement('img');
    img.src = image;
    img.alt = `Instagram story ${index + 1}`;

    const instagramButton = document.createElement('button');
    instagramButton.className = styles['home-page__instagram-button'];
    instagramButton.type = 'button';
    instagramButton.setAttribute('aria-label', 'Instagram');

    const instagramIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    instagramIcon.setAttribute('viewBox', '0 0 24 24');
    instagramIcon.setAttribute('width', '24');
    instagramIcon.setAttribute('height', '24');
    instagramIcon.setAttribute('fill', 'none');
    instagramIcon.setAttribute('stroke', 'currentColor');
    instagramIcon.setAttribute('stroke-width', '1.8');

    const instagramPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    instagramPath.setAttribute(
      'd',
      'M7 2.5h10A4.5 4.5 0 0 1 21.5 7v10a4.5 4.5 0 0 1-4.5 4.5H7A4.5 4.5 0 0 1 2.5 17V7A4.5 4.5 0 0 1 7 2.5Z M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z M17.5 6.5h.01',
    );

    instagramPath.setAttribute('stroke-linecap', 'round');
    instagramPath.setAttribute('stroke-linejoin', 'round');

    instagramIcon.append(instagramPath);
    instagramButton.append(instagramIcon);

    photo.append(img, instagramButton);
    instagramPhotos.append(photo);
  });

  // Store benefits
  const benefits = document.createElement('div');
  benefits.className = styles['home-page__instagram-benefits'];

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
    item.className = styles['home-page__instagram-benefit'];

    const icon = document.createElement('img');
    icon.className = styles['home-page__instagram-benefit-icon'];
    icon.src = benefit.icon;
    icon.alt = '';

    const info = document.createElement('div');
    info.className = styles['home-page__instagram-benefit-info'];

    const title = document.createElement('h3');
    title.className = styles['home-page__instagram-benefit-title'];
    title.textContent = benefit.title;

    const description = document.createElement('p');
    description.className = styles['home-page__instagram-benefit-description'];
    description.textContent = benefit.description;

    info.append(title, description);
    item.append(icon, info);
    benefits.append(item);
  });

  instagram.append(instagramTitle, instagramPhotos, benefits);

  // Append page sections
  const footer = createFooter();
  page.append(header, content, categories, bestseller, deals, reviews, instagram, footer);

  return page;
}
