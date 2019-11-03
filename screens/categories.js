import React from 'react'
import {
 View, Text, FlatList, StyleSheet, TouchableOpacity 
} from 'react-native'
import { CATEGORIES } from '../data/categories'

const Categories = (props) => {
  const renderGridItem = (itemData) => (
    <TouchableOpacity
      style={styles.gridItem}
      onPress={() => {
        props.navigation.navigate({
          routeName: 'CategoryMeals',
          params: {
            categoryId: itemData.item.id,
          },
        })
      }}
    >
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    </TouchableOpacity>
  )
  return <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
})

export default Categories
