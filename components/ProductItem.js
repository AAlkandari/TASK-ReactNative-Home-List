import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ProductItem = ({ product }) => {
  return (
    <View>
      <Text>{product.name}</Text>
      <Image source={{ uri: product.image }} style={{ height: 150, width:150 }} />
    </View>
  )
}

export default ProductItem
const styles = StyleSheet.create({})

