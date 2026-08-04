import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { colors } from '../constants/theme';

type Props = {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  minPrice: string;
  maxPrice: string;
  onChangeMinPrice: (value: string) => void;
  onChangeMaxPrice: (value: string) => void;
};

export default function FilterBar({
  categories,
  selectedCategory,
  onSelectCategory,
  minPrice,
  maxPrice,
  onChangeMinPrice,
  onChangeMaxPrice,
}: Props) {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chips}>
        <Chip label="Toutes" active={selectedCategory === null} onPress={() => onSelectCategory(null)} />
        {categories.map((category) => (
          <Chip
            key={category}
            label={category}
            active={selectedCategory === category}
            onPress={() => onSelectCategory(category)}
          />
        ))}
      </ScrollView>
      <View style={styles.priceRow}>
        <TextInput
          style={styles.priceInput}
          placeholder="Prix min"
          placeholderTextColor={colors.textMuted}
          keyboardType="numeric"
          value={minPrice}
          onChangeText={onChangeMinPrice}
        />
        <TextInput
          style={styles.priceInput}
          placeholder="Prix max"
          placeholderTextColor={colors.textMuted}
          keyboardType="numeric"
          value={maxPrice}
          onChangeText={onChangeMaxPrice}
        />
      </View>
    </View>
  );
}

function Chip({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) {
  return (
    <Pressable style={[styles.chip, active && styles.chipActive]} onPress={onPress}>
      <Text style={[styles.chipText, active && styles.chipTextActive]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    marginBottom: 12,
  },
  chips: {
    flexDirection: 'row',
  },
  chip: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
    marginRight: 8,
  },
  chipActive: {
    borderColor: colors.neonGreen,
  },
  chipText: {
    color: colors.textMuted,
    fontSize: 13,
  },
  chipTextActive: {
    color: colors.neonGreen,
  },
  priceRow: {
    flexDirection: 'row',
    gap: 10,
  },
  priceInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    color: colors.textPrimary,
  },
});
