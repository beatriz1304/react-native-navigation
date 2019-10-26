import React from 'react'
import { View, Text, Button, FlatList, StyleSheet } from 'react-native'
import { CATEGORIES } from '../data/categories'

const Categories = props => {
  const renderGridItem = itemData => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    )
  }
  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Categories
