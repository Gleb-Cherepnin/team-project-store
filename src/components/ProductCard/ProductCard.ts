import styles from './ProductCard.module.scss';
import { addCartItem } from '../../services/cart';

export interface Product {
  id: string;
  category: string;
  image: string;
  brand: string;
  name: string;
  price: string;
  oldPrice: string;
}

function createIconButton(icon: 'heart' | 'compare' | 'eye', label: string): HTMLButtonElement {
  const button = document.createElement('button');
  button.className = styles['product-card__icon-button'];
  button.type = 'button';
  button.setAttribute('aria-label', label);

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('width', '20');
  svg.setAttribute('height', '20');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '1.5');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');

  const paths: Record<typeof icon, string> = {
    heart:
      'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z',
    compare: 'M7 3v18M3 7l4-4 4 4M17 21V3m-4 14 4 4 4-4',
    eye: 'M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z',
  };

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', paths[icon]);

  svg.append(path);
  button.append(svg);

  return button;
}

export function createProductCard(product: Product): HTMLElement {
  const card = document.createElement('article');
  card.className = styles['product-card'];

  // Image container
  const imageContainer = document.createElement('div');
  imageContainer.className = styles['product-card__image-container'];

  const image = document.createElement('img');
  image.className = styles['product-card__image'];
  image.src = product.image;
  image.alt = product.name;

  // Add to Cart button
  const addToCartButton = document.createElement('button');
  addToCartButton.className = styles['product-card__add-button'];
  addToCartButton.type = 'button';
  addToCartButton.textContent = 'Add to Cart';

  addToCartButton.addEventListener('click', () => {
    addCartItem({
      id: product.id,
      name: product.name,
      image: image.src,
      price: Number(product.price.replace('$', '')),
      size: 'S',
      quantity: 1,
      brand: product.brand,
      oldPrice: product.oldPrice,
    });
    addToCartButton.textContent = 'Added — add another';
  });
  addToCartButton.setAttribute('aria-live', 'polite');
  addToCartButton.title = 'Add one item (default size S). Open details to choose a size.';

  const openDetails = () => {
    sessionStorage.setItem('selectedProductId', product.id);
    sessionStorage.setItem('selectedProductImage', product.image);
    sessionStorage.setItem('selectedProductBrand', product.brand);
    sessionStorage.setItem('selectedProductName', product.name);
    sessionStorage.setItem('selectedProductPrice', product.price);
    sessionStorage.setItem('selectedProductOldPrice', product.oldPrice);

    window.location.hash = 'descriptions';
  };

  // Icons
  const icons = document.createElement('div');
  icons.className = styles['product-card__icons'];

  const detailsButton = createIconButton('eye', 'View product details');
  detailsButton.addEventListener('click', openDetails);
  icons.append(
    createIconButton('heart', 'Add to wishlist'),
    createIconButton('compare', 'Compare product'),
    detailsButton,
  );

  imageContainer.append(image, addToCartButton, icons);

  // Brand
  const brand = document.createElement('h3');
  brand.className = styles['product-card__brand'];
  brand.textContent = product.brand;

  // Product name
  const name = document.createElement('p');
  name.className = styles['product-card__name'];
  name.textContent = product.name;
  const category = document.createElement('p');
  category.className = styles['product-card__name'];
  category.textContent = product.category;

  // Prices
  const prices = document.createElement('div');
  prices.className = styles['product-card__prices'];

  const price = document.createElement('span');
  price.className = styles['product-card__price'];
  price.textContent = product.price;

  const oldPrice = document.createElement('span');
  oldPrice.className = styles['product-card__old-price'];
  oldPrice.textContent = product.oldPrice;

  prices.append(price, oldPrice);

  card.append(imageContainer, brand, name, category, prices);

  return card;
}
