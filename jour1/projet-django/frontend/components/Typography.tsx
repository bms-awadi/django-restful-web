import type { PropsWithChildren } from 'react';
import { StyleSheet, Text, type TextStyle } from 'react-native';

import { colors, glow } from '../constants/theme';

type Props = PropsWithChildren<{ style?: TextStyle; color?: string }>;

export function Title({ children, style, color = colors.neonGreen }: Props) {
  return <Text style={[styles.title, { color }, glow(color), style]}>{children}</Text>;
}

export function Tagline({ children, style, color = colors.neonYellow }: Props) {
  return <Text style={[styles.tagline, { color }, glow(color), style]}>{children}</Text>;
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
  },
  tagline: {
    fontSize: 18,
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
