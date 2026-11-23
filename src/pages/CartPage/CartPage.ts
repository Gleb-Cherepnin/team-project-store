import { createHeader } from '../../components/Header/Header';
import { createFooter } from '../../components/Footer/Footer';
import { getCart, removeCartItem, setCartItemQuantity } from '../../services/cart';
import styles from './CartPage.module.scss';

export function createCartPage(): HTMLElement {
  const page = document.createElement('div');
  page.className = styles.page;
  page.dataset.cartProduct = '';
  const main = document.createElement('main');
  main.className = styles.main;
  const title = document.createElement('h1');
  title.textContent = 'Checkout';
  const layout = document.createElement('div');
  layout.className = styles.layout;
  const products = document.createElement('div');
  products.className = styles.products;
  const summary = document.createElement('aside');
  summary.className = styles.summary;
  summary.setAttribute('aria-label', 'Order summary');
  const subtotal = document.createElement('strong');
  const delivery = document.createElement('span');
  const total = document.createElement('strong');
  const discount = document.createElement('span');
  let discountApplied = localStorage.getItem('krist.discount') === 'SALE10';
  function summaryRow(label: string, value: HTMLElement, bold = false): HTMLElement {
    const row = document.createElement('div');
    row.className = styles.summaryRow;
    const text = document.createElement(bold ? 'strong' : 'span');
    text.textContent = label;
    row.append(text, value);
    return row;
  }
  const form = document.createElement('form');
  const label = document.createElement('label');
  label.textContent = 'Enter Discount Code';
  label.htmlFor = 'cart-discount';
  const field = document.createElement('div');
  field.className = styles.discount;
  const input = document.createElement('input');
  input.id = 'cart-discount';
  input.placeholder = 'SALE10';
  input.value = discountApplied ? 'SALE10' : '';
  const apply = document.createElement('button');
  apply.textContent = 'Apply';
  const message = document.createElement('p');
  message.className = styles.message;
  message.setAttribute('role', 'status');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const code = input.value.trim().toUpperCase();
    discountApplied = code === 'SALE10';
    localStorage.setItem('krist.discount', discountApplied ? 'SALE10' : '');
    message.textContent = discountApplied
      ? 'SALE10 applied: 10% off products.'
      : code
        ? 'Unknown discount code. No discount applied.'
        : 'Enter a discount code.';
    render();
  });
  field.append(input, apply);
  form.append(label, field, message);
  const checkout = document.createElement('button');
  checkout.className = styles.checkout;
  checkout.textContent = 'Proceed to Checkout';
  checkout.addEventListener('click', () => {
    window.location.hash = 'shipping';
  });
  const discountRow = summaryRow('Discount (SALE10, 10%)', discount);
  summary.append(
    summaryRow('Subtotal', subtotal, true),
    form,
    discountRow,
    summaryRow('Delivery Charge', delivery),
    summaryRow('Grand Total', total, true),
    checkout,
  );
  const money = (value: number) => `$${value.toFixed(2)}`;
  function render(): void {
    const items = getCart();
    checkout.disabled = items.length === 0;
    products.replaceChildren();
    if (!items.length) {
      const empty = document.createElement('p');
      empty.textContent = 'Your cart is empty.';
      const shop = document.createElement('a');
      shop.href = '#shop/all';
      shop.textContent = 'Continue shopping';
      products.append(empty, shop);
    } else {
      const table = document.createElement('table');
      table.innerHTML =
        '<thead><tr><th scope="col">Products</th><th scope="col">Price</th><th scope="col">Quantity</th><th scope="col">Subtotal</th></tr></thead>';
      const body = document.createElement('tbody');
      items.forEach((item, index) => {
        const row = document.createElement('tr');
        const product = document.createElement('td');
        const info = document.createElement('div');
        info.className = styles.product;
        const image = document.createElement('img');
        image.src = item.image;
        image.alt = item.name;
        const description = document.createElement('div');
        const name = document.createElement('strong');
        name.textContent = item.name;
        const size = document.createElement('p');
        size.textContent = `Size: ${item.size}`;
        const remove = document.createElement('button');
        remove.type = 'button';
        remove.className = styles.remove;
        remove.textContent = 'Remove';
        remove.setAttribute('aria-label', `Remove ${item.name}, size ${item.size}`);
        remove.addEventListener('click', () => {
          removeCartItem(index);
          const next = products.querySelector<HTMLButtonElement>('button');
          if (next) next.focus();
          else products.querySelector<HTMLAnchorElement>('a')?.focus();
        });
        description.append(name, size, remove);
        info.append(image, description);
        product.append(info);
        const price = document.createElement('td');
        price.textContent = money(item.price);
        const quantity = document.createElement('td');
        const counter = document.createElement('div');
        counter.className = styles.counter;
        const value = document.createElement('span');
        value.textContent = String(item.quantity);
        const controls = [-1, 1].map((change) => {
          const button = document.createElement('button');
          button.type = 'button';
          button.textContent = change < 0 ? '\u2212' : '+';
          button.setAttribute(
            'aria-label',
            `${change < 0 ? 'Decrease' : 'Increase'} quantity of ${item.name}, size ${item.size}`,
          );
          button.disabled = change < 0 && item.quantity <= 1;
          button.dataset.control = `${index}-${change}`;
          button.addEventListener('click', () => {
            if (item.quantity + change < 1) return;
            setCartItemQuantity(index, item.quantity + change);
            products
              .querySelector<HTMLButtonElement>(`[data-control="${index}-${change}"]`)
              ?.focus();
          });
          return button;
        });
        counter.append(controls[0]!, value, controls[1]!);
        quantity.append(counter);
        const lineTotal = document.createElement('td');
        lineTotal.textContent = money(item.price * item.quantity);
        row.append(product, price, quantity, lineTotal);
        body.append(row);
      });
      table.append(body);
      products.append(table);
    }
    const amount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = items.length ? 5 : 0;
    subtotal.textContent = money(amount);
    delivery.textContent = money(shipping);
    const saving = discountApplied ? Math.round(amount * 10) / 100 : 0;
    discountRow.hidden = !discountApplied;
    discount.textContent = `-${money(saving)}`;
    total.textContent = money(amount - saving + shipping);
  }
  page.addEventListener('cartchange', render);
  layout.append(products, summary);
  main.append(title, layout);
  page.append(createHeader(), main, createFooter());
  render();
  return page;
}
