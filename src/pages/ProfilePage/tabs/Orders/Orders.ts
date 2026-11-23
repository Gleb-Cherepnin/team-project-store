import { getOrders, cancelOrder } from '../../../../services/orders';
import styles from './Orders.module.scss';
export function createOrders(): HTMLElement {
  const section = document.createElement('section');
  section.className = styles.orders;
  const toolbar = document.createElement('div');
  toolbar.className = styles.toolbar;
  const search = document.createElement('input');
  search.type = 'search';
  search.placeholder = 'Search';
  search.setAttribute('aria-label', 'Search orders');
  const filter = document.createElement('select');
  filter.setAttribute('aria-label', 'Filter orders');
  ['All orders', 'In Process', 'Cancelled'].forEach((text) => {
    const option = document.createElement('option');
    option.textContent = text;
    filter.append(option);
  });
  toolbar.append(search, filter);
  const list = document.createElement('div');
  function render(): void {
    list.replaceChildren();
    getOrders()
      .filter((order) => filter.value === 'All orders' || order.status === filter.value)
      .forEach((order) => {
        order.items
          .filter((item) => item.name.toLowerCase().includes(search.value.trim().toLowerCase()))
          .forEach((item) => {
            const article = document.createElement('article');
            article.className = styles.item;
            const image = document.createElement('img');
            image.src = item.image;
            image.alt = item.name;
            const details = document.createElement('div');
            const name = document.createElement('strong');
            name.textContent = item.name;
            const size = document.createElement('p');
            size.textContent = `Size: ${item.size}`;
            const qty = document.createElement('p');
            qty.textContent = `Qty: ${item.quantity}`;
            details.append(name, size, qty);
            const price = document.createElement('strong');
            price.textContent = `$${(item.price * item.quantity).toFixed(2)}`;
            const actions = document.createElement('div');
            actions.className = styles.actions;
            const view = document.createElement('button');
            view.textContent = 'View Order';
            view.addEventListener('click', () => {
              const dialog = document.createElement('dialog');
              dialog.className = styles.dialog;
              const heading = document.createElement('h2');
              heading.textContent = 'Order Details';
              heading.id = 'order-details-title';
              dialog.setAttribute('aria-labelledby', heading.id);
              const header = document.createElement('header');
              header.className = styles.dialogHeader;
              const dismiss = document.createElement('button');
              dismiss.type = 'button';
              dismiss.className = styles.dismiss;
              dismiss.setAttribute('aria-label', 'Close order details');
              dismiss.textContent = '\u00d7';
              dismiss.addEventListener('click', () => dialog.close());
              header.append(heading, dismiss);
              const meta = document.createElement('div');
              meta.className = styles.meta;
              const reference = document.createElement('p');
              reference.textContent = `Order #${order.id.slice(0, 8).toUpperCase()}`;
              reference.title = order.id;
              const badge = document.createElement('span');
              badge.className =
                order.status === 'Cancelled' ? styles.cancelledBadge : styles.processBadge;
              badge.textContent = order.status;
              meta.append(reference, badge);
              const products = document.createElement('div');
              products.className = styles.dialogProducts;
              const money = (amount: number) => `$${amount.toFixed(2)}`;
              order.items.forEach((product) => {
                const row = document.createElement('article');
                const image = document.createElement('img');
                image.src = product.image;
                image.alt = product.name;
                const info = document.createElement('div');
                const name = document.createElement('strong');
                name.textContent = product.name;
                const variant = document.createElement('p');
                variant.textContent = `Size: ${product.size} ? Qty: ${product.quantity}`;
                info.append(name, variant);
                const amount = document.createElement('strong');
                amount.textContent = money(product.price * product.quantity);
                row.append(image, info, amount);
                products.append(row);
              });
              const info = document.createElement('div');
              info.className = styles.orderInfo;
              [
                ['Shipping Address', `${order.address.name}\n${order.address.address}`],
                ['Payment Method', order.payment],
              ].forEach(([label, value]) => {
                const block = document.createElement('section');
                const title = document.createElement('h3');
                title.textContent = label!;
                const text = document.createElement('p');
                text.textContent = value!;
                block.append(title, text);
                info.append(block);
              });
              const totals = document.createElement('div');
              totals.className = styles.totals;
              const lines: [string, number][] = [['Subtotal', order.subtotal]];
              if (order.discount > 0) lines.push(['Discount', -order.discount]);
              lines.push(
                [
                  'Delivery Charge',
                  Math.round((order.total - order.subtotal + order.discount) * 100) / 100,
                ],
                ['Grand Total', order.total],
              );
              lines.forEach(([label, value]) => {
                const row = document.createElement('div');
                const text = document.createElement('span');
                text.textContent = label;
                const amount = document.createElement('span');
                amount.textContent = value < 0 ? `-${money(-value)}` : money(value);
                row.append(text, amount);
                totals.append(row);
              });
              const close = document.createElement('button');
              close.textContent = 'Close';
              close.className = styles.closeDetails;
              close.addEventListener('click', () => dialog.close());
              dialog.addEventListener('close', () => {
                dialog.remove();
                view.focus();
              });
              dialog.append(header, meta, products, info, totals, close);
              section.append(dialog);
              dialog.showModal();
            });
            actions.append(view);
            if (order.status === 'In Process') {
              const cancel = document.createElement('button');
              cancel.textContent = 'Cancel Order';
              cancel.className = styles.cancel;
              cancel.addEventListener('click', () => {
                cancelOrder(order.id);
                render();
              });
              actions.append(cancel);
            }
            const status = document.createElement('div');
            status.className = styles.status;
            const badge = document.createElement('span');
            badge.textContent = order.status;
            const text = document.createElement('span');
            text.textContent =
              order.status === 'Cancelled'
                ? 'Your order has been cancelled'
                : 'Your order is being processed';
            status.append(badge, text);
            article.append(image, details, price, actions, status);
            list.append(article);
          });
      });
    if (!list.children.length) {
      const empty = document.createElement('p');
      empty.textContent = 'No orders found.';
      list.append(empty);
    }
  }
  search.addEventListener('input', render);
  filter.addEventListener('change', render);
  section.append(toolbar, list);
  render();
  return section;
}
