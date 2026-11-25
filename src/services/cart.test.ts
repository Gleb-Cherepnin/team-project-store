import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import {
  addCartItem,
  getCart,
  setCartItemQuantity,
  removeCartItem,
  calculateCartTotals,
} from './cart';

beforeEach(() => {
  const storage = new Map<string, string>();
  vi.stubGlobal('localStorage', {
    getItem: (key: string) => storage.get(key) ?? null,
    setItem: (key: string, value: string) => storage.set(key, value),
  });
  vi.stubGlobal('document', { querySelectorAll: () => [] });
});

afterEach(() => vi.unstubAllGlobals());

const item = {
  id: 'product-1',
  name: 'Shirt',
  image: '/shirt.png',
  price: 20,
  size: 'S',
  quantity: 1,
};

it('persists repeated additions as one row with increased quantity', () => {
  addCartItem(item);
  addCartItem({ ...item, name: 'Updated shirt name' });
  expect(getCart()).toHaveLength(1);
  expect(getCart()[0]?.quantity).toBe(2);
  expect(JSON.parse(localStorage.getItem('krist-cart')!)[0].quantity).toBe(2);
});

it('keeps different product identifiers and sizes separate', () => {
  addCartItem(item);
  addCartItem({ ...item, id: 'product-2' });
  addCartItem({ ...item, size: 'M' });
  expect(getCart()).toHaveLength(3);
});

it('merges a matching legacy cart entry without an identifier', () => {
  const legacy = { ...item, id: undefined };
  localStorage.setItem('krist-cart', JSON.stringify([legacy]));
  addCartItem(item);
  expect(getCart()).toHaveLength(1);
  expect(getCart()[0]?.quantity).toBe(2);
});

it('updates quantity but rejects values below one and fractional values', () => {
  addCartItem(item);
  setCartItemQuantity(0, 3);
  expect(getCart()[0]?.quantity).toBe(3);
  for (const quantity of [0, -1, 1.5, NaN]) setCartItemQuantity(0, quantity);
  expect(getCart()[0]?.quantity).toBe(3);
  setCartItemQuantity(0, 1);
  expect(getCart()[0]?.quantity).toBe(1);
});

it('removes only the chosen row and persists an empty cart', () => {
  addCartItem(item);
  addCartItem({ ...item, id: 'another' });
  removeCartItem(0);
  expect(getCart().map((entry) => entry.id)).toEqual(['another']);
  removeCartItem(0);
  expect(getCart()).toEqual([]);
  expect(localStorage.getItem('krist-cart')).toBe('[]');
});

it('calculates totals with a single 10 percent discount, without accumulating it', () => {
  const items = [{ ...item, price: 19.99, quantity: 3 }];
  const discounted = calculateCartTotals(items, ' sale10 ');
  expect(discounted).toEqual({ subtotal: 59.97, discount: 6, total: 53.97, discountApplied: true });
  expect(calculateCartTotals(items, 'SALE10')).toEqual(discounted);
  expect(calculateCartTotals(items, 'UNKNOWN')).toEqual({
    subtotal: 59.97,
    discount: 0,
    total: 59.97,
    discountApplied: false,
  });
  expect(calculateCartTotals([{ ...item, quantity: 2 }], 'SALE10').total).toBe(36);
  expect(calculateCartTotals([], 'SALE10').total).toBe(0);
});

it('restores saved items and tolerates damaged storage', () => {
  localStorage.setItem('krist-cart', JSON.stringify([{ ...item, quantity: 4 }]));
  expect(getCart()[0]?.quantity).toBe(4);
  localStorage.setItem('krist-cart', 'broken json');
  expect(getCart()).toEqual([]);
});

it('does not add invalid quantities', () => {
  for (const quantity of [0, -1, 1.5, NaN]) addCartItem({ ...item, quantity });
  expect(getCart()).toEqual([]);
});
