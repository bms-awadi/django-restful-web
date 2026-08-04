import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import GradientBackground from '../components/GradientBackground';
import { Body } from '../components/Typography';

export default function CatalogScreen() {
  return (
    <GradientBackground style={styles.container}>
      <Stack.Screen options={{ title: 'Catalogue' }} />
      <Body>Catalogue a venir</Body>
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
