import { View, FlatList, StatusBar, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { categories } from '@/data/categories';
import { Category } from '@/types/category.types';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function home({ navigation }: any) {
  return (
    <View
      style={{ paddingTop: StatusBar.currentHeight, paddingHorizontal: 20 }}
    >
      <ThemedText style={styles.title}>Select a Category</ThemedText>
      <FlatList
        contentContainerStyle={styles.container}
        data={categories}
        keyExtractor={(item: Category) => item.categoryId}
        renderItem={({ item }: { item: Category }) => (
          <Pressable
            onPress={() => {
              //   navigation.navigate('SubCategoryList', {
              //     subCategories: item.subCategories,
              //   })
              console.log('Hello');
            }}
          >
            <ThemedView style={styles.card}>
              <ThemedText>{item.categoryName}</ThemedText>
            </ThemedView>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginVertical: 20,
    fontSize: 20,
  },
  container: {
    flexDirection: 'row',
    gap: 10,
  },

  card: {
    padding: 20,
    borderRadius: 10,
  },
});
