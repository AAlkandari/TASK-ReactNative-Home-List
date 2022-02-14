import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react' 
import { VStack } from 'native-base'

const ShopItem = ({shop, navigation}) => {
  return (
    <Pressable onPress={() => navigation.navigate("ShopDetails", {shop:shop})}>
    <View>
    <VStack space={5} alignItems="center">
      <Text style={styles.text}>{shop.name}</Text>
      <Image  source={{ uri: shop.image }} style={{ height: 250, width:250 }}  />
    </VStack>
    </View>
    </Pressable>
  )
}
export default ShopItem

const styles = StyleSheet.create({
  text: {
  color: "black",
  fontSize: 25,
  fontWeight: "bold",
  textAlign: "center",
}
})

