import type { Product } from '../components/ProductCard/ProductCard';

export interface CatalogFilters {
  query: string;
  categories: string[];
  min?: number;
  max?: number;
  sort: 'original' | 'asc' | 'desc';
}

export function filterProducts(products: Product[], filters: CatalogFilters): Product[] {
  const query = filters.query.trim().toLowerCase();
  const result = products.filter((product) => {
    const price = Number(product.price.replace('$', ''));
    return (
      product.name.toLowerCase().includes(query) &&
      (!filters.categories.length || filters.categories.includes(product.category)) &&
      (filters.min === undefined || price >= filters.min) &&
      (filters.max === undefined || price <= filters.max)
    );
  });
  if (filters.sort !== 'original') {
    const direction = filters.sort === 'asc' ? 1 : -1;
    result.sort(
      (a, b) => direction * (Number(a.price.replace('$', '')) - Number(b.price.replace('$', ''))),
    );
  }
  return result;
}
