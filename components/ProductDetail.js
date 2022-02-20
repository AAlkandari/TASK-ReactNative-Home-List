import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import shopStore from "../stores/shopStore";
import { Spinner } from "native-base";
import { observer } from "mobx-react";

const ProductDetail = ({ route, navigation }) => {
  if (shopStore.isLoading) return <Spinner />;
  const product = route.params.product;

  return (
    <View>
      <Image source={{ uri: product.image }} />
      <Text style={styles.text}>Price: {product.price}</Text>
      <Text style={styles.text}>Amount: {product.quantity}</Text>
    </View>
  );
};

export default observer(ProductDetail);

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});
