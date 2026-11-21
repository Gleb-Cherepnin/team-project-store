import styles from '../../shared/ProfileModal.module.scss';

export interface CardPreview {
  name: string;
  number: string;
  brand: string;
}

export function createCardModal(trigger: HTMLButtonElement, onSave: (card: CardPreview) => void) {
  const overlay = document.createElement('div');
  overlay.className = styles.overlay;
  overlay.hidden = true;
  overlay.innerHTML = `<div class="${styles.dialog}" role="dialog" aria-modal="true" aria-labelledby="new-card-title"><form>
    <h2 id="new-card-title">Add a new card</h2>
    <label>Cardholder Name<input name="holder" autocomplete="cc-name" placeholder="Enter Cardholder Name" required maxlength="100"/></label>
    <label>Card Number<input name="number" autocomplete="cc-number" inputmode="numeric" placeholder="Enter Card Number" required maxlength="23"/></label>
    <label>Expiry Date<input name="expiry" autocomplete="cc-exp" inputmode="numeric" placeholder="MM/YY" required maxlength="5"/></label>
    <div class="${styles.dialogActions}"><button type="button">Cancel</button><button type="submit">Add New Card</button></div>
  </form></div>`;
  const form = overlay.querySelector('form')!;
  const holder = form.elements.namedItem('holder') as HTMLInputElement;
  const number = form.elements.namedItem('number') as HTMLInputElement;
  const expiry = form.elements.namedItem('expiry') as HTMLInputElement;
  const background: HTMLElement[] = [];
  function close() {
    overlay.hidden = true;
    background.splice(0).forEach((element) => {
      element.inert = false;
    });
    form.reset();
    [holder, number, expiry].forEach((input) => input.setCustomValidity(''));
    trigger.focus();
  }
  form.querySelector('button[type="button"]')!.addEventListener('click', close);
  overlay.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      close();
    }
    if (event.key !== 'Tab') return;
    const controls = form.querySelectorAll<HTMLElement>('input, button');
    const first = controls[0]!;
    const last = controls[controls.length - 1]!;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
  holder.addEventListener('input', () => holder.setCustomValidity(''));
  number.addEventListener('input', () => {
    number.setCustomValidity('');
    number.value = number.value
      .replace(/\D/g, '')
      .slice(0, 19)
      .replace(/(.{4})(?=.)/g, '$1 ');
  });
  expiry.addEventListener('input', () => {
    expiry.setCustomValidity('');
    const digits = expiry.value.replace(/\D/g, '').slice(0, 4);
    expiry.value = digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits;
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const digits = number.value.replace(/\D/g, '');
    let sum = 0;
    [...digits].reverse().forEach((digit, index) => {
      let value = Number(digit);
      if (index % 2 === 1) {
        value *= 2;
        if (value > 9) value -= 9;
      }
      sum += value;
    });
    holder.setCustomValidity(holder.value.trim() ? '' : 'Enter the cardholder name.');
    number.setCustomValidity(
      /^\d{13,19}$/.test(digits) && !/^0+$/.test(digits) && sum % 10 === 0
        ? ''
        : 'Enter a valid card number.',
    );
    const match = /^(0[1-9]|1[0-2])\/(\d{2})$/.exec(expiry.value);
    expiry.setCustomValidity(
      match && new Date(2000 + Number(match[2]), Number(match[1]), 1) > new Date()
        ? ''
        : 'Enter a valid, unexpired date (MM/YY).',
    );
    if (!form.reportValidity()) return;
    const prefix = Number(digits.slice(0, 4));
    const brand =
      /^4/.test(digits) && [13, 16, 19].includes(digits.length)
        ? 'visa'
        : digits.length === 16 && (/^5[1-5]/.test(digits) || (prefix >= 2221 && prefix <= 2720))
          ? 'mastercard'
          : /^3[47]/.test(digits) && digits.length === 15
            ? 'amex'
            : 'other';
    onSave({
      brand,
      name:
        brand === 'visa'
          ? 'Visa Card'
          : brand === 'mastercard'
            ? 'Master Card'
            : brand === 'amex'
              ? 'AMEX'
              : 'Card',
      number: `XXXX XXXX XXXX ${digits.slice(-4)}`,
    });
    close();
  });
  trigger.addEventListener('click', () => {
    overlay.hidden = false;
    const app = overlay.closest('#app');
    let branch: HTMLElement = overlay;
    while (app && branch !== app && branch.parentElement) {
      for (const sibling of branch.parentElement.children) {
        if (sibling !== branch && sibling instanceof HTMLElement && !sibling.inert) {
          sibling.inert = true;
          background.push(sibling);
        }
      }
      branch = branch.parentElement;
    }
    holder.focus();
  });
  return overlay;
}
