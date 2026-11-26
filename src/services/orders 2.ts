import type { CartItem } from './cart';
export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  address: { name: string; address: string };
  payment: string;
  subtotal: number;
  discount: number;
  total: number;
  status: 'In Process' | 'Cancelled';
}
export function getOrders(): Order[] {
  try {
    const data = JSON.parse(localStorage.getItem('krist.orders') || '[]');
    return Array.isArray(data)
      ? data.filter((o) => o && typeof o.id === 'string' && Array.isArray(o.items) && o.address)
      : [];
  } catch {
    return [];
  }
}
export function saveOrder(order: Order): void {
  localStorage.setItem('krist.orders', JSON.stringify([order, ...getOrders()]));
}
export function cancelOrder(id: string): void {
  localStorage.setItem(
    'krist.orders',
    JSON.stringify(getOrders().map((o) => (o.id === id ? { ...o, status: 'Cancelled' } : o))),
  );
}
