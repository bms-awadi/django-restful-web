import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '../constants/theme';
import type { Product } from '../constants/mockProducts';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`} asChild>
      <Pressable style={styles.card}>
        <View style={styles.imagePlaceholder} />
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.price}>{product.price.toFixed(2)} EUR</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
    margin: 6,
    minWidth: 150,
  },
  imagePlaceholder: {
    height: 90,
    borderRadius: 6,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.neonPurple,
    marginBottom: 8,
  },
  name: {
    color: colors.neonYellow,
    fontSize: 14,
    fontWeight: '600',
  },
  category: {
    color: colors.textMuted,
    fontSize: 12,
    marginTop: 2,
  },
  price: {
    color: colors.neonGreen,
    fontSize: 14,
    fontWeight: '700',
    marginTop: 6,
  },
});
