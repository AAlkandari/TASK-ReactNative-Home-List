import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react' 

const ShopItem = ({shop}) => {
  return (
    <View>
      <Text>{shop.name}</Text>
      <Image source={{ uri: shop.image }} style={{ height: 250, width:250 }}  />
    </View>
  )
}
export default ShopItem

const styles = StyleSheet.create({})