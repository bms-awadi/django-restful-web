import { Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet } from 'react-native';

import GradientBackground from '../../components/GradientBackground';
import { Body } from '../../components/Typography';

export default function ProductScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <GradientBackground style={styles.container}>
      <Stack.Screen options={{ title: 'Produit' }} />
      <Body>Fiche produit {id} a venir</Body>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
