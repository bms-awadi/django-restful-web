import { forwardRef, type ReactNode } from 'react';
import { Pressable, StyleSheet, Text, type PressableProps } from 'react-native';

import { colors } from '../constants/theme';

type Props = PressableProps & { children: ReactNode };

const NeonButton = forwardRef<typeof Pressable, Props>(({ children, style, ...rest }, ref) => {
  return (
    <Pressable ref={ref as never} style={[styles.button, style as object]} {...rest}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
});

export default NeonButton;

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: colors.neonPurple,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 28,
  },
  text: {
    color: colors.neonPurple,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1,
  },
});
