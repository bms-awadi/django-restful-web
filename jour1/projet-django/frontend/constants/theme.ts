export const colors = {
  background: '#0B0B12',
  surface: '#16121F',
  border: '#2A2438',
  neonGreen: '#39FF14',
  neonYellow: '#F5FF00',
  neonPurple: '#B026FF',
  textPrimary: '#F2F2F2',
  textMuted: '#9A93AC',
};

export const backgroundGradient = ['#05050A', '#1A0B2E', '#0B0B12'] as const;

export const glow = (color: string) => ({
  textShadowColor: color,
  textShadowOffset: { width: 0, height: 0 },
  textShadowRadius: 6,
});
