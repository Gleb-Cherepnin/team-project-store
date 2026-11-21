import styles from './SavedCards.module.scss';

import { createCardModal, type CardPreview } from './CardModal';

const CARDS_STORAGE_KEY = 'krist.cards.v1';

function isCardPreview(value: unknown): value is CardPreview {
  if (!value || typeof value !== 'object') return false;
  const card = value as Record<string, unknown>;
  return (
    typeof card.name === 'string' &&
    typeof card.brand === 'string' &&
    typeof card.number === 'string' &&
    /^[\dX ]{4,30}$/.test(card.number) &&
    card.number.includes('X')
  );
}

export function createSavedCards(): HTMLElement {
  const section = document.createElement('section');
  section.className = styles.cards;
  section.setAttribute('aria-label', 'Saved Cards');

  const add = document.createElement('button');
  add.type = 'button';
  add.className = styles.add;
  add.innerHTML =
    '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>Add New Card';

  const list = document.createElement('div');
  const status = document.createElement('p');
  status.className = styles.status;
  status.setAttribute('role', 'status');

  const cards: CardPreview[] = [
    { name: 'Master Card', number: '3456 XX78 9800 55X3', brand: 'mastercard' },
    { name: 'Visa Card', number: '5677 3490 XX90 XX23', brand: 'visa' },
  ];
  function persist(): boolean {
    try {
      localStorage.setItem(
        CARDS_STORAGE_KEY,
        JSON.stringify(cards.map(({ name, number, brand }) => ({ name, number, brand }))),
      );
      return true;
    } catch {
      return false;
    }
  }
  try {
    const saved = localStorage.getItem(CARDS_STORAGE_KEY);
    if (saved !== null) {
      const parsed: unknown = JSON.parse(saved);
      if (!Array.isArray(parsed) || !parsed.every(isCardPreview)) throw new Error('Invalid cards');
      cards.splice(
        0,
        cards.length,
        ...parsed.map(({ name, number, brand }) => ({ name, number, brand })),
      );
      if (!cards.length) status.textContent = 'No saved cards.';
    } else if (!persist()) {
      status.textContent = 'Browser storage is unavailable. Cards will remain only for this visit.';
    }
  } catch {
    status.textContent = 'Saved cards could not be loaded. Sample cards are shown.';
  }
  function appendCard(card: CardPreview) {
    const row = document.createElement('article');
    row.className = styles.row;
    const logo = document.createElement('div');
    logo.className = styles.logo;
    const imagePath =
      card.brand === 'mastercard'
        ? '/images/cards/master-card.svg'
        : card.brand === 'visa'
          ? '/images/cards/visa.svg'
          : undefined;
    if (imagePath) {
      const image = document.createElement('img');
      image.src = imagePath;
      image.alt = '';
      logo.append(image);
    } else {
      logo.textContent = 'CARD';
    }
    const info = document.createElement('div');
    info.className = styles.info;
    const name = document.createElement('h2');
    name.textContent = card.name;
    const number = document.createElement('p');
    number.textContent = card.number;
    info.append(name, number);
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = styles.remove;
    remove.setAttribute('aria-label', `Delete ${card.name} ${card.number}`);
    remove.innerHTML =
      '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18M9 6V3h6v3M5 6l1 14h12l1-14M10 10v6M14 10v6"/></svg>Delete';
    remove.addEventListener('click', () => {
      const next = row.nextElementSibling ?? row.previousElementSibling;
      row.remove();
      cards.splice(cards.indexOf(card), 1);
      status.textContent = persist()
        ? cards.length
          ? `${card.name} removed.`
          : 'No saved cards.'
        : 'Could not save to browser storage. The deletion applies only to this visit.';
      (next?.querySelector('button') ?? add).focus();
    });
    row.append(logo, info, remove);
    list.append(row);
  }
  cards.forEach(appendCard);
  const modal = createCardModal(add, (card) => {
    cards.push(card);
    appendCard(card);
    status.textContent = persist()
      ? 'Card saved.'
      : 'Could not save to browser storage. The card is available only for this visit.';
  });
  section.append(add, list, status, modal);
  return section;
}
