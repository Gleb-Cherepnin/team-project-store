import { getCart, removeCartItem } from '../../services/cart';
import styles from './MiniCart.module.scss';

export function createMiniCart(button: HTMLButtonElement): HTMLElement {
  const wrapper = document.createElement('div');
  wrapper.className = styles.wrapper;
  wrapper.dataset.miniCart = '';
  const badge = document.createElement('span');
  badge.className = styles.badge;
  badge.setAttribute('aria-live', 'polite');
  button.append(badge);
  const panel = document.createElement('section');
  panel.className = styles.panel;
  panel.setAttribute('aria-label', 'Shopping cart');
  panel.hidden = true;
  button.setAttribute('aria-expanded', 'false');
  const toggle = (open: boolean) => {
    panel.hidden = !open;
    button.setAttribute('aria-expanded', String(open));
  };
  wrapper.addEventListener('mouseenter', () => toggle(true));
  wrapper.addEventListener('mouseleave', () => {
    if (!wrapper.contains(document.activeElement)) toggle(false);
  });
  button.addEventListener('click', () => toggle(panel.hidden === true));
  wrapper.addEventListener('focusout', (event) => {
    if (!wrapper.contains(event.relatedTarget as Node)) toggle(false);
  });
  wrapper.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      button.focus();
      toggle(false);
    }
  });
  const money = (value: number) => `$${value.toFixed(2)}`;
  function render(): void {
    const items = getCart();
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = String(count);
    badge.hidden = count === 0;
    panel.replaceChildren();
    const title = document.createElement('p');
    title.className = styles.title;
    title.textContent = `You have ${count} ${count === 1 ? 'item' : 'items'} in your cart`;
    panel.append(title);
    const list = document.createElement('div');
    list.className = styles.list;
    items.forEach((item, index) => {
      const row = document.createElement('div');
      row.className = styles.row;
      const image = document.createElement('img');
      image.src = item.image;
      image.alt = item.name;
      const details = document.createElement('div');
      const name = document.createElement('p');
      name.textContent = item.name;
      const price = document.createElement('strong');
      price.textContent = `${item.quantity} x ${money(item.price)}`;
      const size = document.createElement('p');
      size.textContent = `Size: ${item.size}`;
      details.append(name, price, size);
      const remove = document.createElement('button');
      remove.type = 'button';
      remove.className = styles.remove;
      remove.setAttribute('aria-label', `Remove ${item.name}, size ${item.size}`);
      remove.innerHTML =
        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7m4-7v7"/></svg>';
      remove.addEventListener('click', () => {
        removeCartItem(index);
        (
          (panel.querySelector('button:not(:disabled)') as HTMLButtonElement | null) ?? button
        ).focus();
      });
      const link = document.createElement('a');
      link.className = styles.productLink;
      link.href = '#descriptions';
      link.addEventListener('click', () => {
        sessionStorage.setItem('selectedProductName', item.name);
        sessionStorage.setItem('selectedProductImage', item.image);
        sessionStorage.setItem('selectedProductPrice', money(item.price));
        sessionStorage.setItem('selectedProductBrand', item.brand || '');
        sessionStorage.setItem('selectedProductOldPrice', item.oldPrice || '');
        toggle(false);
        if (window.location.hash === '#descriptions') {
          window.dispatchEvent(new HashChangeEvent('hashchange'));
        }
      });
      link.append(image, details);
      row.append(link, remove);
      list.append(row);
    });
    panel.append(list);
    const subtotal = document.createElement('div');
    subtotal.className = styles.subtotal;
    const label = document.createElement('strong');
    label.textContent = 'Subtotal';
    const total = document.createElement('strong');
    total.textContent = money(items.reduce((sum, item) => sum + item.price * item.quantity, 0));
    subtotal.append(label, total);
    panel.append(subtotal);
    ['View Cart', 'Checkout'].forEach((text) => {
      const action = document.createElement('button');
      action.className = styles.action;
      action.textContent = text;
      action.disabled = text === 'Checkout' && !items.length;
      action.addEventListener('click', () => {
        toggle(false);
        window.location.hash = text === 'View Cart' ? 'cart' : 'shipping';
      });
      panel.append(action);
    });
  }
  wrapper.addEventListener('cartchange', render);
  wrapper.append(button, panel);
  render();
  return wrapper;
}
