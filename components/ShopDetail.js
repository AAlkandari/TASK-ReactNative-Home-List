import {ImageBackground, StyleSheet, Image, Text, View} from "react-native" ;
import { observer } from "mobx-react";
import React from "react";
import shopStore from "../stores/shopStore";
import ProductList from "./ProductList";
import { Spinner } from "native-base";

const ShopDetail = ({route, navigation}) => {
  if (shopStore.isLoading ) return  <Spinner/>
  const image = { uri: "https://cdn.99images.com/photos/wallpapers/tv-shows/rick-and-mortyandroid-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-ipem1.png" };

  const shop = route.params.shop

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <View style={styles.container}>
      <Image source={{ uri:shop.image }} style={{ height: 150, width:150}}/>
      <ProductList products={shop.products} navigation={navigation} />
    </View>
    </ImageBackground>
  );
};
export default observer(ShopDetail);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});
