import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import Divider from '../components/Divider';
import GradientBackground from '../components/GradientBackground';
import NeonButton from '../components/NeonButton';
import { Body, Tagline, Title } from '../components/Typography';

export default function HomeScreen() {
  return (
    <GradientBackground style={styles.container}>
      <Stack.Screen options={{ title: 'Accueil' }} />
      <Title>E-SHOP</Title>
      <Tagline>Le futur du shopping</Tagline>
      <Divider />
      <Body style={styles.description}>
        Bienvenue sur E-SHOP, la boutique en ligne nouvelle generation. Parcourez notre catalogue,
        filtrez par categorie et par prix, et trouvez le produit qu il vous faut.
      </Body>
      <Link href="/catalog" asChild>
        <NeonButton>Decouvrir le catalogue</NeonButton>
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
    gap: 12,
  },
  description: {
    maxWidth: 320,
    marginBottom: 24,
  },
});
