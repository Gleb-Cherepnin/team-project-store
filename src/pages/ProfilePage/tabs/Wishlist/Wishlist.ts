import styles from './Wishlist.module.scss';

const products = [
  [2, 'Allen Solly', 'Women Textured Handheld Bag', 80, 100],
  [3, 'Louis Philippe Sport', 'Polo Collar T-Shirt', 50, 55],
  [4, 'Adidas', 'Men adi-dash Running Shoes', 60, 75],
  [7, 'Allen Solly', 'Brown Leather Jacket', 60, 70],
  [4, 'US Polo', 'Casual Shoe for Men', 40, 50],
  [2, 'Gucci', 'Leather Hand Purse', 40, 60],
  [1, 'YK Disney', 'Red Printed T-Shirt', 30, 35],
  [7, 'Roadstar', 'Printed Blazer for Men', 60, 70],
  [2, 'Flora', 'Leather Hand Purse', 35, 45],
] as const;

export function createWishlist(): HTMLElement {
  const section = document.createElement('section');
  section.className = styles.wishlist;
  section.setAttribute('aria-label', 'My Wishlists');
  const grid = document.createElement('div');
  grid.className = styles.grid;
  const status = document.createElement('p');
  status.className = styles.status;
  status.setAttribute('role', 'status');
  for (const [image, brand, name, price, oldPrice] of products) {
    const card = document.createElement('article');
    card.className = styles.card;
    card.innerHTML = `<div class="${styles.image}"><img src="/images/products/product-${image}.png" alt="${name}"/><button type="button" class="${styles.remove}" aria-label="Remove ${name} from wishlist"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18M9 6V3h6v3M5 6l1 14h12l1-14M10 10v6M14 10v6"/></svg></button><button type="button" class="${styles.move}">Move to Cart</button></div><h2>${brand}</h2><p>${name}</p><div class="${styles.prices}"><span>$${price.toFixed(2)}</span><del>$${oldPrice.toFixed(2)}</del></div>`;
    card.querySelector(`.${styles.remove}`)!.addEventListener('click', () => {
      const next = card.nextElementSibling ?? card.previousElementSibling;
      card.remove();
      status.textContent = grid.childElementCount
        ? `${name} removed from your wishlist.`
        : 'Your wishlist is empty.';
      (next?.querySelector('button') as HTMLButtonElement | null)?.focus();
    });
    card.querySelector(`.${styles.move}`)!.addEventListener('click', () => {
      // The project has no cart service yet: do not pretend a purchase item was stored.
      status.textContent = 'The shopping cart is not available yet.';
    });
    grid.append(card);
  }
  section.append(grid, status);
  return section;
}
