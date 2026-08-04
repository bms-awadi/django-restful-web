import { StyleSheet, View, type ViewStyle } from 'react-native';

import { colors } from '../constants/theme';

export default function Divider({ style }: { style?: ViewStyle }) {
  return <View style={[styles.divider, style]} />;
}

const styles = StyleSheet.create({
  divider: {
    width: 120,
    height: 2,
    backgroundColor: colors.neonPurple,
    marginVertical: 16,
  },
});
