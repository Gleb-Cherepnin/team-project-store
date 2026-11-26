import { expect, it } from 'vitest';
import { filterProducts, type CatalogFilters } from './catalog';
import type { Product } from '../components/ProductCard/ProductCard';

const products: Product[] = [
  {
    id: 'a',
    name: 'Cotton Shirt',
    category: 'shirts',
    price: '$30.00',
    image: '',
    brand: '',
    oldPrice: '',
  },
  {
    id: 'b',
    name: 'Cotton Bag',
    category: 'bags',
    price: '$10.00',
    image: '',
    brand: '',
    oldPrice: '',
  },
  {
    id: 'c',
    name: 'Linen Shirt',
    category: 'shirts',
    price: '$20.00',
    image: '',
    brand: '',
    oldPrice: '',
  },
];
const defaults: CatalogFilters = { query: '', categories: [], sort: 'original' };

it('combines case-insensitive partial search, category and inclusive price limits', () => {
  expect(
    filterProducts(products, {
      ...defaults,
      query: ' SHI ',
      categories: ['shirts'],
      min: 20,
      max: 30,
      sort: 'asc',
    }).map((p) => p.id),
  ).toEqual(['c', 'a']);
  expect(
    filterProducts(products, { ...defaults, query: 'cotton', categories: ['shirts'], max: 20 }),
  ).toEqual([]);
});

it('ignores blank search and omitted limits while retaining other filters', () => {
  expect(
    filterProducts(products, { ...defaults, query: ' ', categories: ['bags'] }).map((p) => p.id),
  ).toEqual(['b']);
  expect(filterProducts(products, { ...defaults, min: 20 })).toHaveLength(2);
  expect(filterProducts(products, { ...defaults, max: 10 }).map((p) => p.id)).toEqual(['b']);
  expect(filterProducts(products, { ...defaults, max: 0 })).toEqual([]);
});

it('sorts both ways without changing source order and restores defaults', () => {
  expect(filterProducts(products, { ...defaults, sort: 'asc' }).map((p) => p.id)).toEqual([
    'b',
    'c',
    'a',
  ]);
  expect(filterProducts(products, { ...defaults, sort: 'desc' }).map((p) => p.id)).toEqual([
    'a',
    'c',
    'b',
  ]);
  expect(filterProducts(products, defaults).map((p) => p.id)).toEqual(['a', 'b', 'c']);
  expect(products.map((p) => p.id)).toEqual(['a', 'b', 'c']);
});

it('returns no results for a reversed range or unmatched name', () => {
  expect(filterProducts(products, { ...defaults, min: 30, max: 10 })).toEqual([]);
  expect(filterProducts(products, { ...defaults, query: 'missing' })).toEqual([]);
});
