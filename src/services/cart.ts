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
  const items = getCart();
  const existing = items.find(
    (entry) =>
      entry.size === item.size &&
      (entry.id && item.id
        ? entry.id === item.id
        : entry.name === item.name && entry.image === item.image),
  );
  if (existing) existing.quantity += item.quantity;
  else items.push({ ...item });
  save(items);
}
export function removeCartItem(index: number): void {
  save(getCart().filter((_, position) => position !== index));
}

export function setCartItemQuantity(index: number, quantity: number): void {
  const items = getCart();
  if (!items[index] || !Number.isSafeInteger(quantity) || quantity < 0) return;
  items[index].quantity = quantity;
  save(items.filter((item) => item.quantity > 0));
}
