import { Button, StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { VStack } from "native-base";
import cartStore from "../stores/cartStore";
import { observer } from "mobx-react";

const ProductItem = ({ product, navigation }) => {
  const handleAdd = () => {
    const addItem = { product: product, quantity: 1 };
    cartStore.addItemToCart(product, 1);
  };

  return (
    <Pressable
      onPress={() => navigation.navigate("ProductDetail", { product: product })}
    >
      <View>
        <VStack space={5} alignItems="center">
          <Text style={styles.text}>{product.name}</Text>
          <Image
            source={{ uri: product.image }}
            style={{ height: 150, width: 150 }}
          />
          <Button onPress={handleAdd} title="Add to the cart" />
        </VStack>
      </View>
    </Pressable>
  );
};

export default observer(ProductItem);
const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
});
