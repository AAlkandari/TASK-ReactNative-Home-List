import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { VStack } from 'native-base'

const ProductItem = ({product, navigation}) => {
console.log("🚀 ~ file: ProductItem.js ~ line 6 ~ ProductItem ~ navigation", navigation)
  return (
    <Pressable onPress={() => navigation.navigate("ProductDetail", {product:product})}>
    <View>
      <VStack space={5} alignItems="center">
      <Text style={styles.text}>{product.name}</Text>
      <Image source={{ uri: product.image }} style={{ height: 150, width:150 }} />
      </VStack>
    </View>
  </Pressable>
  )
}

export default ProductItem
const styles = StyleSheet.create({
  text: {
  color: "white",
  fontSize: 25,
  fontWeight: "bold",
  textAlign: "center",
},
})
