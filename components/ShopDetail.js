import {StyleSheet, Image, Text, View} from "react-native" ;
import { observer } from "mobx-react";
import React from "react";
import shopStore from "../stores/shopStore";
import ProductList from "./ProductList";
import { Spinner } from "native-base";

const ShopDetail = () => {
  if (shopStore.isLoading ) return  <Spinner/>
  const shop = shopStore.shops[2];

  return (
    <View>
      <Text>{shop.name}</Text>
      <Image source={{ uri:shop.image }} style={{ height: 150, width:150}}/>
      <ProductList products={shop.products} />
    </View>
  );
};
export default observer(ShopDetail);
const styles = StyleSheet.create({})
