import styles from './Addresses.module.scss';

const icons = {
  plus: 'M12 5v14M5 12h14',
  edit: 'M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M16 3l5 5M9 15l-1 4 4-1L22 8a3.5 3.5 0 0 0-5-5Z',
  trash: 'M3 6h18M9 6V3h6v3M5 6l1 14h12l1-14M10 10v6M14 10v6',
  phone:
    'M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.7 2.8a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.4-1.3a2 2 0 0 1 2.1-.5l2.8.7a2 2 0 0 1 1.7 2ZM14 2a8 8 0 0 1 8 8M14 6a4 4 0 0 1 4 4',
};
function icon(name: keyof typeof icons): string {
  return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${icons[name]}"/></svg>`;
}
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

const ADDRESS_STORAGE_KEY = 'krist.addresses.v1';

function isAddress(value: unknown): value is Address {
  if (!value || typeof value !== 'object') return false;
  const record = value as Record<string, unknown>;
  return (
    ['name', 'address', 'phone'].every((key) => typeof record[key] === 'string') &&
    ['building', 'area', 'city', 'state', 'pin'].every(
      (key) => record[key] === undefined || typeof record[key] === 'string',
    ) &&
    (record.isDefault === undefined || typeof record.isDefault === 'boolean')
  );
}

export function createAddresses(): HTMLElement {
  const addresses: Address[] = [
    {
      name: 'Robert Fox',
      address: '4517 Washington Ave. Manchester, Kentucky 39495',
      phone: '(209) 555-0104',
    },
    {
      name: 'John Willions',
      address: '3891 Ranchview Dr. Richardson, California 62639',
      phone: '(270) 555-0117',
    },
    {
      name: 'Alexa Johnson',
      address: '4517 Washington Ave. Manchester, Kentucky 39495',
      phone: '(208) 555-0112',
    },
  ];
  let storageNotice = '';
  try {
    const saved = localStorage.getItem(ADDRESS_STORAGE_KEY);
    if (saved !== null) {
      const parsed: unknown = JSON.parse(saved);
      if (!Array.isArray(parsed) || !parsed.every(isAddress)) throw new Error('Invalid addresses');
      addresses.splice(0, addresses.length, ...parsed);
    } else {
      localStorage.setItem(ADDRESS_STORAGE_KEY, JSON.stringify(addresses));
    }
  } catch {
    storageNotice = 'Saved addresses could not be loaded. The sample addresses are shown.';
  }
  function persist(): boolean {
    try {
      localStorage.setItem(ADDRESS_STORAGE_KEY, JSON.stringify(addresses));
      return true;
    } catch {
      return false;
    }
  }
  const section = document.createElement('section');
  section.className = styles.addresses;
  section.setAttribute('aria-label', 'Manage Addresses');
  const add = document.createElement('button');
  add.type = 'button';
  add.className = styles.add;
  add.innerHTML = `${icon('plus')}Add New Address`;
  const list = document.createElement('div');
  const status = document.createElement('p');
  status.className = styles.status;
  status.setAttribute('role', 'status');
  status.textContent = storageNotice;
  const overlay = document.createElement('div');
  overlay.className = styles.overlay;
  overlay.hidden = true;
  const dialog = document.createElement('div');
  dialog.setAttribute('role', 'dialog');
  dialog.setAttribute('aria-modal', 'true');
  overlay.append(dialog);
  dialog.className = styles.dialog;
  dialog.setAttribute('aria-labelledby', 'address-dialog-title');
  dialog.innerHTML = `<form><h2 id="address-dialog-title">Add a new address</h2>
    <label>Name<input name="name" autocomplete="name" placeholder="Enter Name" required/></label>
    <label>Mobile Number<input name="phone" type="tel" autocomplete="tel" placeholder="Enter Mobile Number" required/></label>
    <label>Flat, House no., Building, Company, Apartment<input name="building" autocomplete="address-line1" required/></label>
    <label>Area, Colony, Street, Sector, Village<input name="area" autocomplete="address-line2"/></label>
    <label>City<span class="${styles.select}"><select name="city" autocomplete="address-level2" required><option value="" disabled>Select City</option><option>Manchester</option><option>Richardson</option><option>Mesa</option></select></span></label>
    <label>Pin Code<input name="pin" autocomplete="postal-code" placeholder="Enter Pin Code" required/></label>
    <label>State<span class="${styles.select}"><select name="state" autocomplete="address-level1" required><option value="" disabled>Select State</option><option>Kentucky</option><option>California</option><option>New Jersey</option><option>Arizona</option><option>Texas</option></select></span></label>
    <label class="${styles.defaultAddress}"><input type="checkbox" name="isDefault" checked/>Use as my default address</label>
    <div class="${styles.dialogActions}"><button type="button">Cancel</button><button type="submit">Add New Address</button></div></form>`;
  let editing: Address | undefined;
  const form = dialog.querySelector('form')!;
  let returnFocus: HTMLElement | null = null;
  const background: HTMLElement[] = [];
  function closeDialog() {
    overlay.hidden = true;
    background.splice(0).forEach((element) => {
      element.inert = false;
    });
    if (returnFocus?.isConnected) returnFocus.focus();
  }
  overlay.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeDialog();
    }
    if (event.key === 'Tab') {
      const controls = dialog.querySelectorAll<HTMLElement>(
        'input:not(:disabled), select:not(:disabled), button:not(:disabled)',
      );
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }
  });
  function openEditor(address?: Address) {
    editing = address;
    form.reset();
    dialog.querySelector('h2')!.textContent = address ? 'Edit address' : 'Add a new address';
    form.querySelector('button[type="submit"]')!.textContent = address
      ? 'Save Address'
      : 'Add New Address';
    const legacy = address?.address.match(
      /^(.*?)\s+(Manchester|Richardson),\s+(Kentucky|California)\s+(\S+)$/,
    );
    const values = address
      ? {
          ...address,
          building: address.building ?? legacy?.[1] ?? address.address,
          city: address.city ?? legacy?.[2],
          state: address.state ?? legacy?.[3],
          pin: address.pin ?? legacy?.[4],
        }
      : undefined;
    for (const input of form.querySelectorAll<HTMLInputElement | HTMLSelectElement>(
      'input:not([type="checkbox"]), select',
    ))
      input.value = String(values?.[input.name as keyof Address] ?? '');
    form.querySelector<HTMLInputElement>('[name="isDefault"]')!.checked =
      address?.isDefault ?? !address;
    returnFocus = document.activeElement as HTMLElement | null;
    overlay.hidden = false;
    // Disable only application siblings; leave browser-extension overlays alone.
    const app = section.closest('#app');
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
    form.querySelector('input')?.focus();
  }
  dialog.querySelector('button[type="button"]')!.addEventListener('click', closeDialog);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) ?? '').trim();
    const address: Address = {
      name: String(data.get('name')).trim(),
      address: [
        value('building'),
        value('area'),
        `${value('city')}, ${value('state')} ${value('pin')}`,
      ]
        .filter(Boolean)
        .join(' '),
      phone: String(data.get('phone')).trim(),
      building: value('building'),
      area: value('area'),
      city: value('city'),
      state: value('state'),
      pin: value('pin'),
      isDefault: data.has('isDefault'),
    };
    if (
      ![
        address.name,
        address.phone,
        address.building,
        address.city,
        address.state,
        address.pin,
      ].every(Boolean)
    )
      return;
    if (address.isDefault)
      addresses.forEach((item) => {
        item.isDefault = false;
      });
    if (editing) Object.assign(editing, address);
    else addresses.push(address);
    render();
    closeDialog();
    add.focus();
    status.textContent = persist()
      ? 'Address saved.'
      : 'Could not save to browser storage. Changes are available only for this visit.';
  });
  function render() {
    list.replaceChildren();
    addresses.forEach((address) => {
      const row = document.createElement('article');
      row.className = styles.row;
      const info = document.createElement('div');
      info.className = styles.info;
      const name = document.createElement('h2');
      name.textContent = address.name;
      const location = document.createElement('p');
      location.textContent = address.address;
      const phone = document.createElement('p');
      phone.className = styles.phone;
      phone.innerHTML = icon('phone');
      phone.append(document.createTextNode(address.phone));
      info.append(name, location, phone);
      const actions = document.createElement('div');
      actions.className = styles.actions;
      const edit = document.createElement('button');
      edit.type = 'button';
      edit.innerHTML = `${icon('edit')}Edit`;
      edit.setAttribute('aria-label', `Edit address for ${address.name}`);
      edit.addEventListener('click', () => openEditor(address));
      const remove = document.createElement('button');
      remove.type = 'button';
      remove.className = styles.remove;
      remove.innerHTML = `${icon('trash')}Delete`;
      remove.setAttribute('aria-label', `Delete address for ${address.name}`);
      remove.addEventListener('click', () => {
        addresses.splice(addresses.indexOf(address), 1);
        render();
        add.focus();
        status.textContent = persist()
          ? addresses.length
            ? 'Address deleted.'
            : 'No saved addresses. Add a new address to get started.'
          : 'Could not save to browser storage. The deletion applies only to this visit.';
      });
      actions.append(edit, remove);
      row.append(info, actions);
      list.append(row);
    });
  }
  add.addEventListener('click', () => openEditor());
  render();
  section.append(add, list, status, overlay);
  return section;
}
