import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import shopStore from '../stores/shopStore'
import { observer } from 'mobx-react';
import ShopItem from './ShopItem';

const ShopList = () => {
    const shopList = shopStore.shops.map((shop) => 
    <ShopItem shop={shop} key={shop._id} />);
  
  return (
    <View>
      <Text>ShopList</Text>
      {shopList}
    </View>
  )
}

export default observer(ShopList);
const styles = StyleSheet.create({})