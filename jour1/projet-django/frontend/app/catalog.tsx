import { Stack } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';

import { fetchProducts, type Category, type Product } from '../api/products';
import FilterBar from '../components/FilterBar';
import GradientBackground from '../components/GradientBackground';
import ProductCard from '../components/ProductCard';
import { Body, Caption } from '../components/Typography';
import { colors } from '../constants/theme';

export default function CatalogScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  useEffect(() => {
    fetchProducts().then((allProducts) => {
      const unique = new Map(allProducts.map((product) => [product.category.id, product.category]));
      setCategories(Array.from(unique.values()));
    });
  }, []);

  const loadProducts = useCallback(() => {
    setLoading(true);
    setError(null);
    fetchProducts({ categoryId: selectedCategoryId, minPrice, maxPrice })
      .then(setProducts)
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, [selectedCategoryId, minPrice, maxPrice]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <GradientBackground style={styles.container}>
      <Stack.Screen options={{ title: 'Catalogue' }} />
      <FilterBar
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        onSelectCategory={setSelectedCategoryId}
        minPrice={minPrice}
        maxPrice={maxPrice}
        onChangeMinPrice={setMinPrice}
        onChangeMaxPrice={setMaxPrice}
      />
      {loading && <ActivityIndicator color={colors.neonGreen} style={styles.loader} />}
      {error && <Body>{error}</Body>}
      {!loading && !error && (
        <FlatList
          data={products}
          keyExtractor={(item) => String(item.id)}
          numColumns={2}
          renderItem={({ item }) => <ProductCard product={item} />}
          ListEmptyComponent={<Caption>Aucun produit ne correspond a ces filtres.</Caption>}
          contentContainerStyle={styles.list}
        />
      )}
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  loader: {
    marginTop: 40,
  },
  list: {
    paddingBottom: 24,
  },
});
