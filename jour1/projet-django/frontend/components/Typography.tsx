import type { PropsWithChildren } from 'react';
import { StyleSheet, Text, type TextStyle } from 'react-native';

import { colors, glow } from '../constants/theme';

type Props = PropsWithChildren<{ style?: TextStyle }>;

export function Title({ children, style }: Props) {
  return <Text style={[styles.title, glow(colors.neonGreen), style]}>{children}</Text>;
}

export function Tagline({ children, style }: Props) {
  return <Text style={[styles.tagline, glow(colors.neonYellow), style]}>{children}</Text>;
}

export function Body({ children, style }: Props) {
  return <Text style={[styles.body, style]}>{children}</Text>;
}

export function Caption({ children, style }: Props) {
  return <Text style={[styles.caption, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: '800',
    letterSpacing: 4,
    color: colors.neonGreen,
  },
  tagline: {
    fontSize: 18,
    color: colors.neonYellow,
  },
  body: {
    fontSize: 14,
    color: colors.textMuted,
    textAlign: 'center',
    lineHeight: 20,
  },
  caption: {
    fontSize: 14,
    color: colors.textMuted,
  },
});
