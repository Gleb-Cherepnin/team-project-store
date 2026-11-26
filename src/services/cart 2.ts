export interface CartItem {
  id?: string;
  brand?: string;
  oldPrice?: string;
  name: string;
  image: string;
  price: number;
  size: string;
  quantity: number;
}
const key = 'krist-cart';
export function getCart(): CartItem[] {
  try {
    const data: unknown = JSON.parse(localStorage.getItem(key) || '[]');
    return Array.isArray(data)
      ? data.filter(
          (item): item is CartItem =>
            item &&
            typeof item.name === 'string' &&
            typeof item.image === 'string' &&
            typeof item.size === 'string' &&
            Number.isFinite(item.price) &&
            item.price >= 0 &&
            Number.isSafeInteger(item.quantity) &&
            item.quantity > 0,
        )
      : [];
  } catch {
    return [];
  }
}
function save(items: CartItem[]): void {
  localStorage.setItem(key, JSON.stringify(items));
  document
    .querySelectorAll<HTMLElement>('[data-mini-cart], [data-cart-product]')
    .forEach((element) => element.dispatchEvent(new Event('cartchange')));
}
export function addCartItem(item: CartItem): void {
  if (
    !Number.isSafeInteger(item.quantity) ||
    item.quantity < 1 ||
    !Number.isFinite(item.price) ||
    item.price < 0
  )
    return;
  const items = getCart();
  const existing = items.find(
    (entry) =>
      entry.size === item.size &&
      (entry.id && item.id
        ? entry.id === item.id
        : entry.name === item.name && entry.image === item.image),
  );
  if (existing) {
    if (!Number.isSafeInteger(existing.quantity + item.quantity)) return;
    existing.quantity += item.quantity;
  } else items.push({ ...item });
  save(items);
}
export function removeCartItem(index: number): void {
  save(getCart().filter((_, position) => position !== index));
}

export function setCartItemQuantity(index: number, quantity: number): void {
  const items = getCart();
  if (!items[index] || !Number.isSafeInteger(quantity) || quantity < 1) return;
  items[index].quantity = quantity;
  save(items);
}

export function calculateCartTotals(items: CartItem[], code = '') {
  const subtotalCents = items.reduce(
    (sum, item) => sum + Math.round(item.price * 100) * item.quantity,
    0,
  );
  const discountApplied = code.trim().toUpperCase() === 'SALE10';
  const discountCents = discountApplied ? Math.round(subtotalCents * 0.1) : 0;
  return {
    subtotal: subtotalCents / 100,
    discount: discountCents / 100,
    total: (subtotalCents - discountCents) / 100,
    discountApplied,
  };
}
