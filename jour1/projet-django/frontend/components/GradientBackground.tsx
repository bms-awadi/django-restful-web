import { LinearGradient } from 'expo-linear-gradient';
import type { PropsWithChildren } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

import { backgroundGradient } from '../constants/theme';

type Props = PropsWithChildren<{ style?: StyleProp<ViewStyle> }>;

export default function GradientBackground({ children, style }: Props) {
  return (
    <LinearGradient
      colors={backgroundGradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={style}
    >
      {children}
    </LinearGradient>
  );
}
