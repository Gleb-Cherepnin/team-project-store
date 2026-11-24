import { saveOrder } from '../../services/orders';
import { createHeader } from '../../components/Header/Header';
import { createFooter } from '../../components/Footer/Footer';
import { getCart } from '../../services/cart';
import styles from './CheckoutPage.module.scss';

interface Address {
  name: string;
  address: string;
  phone: string;
  building?: string;
  area?: string;
  city?: string;
  state?: string;
  pin?: string;
  isDefault?: boolean;
}
const addressKey = 'krist.addresses.v1';
function readAddresses(): Address[] {
  try {
    const data: unknown = JSON.parse(localStorage.getItem(addressKey) || '[]');
    return Array.isArray(data)
      ? data.filter(
          (a) =>
            a &&
            typeof a.name === 'string' &&
            typeof a.address === 'string' &&
            typeof a.phone === 'string',
        )
      : [];
  } catch {
    return [];
  }
}
const icon = (path: string) =>
  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="${path}"/></svg>`;
export function createCheckoutPage(payment = false, review = false): HTMLElement {
  const page = document.createElement('div');
  page.className = styles.page;
  page.dataset.cartProduct = '';
  const main = document.createElement('main');
  main.className = styles.main;
  const title = document.createElement('h1');
  title.textContent = review
    ? 'Review Your Order'
    : payment
      ? 'Payment Method'
      : 'Shipping Address';
  const layout = document.createElement('div');
  layout.className = styles.layout;
  const content = document.createElement('div');
  const steps = document.createElement('nav');
  steps.className = styles.steps;
  steps.setAttribute('aria-label', 'Checkout progress');
  ['Address', 'Payment Method', 'Review'].forEach((text, index) => {
    const step = document.createElement(index < (review ? 2 : payment ? 1 : 0) ? 'a' : 'div');
    if (step instanceof HTMLAnchorElement) step.href = index === 0 ? '#shipping' : '#payment';
    if (index <= (review ? 2 : payment ? 1 : 0)) step.className = styles.active;
    if (index === (review ? 2 : payment ? 1 : 0)) step.setAttribute('aria-current', 'step');
    const paths = [
      'M3 10l9-8 9 8v10H3ZM9 20v-7h6v7',
      'M3 5h18v14H3ZM3 9h18M6 14h5',
      'M6 3h12v18H6ZM9 7h6M9 11h6M9 15h4',
    ];
    step.innerHTML = `<span>${icon(paths[index]!)}</span>`;
    step.append(document.createTextNode(text));
    steps.append(step);
  });
  content.append(steps);
  const summary = document.createElement('aside');
  summary.className = styles.summary;
  summary.innerHTML = `<div class="${styles.sumRow}"><strong>Subtotal</strong><strong data-subtotal></strong></div><form><label>Enter Discount Code<div class="${styles.discount}"><input aria-label="Discount code" placeholder="SALE10"><button>Apply</button></div></label><p role="status"></p></form><div class="${styles.sumRow}" data-discount><span>Discount (SALE10, 10%)</span><span></span></div><div class="${styles.sumRow}"><span>Delivery Charge</span><span data-delivery></span></div><div class="${styles.sumRow}"><strong>Grand Total</strong><strong data-total></strong></div>`;
  const coupon = summary.querySelector('input')!;
  coupon.value = localStorage.getItem('krist.discount') || '';
  function updateSummary(): void {
    const items = getCart();
    const amount = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = items.length ? 5 : 0;
    const applied = localStorage.getItem('krist.discount') === 'SALE10';
    const discount = applied ? Math.round(amount * 10) / 100 : 0;
    const money = (n: number) => `$${n.toFixed(2)}`;
    summary.querySelector('[data-subtotal]')!.textContent = money(amount);
    summary.querySelector('[data-delivery]')!.textContent = money(shipping);
    summary.querySelector('[data-total]')!.textContent = money(amount - discount + shipping);
    const row = summary.querySelector<HTMLElement>('[data-discount]')!;
    row.hidden = !applied;
    row.lastElementChild!.textContent = `-${money(discount)}`;
  }
  summary.querySelector('form')!.addEventListener('submit', (event) => {
    event.preventDefault();
    const valid = coupon.value.trim().toUpperCase() === 'SALE10';
    localStorage.setItem('krist.discount', valid ? 'SALE10' : '');
    summary.querySelector('p')!.textContent = valid
      ? 'SALE10 applied: 10% off products.'
      : 'Unknown discount code. No discount applied.';
    updateSummary();
  });
  page.addEventListener('cartchange', updateSummary);
  updateSummary();
  const button = (text: string) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = styles.primary;
    b.textContent = text;
    return b;
  };
  if (review) {
    const items = getCart();
    let address: { name: string; address: string } | null = null;
    try {
      address = JSON.parse(sessionStorage.getItem('krist.shipping-address') || 'null');
    } catch {
      /* No selected address. */
    }
    const paymentLabel = sessionStorage.getItem('krist.payment') || '';
    const heading = document.createElement('h2');
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 5);
    heading.textContent = `Estimated delivery: ${deliveryDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Europe/Moscow' })}`;
    content.append(heading);
    if (!items.length) {
      const empty = document.createElement('p');
      empty.textContent = 'Your cart is empty.';
      content.append(empty);
    }
    items.forEach((item) => {
      const row = document.createElement('article');
      row.className = styles.reviewItem;
      const image = document.createElement('img');
      image.src = item.image;
      image.alt = item.name;
      const info = document.createElement('div');
      const name = document.createElement('strong');
      name.textContent = item.name;
      const price = document.createElement('p');
      price.textContent = `$${item.price.toFixed(2)} ? Qty: ${item.quantity}`;
      const size = document.createElement('p');
      size.textContent = `Size: ${item.size}`;
      info.append(name, price, size);
      row.append(image, info);
      content.append(row);
    });
    [
      [
        'Shipping Address',
        address ? `${address.name}\n${address.address}` : 'Select a shipping address',
        '#shipping',
      ],
      ['Payment Method', paymentLabel || 'Select a payment method', '#payment'],
    ].forEach(([title, value, href]) => {
      const section = document.createElement('section');
      section.className = styles.reviewDetails;
      const heading = document.createElement('h2');
      heading.textContent = title!;
      const text = document.createElement('p');
      text.textContent = value!;
      const edit = document.createElement('a');
      edit.href = href!;
      edit.textContent = 'Edit';
      edit.setAttribute('aria-label', `Edit ${title}`);
      section.append(heading, text, edit);
      content.append(section);
    });
    const place = button('Place Order');
    place.disabled = !items.length || !address || !paymentLabel;
    summary.append(place);
    place.addEventListener('click', () => {
      if (place.disabled || !address) return;
      const current = getCart();
      if (!current.length) return;
      const subtotal = current.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const discount =
        localStorage.getItem('krist.discount') === 'SALE10' ? Math.round(subtotal * 10) / 100 : 0;
      saveOrder({
        id: crypto.randomUUID(),
        date: new Date().toISOString(),
        items: current,
        address,
        payment: paymentLabel,
        subtotal,
        discount,
        total: subtotal - discount + 5,
        status: 'In Process',
      });
      place.disabled = true;
      localStorage.setItem('krist-cart', '[]');
      localStorage.removeItem('krist.discount');
      document
        .querySelectorAll('[data-mini-cart]')
        .forEach((el) => el.dispatchEvent(new Event('cartchange')));
      const dialog = document.createElement('dialog');
      dialog.className = styles.success;
      dialog.setAttribute('aria-labelledby', 'order-confirmed-title');
      dialog.innerHTML = `<div class="${styles.successIcon}">${icon('M5 8h14l1 13H4L5 8ZM9 8V6a3 3 0 0 1 6 0v2')}</div><h2 id="order-confirmed-title">Your order is confirmed</h2><p>Thanks for shopping! Your order has been saved.<br>This demo does not process payments or send emails.</p><a href="#orders">View Order</a><a href="#home">Back to Home</a>`;
      dialog.addEventListener('cancel', (event) => {
        event.preventDefault();
        window.location.hash = 'orders';
      });
      page.append(dialog);
      dialog.showModal();
    });
  } else if (!payment) {
    const intro = document.createElement('div');
    intro.innerHTML =
      '<h2>Select a delivery address</h2><p>Is the address you’d like to use displayed below? If so, click the corresponding “Deliver to this address” button. Or you can enter a new delivery address.</p>';
    const cards = document.createElement('div');
    cards.className = styles.cards;
    const addresses = readAddresses();
    let selected = Math.max(
      0,
      addresses.findIndex((a) => a.isDefault),
    );
    let editing = -1;
    const deliver = button('Deliver Here');
    const form = document.createElement('form');
    form.className = styles.addressForm;
    form.innerHTML = '<h2>Add a new address</h2>';
    const fields = [
      ['name', 'Name', 'Enter Name', 'name'],
      ['phone', 'Mobile Number', 'Enter Mobile Number', 'tel'],
      ['building', 'Flat, House no., Building, Company, Apartment', '', 'address-line1'],
      ['area', 'Area, Colony, Street, Sector, Village', '', 'address-line2'],
      ['city', 'City', 'Select City', 'address-level2'],
      ['pin', 'Pin Code', 'Enter Pin Code', 'postal-code'],
      ['state', 'State', 'Select State', 'address-level1'],
    ];
    fields.forEach(([key, label, placeholder, autocomplete]) => {
      const wrapper = document.createElement('label');
      wrapper.textContent = label!;
      const input = document.createElement('input');
      input.name = key!;
      input.placeholder = placeholder!;
      input.autocomplete = autocomplete as AutoFill;
      input.required = key !== 'area';
      if (key === 'phone') input.type = 'tel';
      if (key === 'city' || key === 'state') {
        const list = document.createElement('datalist');
        list.id = `checkout-${key}`;
        const options =
          key === 'city'
            ? ['Manchester', 'Richardson', 'Mesa']
            : ['Kentucky', 'California', 'New Jersey', 'Arizona', 'Texas'];
        options.forEach((value) => {
          const option = document.createElement('option');
          option.value = value;
          list.append(option);
        });
        input.setAttribute('list', list.id);
        wrapper.append(list);
      }
      wrapper.append(input);
      form.append(wrapper);
    });
    const defaultLabel = document.createElement('label');
    defaultLabel.className = styles.check;
    defaultLabel.innerHTML =
      '<input type="checkbox" name="isDefault" checked>Use as my default address';
    const submit = button('Add New Address');
    submit.type = 'submit';
    form.append(defaultLabel, submit);
    const proceed = () => {
      if (!addresses[selected]) return;
      sessionStorage.setItem('krist.shipping-address', JSON.stringify(addresses[selected]));
      window.location.hash = 'payment';
    };
    deliver.addEventListener('click', proceed);
    function renderAddresses(): void {
      cards.replaceChildren();
      deliver.disabled = !addresses.length;
      if (!addresses.length) cards.textContent = 'No saved addresses. Add a new address below.';
      addresses.forEach((address, index) => {
        const card = document.createElement('article');
        card.className = styles.card;
        const choice = document.createElement('label');
        choice.className = styles.choice;
        const name = document.createElement('strong');
        name.textContent = address.name;
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'shipping-address';
        radio.checked = selected === index;
        radio.addEventListener('change', () => {
          selected = index;
        });
        choice.append(name, radio);
        const location = document.createElement('p');
        location.textContent = address.address;
        const actions = document.createElement('div');
        actions.className = styles.cardActions;
        const edit = button('Edit');
        edit.innerHTML = `${icon('M12 3H4v18h16V12M15 3l6 6M9 15l-1 4 4-1L21 9l-6-6Z')} Edit`;
        edit.addEventListener('click', () => {
          editing = index;
          fields.forEach(([key]) => {
            const input = form.elements.namedItem(key!) as HTMLInputElement;
            input.value = String(
              address[key as keyof Address] ?? (key === 'building' ? address.address : ''),
            );
          });
          (form.elements.namedItem('isDefault') as HTMLInputElement).checked = !!address.isDefault;
          submit.textContent = 'Save Address';
          form.querySelector('h2')!.textContent = 'Edit address';
          form.scrollIntoView({ behavior: 'smooth' });
          (form.elements.namedItem('name') as HTMLInputElement).focus();
        });
        const remove = button('Delete');
        remove.innerHTML = `${icon('M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7m4-7v7')} Delete`;
        remove.addEventListener('click', () => {
          addresses.splice(index, 1);
          selected = 0;
          editing = -1;
          form.reset();
          submit.textContent = 'Add New Address';
          form.querySelector('h2')!.textContent = 'Add a new address';
          localStorage.setItem(addressKey, JSON.stringify(addresses));
          renderAddresses();
        });
        actions.append(edit, remove);
        card.append(choice, location, actions);
        cards.append(card);
      });
    }
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const value = (key: string) => String(data.get(key) || '').trim();
      for (const [key] of fields) {
        if (key !== 'area' && !value(key!)) {
          const input = form.elements.namedItem(key!) as HTMLInputElement;
          input.value = '';
          input.reportValidity();
          return;
        }
      }
      const address: Address = {
        name: value('name'),
        phone: value('phone'),
        building: value('building'),
        area: value('area'),
        city: value('city'),
        pin: value('pin'),
        state: value('state'),
        isDefault: data.has('isDefault'),
        address: [
          value('building'),
          value('area'),
          `${value('city')}, ${value('state')} ${value('pin')}`,
        ]
          .filter(Boolean)
          .join(' '),
      };
      if (address.isDefault)
        addresses.forEach((a) => {
          a.isDefault = false;
        });
      if (editing >= 0) {
        addresses[editing] = address;
        selected = editing;
      } else {
        addresses.push(address);
        selected = addresses.length - 1;
      }
      localStorage.setItem(addressKey, JSON.stringify(addresses));
      proceed();
    });
    renderAddresses();
    content.append(intro, cards, deliver, form);
  } else {
    const heading = document.createElement('h2');
    heading.textContent = 'Select a payment method';
    content.append(heading);
    let chosenMethod = 'Debit/Credit Card';
    const methods = document.createElement('div');
    methods.className = styles.methods;
    const cardForm = document.createElement('form');
    cardForm.className = styles.cardForm;
    cardForm.innerHTML =
      '<label>Card Number<input name="number" placeholder="Enter Card Number" autocomplete="cc-number" inputmode="numeric" pattern="[0-9 ]{13,23}" required></label><label>Card Name<input name="holder" placeholder="Enter Card Name" autocomplete="cc-name" required></label><div><label>Expiry Date<input name="expiry" placeholder="MM/YY" autocomplete="cc-exp" pattern="(0[1-9]|1[0-2])/[0-9]{2}" required></label><label>CVV<input name="cvv" type="password" placeholder="CVV" autocomplete="cc-csc" inputmode="numeric" pattern="[0-9]{3,4}" required></label></div>';
    const add = button('Add Card');
    add.type = 'submit';
    cardForm.append(add);
    const status = document.createElement('p');
    status.setAttribute('role', 'status');
    cardForm.addEventListener('submit', (event) => {
      event.preventDefault();
      status.textContent = 'Card details entered. Payment processing is not connected yet.';
    });
    ['Debit/Credit Card', 'Google Pay', 'Paypal', 'Cash on Delivery'].forEach((name, index) => {
      const section = document.createElement('section');
      const label = document.createElement('label');
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'payment-method';
      radio.checked = index === 0;
      radio.addEventListener('change', () => {
        chosenMethod = name;
        cardForm.hidden = index !== 0;
        status.textContent = '';
      });
      label.append(radio, document.createTextNode(name));
      section.append(label);
      if (!index) section.append(cardForm);
      methods.append(section);
    });
    const next = button('Continue');
    next.addEventListener('click', () => {
      if (!cardForm.hidden && !cardForm.reportValidity()) return;
      const number = (cardForm.elements.namedItem('number') as HTMLInputElement).value.replace(
        /\D/g,
        '',
      );
      sessionStorage.setItem(
        'krist.payment',
        chosenMethod === 'Debit/Credit Card'
          ? `Debit/Credit Card (???? ${number.slice(-4)})`
          : chosenMethod,
      );
      window.location.hash = 'review';
    });
    content.append(methods, next, status);
  }
  layout.append(content, summary);
  const back = document.createElement('a');
  back.className = styles.back;
  back.href = review ? '#payment' : payment ? '#shipping' : '#cart';
  back.textContent = review
    ? 'Back to Payment Method'
    : payment
      ? 'Back to Address'
      : 'Back to Cart';
  main.append(back, title, layout);
  page.append(createHeader(), main, createFooter());
  return page;
}
