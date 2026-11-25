import { addCartItem, getCart, setCartItemQuantity } from '../../services/cart';
import { createHeader } from '../../components/Header/Header';
import { createProductCard } from '../../components/ProductCard/ProductCard';
import productCardStyles from '../../components/ProductCard/ProductCard.module.scss';
import { allProducts } from '../ShopPage/ShopPage';
import styles from './DescriptionsPage.module.scss';
import { createStoreBenefits } from '../../components/StoreBenefits/StoreBenefits';
import { createFooter } from '../../components/Footer/Footer';

export function createDescriptionsPage(): HTMLElement {
  const page = document.createElement('div');
  page.className = styles.descriptionsPage;
  page.dataset.cartProduct = '';

  const header = createHeader();

  // Product gallery
  const gallery = document.createElement('section');
  gallery.className = styles.descriptionsPage__gallery;

  const galleryTop = document.createElement('div');
  galleryTop.className = styles['descriptionsPage__top'];

  // Image column
  const imageColumn = document.createElement('div');
  imageColumn.className = styles['descriptionsPage__image-column'];

  // Main image
  const mainImageContainer = document.createElement('div');
  mainImageContainer.className = styles.descriptionsPage__mainImage;

  const productImage = document.createElement('img');
  productImage.className = styles.descriptionsPage__image;
  productImage.src = sessionStorage.getItem('selectedProductImage') || '';
  productImage.alt = 'Selected product';

  mainImageContainer.append(productImage);

  // Thumbnails
  const thumbnails = document.createElement('div');
  thumbnails.className = styles.descriptionsPage__thumbnails;

  for (let i = 0; i < 4; i += 1) {
    const thumbnail = document.createElement('div');
    thumbnail.className = styles.descriptionsPage__thumbnail;

    const image = document.createElement('img');
    image.className = styles.descriptionsPage__thumbnailImage;
    image.src = productImage.src;
    image.alt = `Product image ${i + 1}`;

    thumbnail.append(image);
    thumbnails.append(thumbnail);
  }

  imageColumn.append(mainImageContainer, thumbnails);

  // Product information
  const productInfo = document.createElement('div');
  productInfo.className = styles['descriptionsPage__info'];

  // Brand
  const brand = document.createElement('p');
  brand.className = styles['descriptionsPage__brand'];
  brand.textContent = sessionStorage.getItem('selectedProductBrand') || '';

  // Product name
  const name = document.createElement('h1');
  name.className = styles['descriptionsPage__name'];
  name.textContent = sessionStorage.getItem('selectedProductName') || '';

  // Reviews
  const reviews = document.createElement('div');
  reviews.className = styles['descriptionsPage__reviews'];

  const stars = document.createElement('div');
  stars.className = styles['descriptionsPage__stars'];

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

  const reviewsText = document.createElement('span');
  reviewsText.className = styles['descriptionsPage__reviews-text'];
  reviewsText.textContent = '5.0 (121 Reviews)';

  reviews.append(stars, reviewsText);

  // Product prices
  const prices = document.createElement('div');
  prices.className = styles['descriptionsPage__prices'];

  const price = document.createElement('span');
  price.className = productCardStyles['product-card__price'];
  price.textContent = sessionStorage.getItem('selectedProductPrice') || '';

  const oldPrice = document.createElement('span');
  oldPrice.className = productCardStyles['product-card__old-price'];
  oldPrice.textContent = sessionStorage.getItem('selectedProductOldPrice') || '';

  prices.append(price, oldPrice);

  // Product description
  const description = document.createElement('p');
  description.className = styles['descriptionsPage__description'];
  description.textContent =
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters';

  // Product sizes
  const sizeSection = document.createElement('div');
  sizeSection.className = styles['descriptionsPage__size-section'];

  const sizeTitle = document.createElement('p');
  sizeTitle.className = styles['descriptionsPage__size-title'];
  sizeTitle.textContent = 'Size';

  const sizes = document.createElement('div');
  sizes.className = styles['descriptionsPage__sizes'];

  let selectedSize = 'S';
  const sizeOptions = ['S', 'M', 'L', 'XL', 'XXL'];

  sizeOptions.forEach((size, index) => {
    const button = document.createElement('button');
    button.className = styles['descriptionsPage__size-button'];
    button.textContent = size;
    button.type = 'button';

    if (index === 0) {
      button.classList.add(styles['descriptionsPage__size-button--active']);
    }

    button.addEventListener('click', () => {
      selectedSize = size;
      sizes.querySelectorAll('button').forEach((sizeButton) => {
        sizeButton.classList.remove(styles['descriptionsPage__size-button--active']);
      });

      button.classList.add(styles['descriptionsPage__size-button--active']);
    });

    sizes.append(button);
  });

  sizeSection.append(sizeTitle, sizes);

  // Purchase actions
  const purchaseActions = document.createElement('div');
  purchaseActions.className = styles['descriptionsPage__purchase-actions'];

  // Quantity counter
  const quantity = document.createElement('div');
  quantity.className = styles['descriptionsPage__quantity'];

  const decreaseButton = document.createElement('button');
  decreaseButton.className = styles['descriptionsPage__quantity-button'];
  decreaseButton.type = 'button';
  decreaseButton.textContent = '−';

  const quantityValue = document.createElement('span');
  quantityValue.className = styles['descriptionsPage__quantity-value'];
  quantityValue.textContent = '1';

  const increaseButton = document.createElement('button');
  increaseButton.className = styles['descriptionsPage__quantity-button'];
  increaseButton.type = 'button';
  increaseButton.textContent = '+';

  let count = 1;

  decreaseButton.addEventListener('click', () => {
    if (count > 0) {
      count -= 1;
      quantityValue.textContent = String(count);
    }
  });

  increaseButton.addEventListener('click', () => {
    count += 1;
    quantityValue.textContent = String(count);
  });

  quantity.append(decreaseButton, quantityValue, increaseButton);

  // Add to Cart button
  const addToCartButton = document.createElement('button');
  addToCartButton.className = styles['descriptionsPage__cart-button'];
  addToCartButton.type = 'button';
  addToCartButton.textContent = 'Add to Cart';
  addToCartButton.addEventListener('click', () => {
    if (count === 0) return;
    const value = Number((price.textContent || '').replace(/[^0-9.]/g, ''));
    if (!name.textContent || !productImage.getAttribute('src') || !Number.isFinite(value)) return;
    addCartItem({
      id: sessionStorage.getItem('selectedProductId') || undefined,
      name: name.textContent,
      image: productImage.src,
      price: value,
      size: selectedSize,
      quantity: findCartItem() === -1 ? count : 1,
      brand: brand.textContent || '',
      oldPrice: oldPrice.textContent || '',
    });
    addToCartButton.textContent = 'Added to Cart';
    addToCartButton.classList.add(styles['descriptionsPage__cart-button--added']);
  });
  addToCartButton.setAttribute('aria-live', 'polite');
  function findCartItem(): number {
    return getCart().findIndex(
      (item) =>
        item.name === name.textContent &&
        item.image === productImage.src &&
        item.size === selectedSize,
    );
  }
  function updateCartButton(): void {
    const added = findCartItem() !== -1;
    addToCartButton.textContent = added ? 'Added to Cart' : 'Add to Cart';
    addToCartButton.classList.toggle(styles['descriptionsPage__cart-button--added'], added);
  }
  function syncQuantity(): void {
    const item = getCart()[findCartItem()];
    count = item?.quantity ?? 0;
    quantityValue.textContent = String(count);
    updateCartButton();
  }
  sizes.addEventListener('click', syncQuantity);
  quantity.addEventListener('click', () => {
    const index = findCartItem();
    if (index !== -1) setCartItemQuantity(index, count);
    updateCartButton();
  });
  page.addEventListener('cartchange', syncQuantity);
  if (findCartItem() !== -1) syncQuantity();
  else updateCartButton();

  // Wishlist button
  const wishlistButton = document.createElement('button');
  wishlistButton.className = styles['descriptionsPage__wishlist-button'];
  wishlistButton.type = 'button';
  wishlistButton.setAttribute('aria-label', 'Add to wishlist');

  const heart = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  heart.setAttribute('viewBox', '0 0 24 24');
  heart.setAttribute('width', '24');
  heart.setAttribute('height', '24');
  heart.setAttribute('fill', 'none');
  heart.setAttribute('stroke', 'currentColor');
  heart.setAttribute('stroke-width', '1.5');
  heart.setAttribute('stroke-linecap', 'round');
  heart.setAttribute('stroke-linejoin', 'round');

  const heartPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  heartPath.setAttribute(
    'd',
    'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z',
  );

  heart.append(heartPath);
  wishlistButton.append(heart);

  purchaseActions.append(quantity, addToCartButton, wishlistButton);

  productInfo.append(brand, name, reviews, prices, description, sizeSection, purchaseActions);

  galleryTop.append(imageColumn, productInfo);

  // Tabs
  const tabs = document.createElement('div');
  tabs.className = styles['descriptionsPage__tabs'];

  const tabNames = ['Descriptions', 'Additional Information', 'Reviews'];

  tabNames.forEach((tabName, index) => {
    const tab = document.createElement('button');
    tab.className = styles['descriptionsPage__tab'];
    tab.type = 'button';
    tab.textContent = tabName;

    if (index === 0) {
      tab.classList.add(styles['descriptionsPage__tab--active']);
    }

    tab.addEventListener('click', () => {
      tabs.querySelectorAll('button').forEach((button) => {
        button.classList.remove(styles['descriptionsPage__tab--active']);
      });

      tab.classList.add(styles['descriptionsPage__tab--active']);

      if (tabName === 'Descriptions') {
        tabContent.replaceChildren(firstParagraph, secondParagraph);
      } else if (tabName === 'Additional Information') {
        tabContent.replaceChildren(additionalInfo);
      } else {
        tabContent.replaceChildren(reviewsContent);
      }
    });

    tabs.append(tab);
  });

  // Tab content
  const tabContent = document.createElement('div');
  tabContent.className = styles['descriptionsPage__tab-content'];

  const firstParagraph = document.createElement('p');
  firstParagraph.textContent =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.";

  const secondParagraph = document.createElement('p');
  secondParagraph.textContent =
    'Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).';

  tabContent.append(firstParagraph, secondParagraph);

  // Additional information
  const additionalInfo = document.createElement('div');
  additionalInfo.className = styles['descriptionsPage__additional-info'];

  const sizeLabel = document.createElement('span');
  sizeLabel.className = styles['descriptionsPage__additional-label'];
  sizeLabel.textContent = 'Size';

  const sizeValues = document.createElement('span');
  sizeValues.className = styles['descriptionsPage__additional-value'];
  sizeValues.textContent = 'S, M, L, XL, XXL';

  additionalInfo.append(sizeLabel, sizeValues);

  // Reviews content
  const reviewsContent = document.createElement('div');
  reviewsContent.className = styles['descriptionsPage__reviews-content'];

  // Title
  const customerReviews = document.createElement('h3');
  customerReviews.className = styles['descriptionsPage__customer-reviews'];
  customerReviews.textContent = 'Customer Reviews';

  // Reviewer
  const reviewer = document.createElement('div');
  reviewer.className = styles['descriptionsPage__reviewer'];

  // Avatar
  const avatar = document.createElement('img');
  avatar.className = styles['descriptionsPage__review-avatar'];
  avatar.src = '/images/reviews/avatar-2.png';
  avatar.alt = 'Mark Williams';

  // Reviewer information
  const reviewerInfo = document.createElement('div');
  reviewerInfo.className = styles['descriptionsPage__reviewer-info'];

  const reviewerName = document.createElement('p');
  reviewerName.className = styles['descriptionsPage__reviewer-name'];
  reviewerName.textContent = 'Mark Williams';

  // Stars
  const reviewStars = document.createElement('div');
  reviewStars.className = styles['descriptionsPage__review-stars'];

  for (let i = 0; i < 5; i += 1) {
    const star = document.createElement('span');
    star.textContent = '★';
    reviewStars.append(star);
  }

  reviewerInfo.append(reviewerName, reviewStars);
  reviewer.append(avatar, reviewerInfo);

  // Review title
  const reviewTitle = document.createElement('h4');
  reviewTitle.className = styles['descriptionsPage__review-title'];
  reviewTitle.textContent = 'Excellent Product, I Love It 😍';

  // Review description
  const reviewDescription = document.createElement('p');
  reviewDescription.className = styles['descriptionsPage__review-description'];
  reviewDescription.textContent =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.";

  // Review date
  const reviewDate = document.createElement('p');
  reviewDate.className = styles['descriptionsPage__review-date'];

  const reviewBy = document.createElement('span');
  reviewBy.textContent = 'Review by ';

  const reviewAuthor = document.createElement('strong');
  reviewAuthor.textContent = 'Krist';

  const postedOn = document.createElement('span');
  postedOn.textContent = ' Posted on ';

  const date = document.createElement('strong');
  date.textContent = 'June 05, 2023';

  reviewDate.append(reviewBy, reviewAuthor, postedOn, date);

  // Second review
  const secondReviewer = document.createElement('div');
  secondReviewer.className = styles['descriptionsPage__second-reviewer'];

  // Avatar
  const secondAvatar = document.createElement('img');
  secondAvatar.className = styles['descriptionsPage__review-avatar'];
  secondAvatar.src = '/images/reviews/avatar-1.png';
  secondAvatar.alt = 'Alexa Johnson';

  // Reviewer information
  const secondReviewerInfo = document.createElement('div');
  secondReviewerInfo.className = styles['descriptionsPage__reviewer-info'];

  const secondReviewerName = document.createElement('p');
  secondReviewerName.className = styles['descriptionsPage__reviewer-name'];
  secondReviewerName.textContent = 'Alexa Johnson';

  const secondReviewStars = document.createElement('div');
  secondReviewStars.className = styles['descriptionsPage__review-stars'];

  for (let i = 0; i < 5; i += 1) {
    const star = document.createElement('span');
    star.textContent = '★';
    secondReviewStars.append(star);
  }

  secondReviewerInfo.append(secondReviewerName, secondReviewStars);
  secondReviewer.append(secondAvatar, secondReviewerInfo);

  // Review title
  const secondReviewTitle = document.createElement('h4');
  secondReviewTitle.className = styles['descriptionsPage__review-title'];
  secondReviewTitle.textContent = 'My Daughter is very much happy with this products';

  // Review description
  const secondReviewDescription = document.createElement('p');
  secondReviewDescription.className = styles['descriptionsPage__review-description'];
  secondReviewDescription.textContent =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.";

  // Review date
  const secondReviewDate = document.createElement('p');
  secondReviewDate.className = styles['descriptionsPage__second-review-date'];
  secondReviewDate.textContent = 'Review by Krist Posted on June 05, 2023';

  // Add your Review
  const addReview = document.createElement('div');
  addReview.className = styles['descriptionsPage__add-review'];

  // Title
  const addReviewTitle = document.createElement('h3');
  addReviewTitle.className = styles['descriptionsPage__add-review-title'];
  addReviewTitle.textContent = 'Add your Review';

  // Rating label
  const ratingLabel = document.createElement('p');
  ratingLabel.className = styles['descriptionsPage__rating-label'];
  ratingLabel.textContent = 'Your Rating';

  // Rating options
  const ratingOptions = document.createElement('div');
  ratingOptions.className = styles['descriptionsPage__rating-options'];

  let selectedRating = 0;

  for (let i = 1; i <= 5; i += 1) {
    const ratingRow = document.createElement('div');
    ratingRow.className = styles['descriptionsPage__rating-row'];

    for (let j = 1; j <= i; j += 1) {
      const star = document.createElement('button');
      star.className = styles['descriptionsPage__rating-star'];
      star.type = 'button';
      star.textContent = '★';
      star.setAttribute('aria-label', `${i} stars`);

      star.addEventListener('click', () => {
        selectedRating = i;

        ratingOptions.querySelectorAll('button').forEach((button) => {
          const row = button.parentElement;

          if (row) {
            const rowRating = Array.from(ratingOptions.children).indexOf(row) + 1;

            button.classList.toggle(
              styles['descriptionsPage__rating-star--active'],
              rowRating === selectedRating,
            );
          }
        });
      });

      ratingRow.append(star);
    }

    ratingOptions.append(ratingRow);
  }

  // Review form
  const reviewForm = document.createElement('form');
  reviewForm.className = styles['descriptionsPage__review-form'];

  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Name';
  nameLabel.className = styles['descriptionsPage__form-label'];

  const nameInput = document.createElement('input');
  nameInput.className = styles['descriptionsPage__form-input'];
  nameInput.type = 'text';
  nameInput.placeholder = 'Enter Your Name';

  const emailLabel = document.createElement('label');
  emailLabel.textContent = 'Email Address';
  emailLabel.className = styles['descriptionsPage__form-label'];

  const emailInput = document.createElement('input');
  emailInput.className = styles['descriptionsPage__form-input'];
  emailInput.type = 'email';
  emailInput.placeholder = 'Enter Your Email';

  const reviewLabel = document.createElement('label');
  reviewLabel.textContent = 'Your Review';
  reviewLabel.className = styles['descriptionsPage__form-label'];

  const reviewTextarea = document.createElement('textarea');
  reviewTextarea.className = styles['descriptionsPage__form-textarea'];
  reviewTextarea.placeholder = 'Enter Your Review';

  const submitButton = document.createElement('button');
  submitButton.className = styles['descriptionsPage__submit-button'];
  submitButton.type = 'submit';
  submitButton.textContent = 'Submit';

  reviewForm.addEventListener('submit', (event) => {
    event.preventDefault();

    nameInput.value = '';
    emailInput.value = '';
    reviewTextarea.value = '';
  });

  reviewForm.append(
    nameLabel,
    nameInput,
    emailLabel,
    emailInput,
    reviewLabel,
    reviewTextarea,
    submitButton,
  );

  addReview.append(addReviewTitle, ratingLabel, ratingOptions, reviewForm);

  reviewsContent.append(
    customerReviews,
    reviewer,
    reviewTitle,
    reviewDescription,
    reviewDate,
    secondReviewer,
    secondReviewTitle,
    secondReviewDescription,
    secondReviewDate,
    addReview,
  );

  gallery.append(galleryTop, tabs, tabContent);

  const relatedProducts = document.createElement('section');
  relatedProducts.className = styles['descriptionsPage__related'];

  const relatedTitle = document.createElement('h2');
  relatedTitle.className = styles['descriptionsPage__related-title'];
  relatedTitle.textContent = 'Related Products';

  const relatedCards = document.createElement('div');
  relatedCards.className = styles['descriptionsPage__related-cards'];

  const currentProductName = sessionStorage.getItem('selectedProductName');

  const uniqueProducts = allProducts.filter(
    (product, index, array) =>
      array.findIndex((item) => item.name === product.name && item.brand === product.brand) ===
      index,
  );

  const randomProducts = uniqueProducts
    .filter((product) => product.name !== currentProductName)
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  randomProducts.forEach((product) => {
    relatedCards.append(createProductCard(product));
  });

  relatedProducts.append(relatedTitle, relatedCards);

  page.append(header, gallery, relatedProducts, createStoreBenefits(), createFooter());

  return page;
}
