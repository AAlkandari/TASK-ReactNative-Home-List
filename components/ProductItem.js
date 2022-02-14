import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { VStack } from 'native-base'


const ProductItem = ({ product }) => {
  return (
    <View>
      <VStack space={5} alignItems="center">
      <Text style={styles.text}>{product.name}</Text>
      <Image source={{ uri: product.image }} style={{ height: 150, width:150 }} />
      </VStack>
    </View>
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
