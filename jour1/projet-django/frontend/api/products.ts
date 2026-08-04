import { API_BASE_URL } from '../constants/api';

export type Category = {
  id: number;
  name: string;
};

export type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string | null;
  category: Category;
  created_at: string;
};

export type ProductFilters = {
  categoryId?: number | null;
  minPrice?: string;
  maxPrice?: string;
};

export async function fetchProducts(filters: ProductFilters = {}): Promise<Product[]> {
  const params = new URLSearchParams();
  if (filters.categoryId) params.set('category', String(filters.categoryId));
  if (filters.minPrice) params.set('min_price', filters.minPrice);
  if (filters.maxPrice) params.set('max_price', filters.maxPrice);

  const query = params.toString();
  const response = await fetch(`${API_BASE_URL}/api/products/${query ? `?${query}` : ''}`);
  if (!response.ok) {
    throw new Error(`Erreur lors du chargement des produits (${response.status})`);
  }
  return response.json();
}

export async function fetchProduct(id: string | number): Promise<Product> {
  const response = await fetch(`${API_BASE_URL}/api/products/${id}/`);
  if (!response.ok) {
    throw new Error(`Erreur lors du chargement du produit (${response.status})`);
  }
  return response.json();
}
