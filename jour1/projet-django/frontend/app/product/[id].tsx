import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { fetchProduct, type Product } from '../../api/products';
import GradientBackground from '../../components/GradientBackground';
import NeonButton from '../../components/NeonButton';
import { Body, Caption, Tagline, Title } from '../../components/Typography';
import { colors } from '../../constants/theme';

export default function ProductScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchProduct(id)
      .then(setProduct)
      .catch(() => setError('Produit introuvable.'))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <GradientBackground style={styles.container}>
        <Stack.Screen options={{ title: 'Produit' }} />
        <ActivityIndicator color={colors.neonGreen} />
      </GradientBackground>
    );
  }

  if (error || !product) {
    return (
      <GradientBackground style={styles.container}>
        <Stack.Screen options={{ title: 'Produit' }} />
        <Body>{error ?? 'Produit introuvable.'}</Body>
        <Link href="/catalog" asChild>
          <NeonButton style={styles.button}>Retour au catalogue</NeonButton>
        </Link>
      </GradientBackground>
    );
  }

  return (
    <GradientBackground style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />
      <View style={styles.image} />
      <Title style={styles.name} color={colors.neonYellow}>
        {product.name}
      </Title>
      <Caption>{product.category.name}</Caption>
      <Tagline style={styles.price} color={colors.neonGreen}>
        {Number(product.price).toFixed(2)} EUR
      </Tagline>
      <Body style={styles.description}>{product.description}</Body>
      <Link href="/catalog" asChild>
        <NeonButton style={styles.button}>Retour au catalogue</NeonButton>
      </Link>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    gap: 10,
  },
  image: {
    width: 220,
    height: 160,
    borderRadius: 12,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.neonPurple,
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    textAlign: 'center',
  },
  price: {
    marginTop: 4,
  },
  description: {
    maxWidth: 320,
    marginVertical: 20,
  },
  button: {
    marginTop: 8,
  },
});
