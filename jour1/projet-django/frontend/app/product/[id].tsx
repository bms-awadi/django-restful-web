import { Link, Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import GradientBackground from '../../components/GradientBackground';
import NeonButton from '../../components/NeonButton';
import { Body, Caption, Tagline, Title } from '../../components/Typography';
import { colors } from '../../constants/theme';
import { mockProducts } from '../../constants/mockProducts';

export default function ProductScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const product = mockProducts.find((item) => item.id === id);

  if (!product) {
    return (
      <GradientBackground style={styles.container}>
        <Stack.Screen options={{ title: 'Produit' }} />
        <Body>Produit introuvable.</Body>
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
      <Caption>{product.category}</Caption>
      <Tagline style={styles.price} color={colors.neonGreen}>
        {product.price.toFixed(2)} EUR
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
