import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import { addCartItem, getCart } from './cart';

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
