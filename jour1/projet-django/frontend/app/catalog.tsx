import { Stack } from 'expo-router';
import { useMemo, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import FilterBar from '../components/FilterBar';
import GradientBackground from '../components/GradientBackground';
import ProductCard from '../components/ProductCard';
import { Caption } from '../components/Typography';
import { categories, mockProducts } from '../constants/mockProducts';

export default function CatalogScreen() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const filteredProducts = useMemo(() => {
    return mockProducts.filter((product) => {
      if (selectedCategory && product.category !== selectedCategory) return false;
      const min = parseFloat(minPrice);
      const max = parseFloat(maxPrice);
      if (!Number.isNaN(min) && product.price < min) return false;
      if (!Number.isNaN(max) && product.price > max) return false;
      return true;
    });
  }, [selectedCategory, minPrice, maxPrice]);

  return (
    <GradientBackground style={styles.container}>
      <Stack.Screen options={{ title: 'Catalogue' }} />
      <FilterBar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        minPrice={minPrice}
        maxPrice={maxPrice}
        onChangeMinPrice={setMinPrice}
        onChangeMaxPrice={setMaxPrice}
      />
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => <ProductCard product={item} />}
        ListEmptyComponent={<Caption>Aucun produit ne correspond a ces filtres.</Caption>}
        contentContainerStyle={styles.list}
      />
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  list: {
    paddingBottom: 24,
  },
});
