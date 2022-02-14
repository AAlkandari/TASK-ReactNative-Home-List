import { ImageBackground, StyleSheet, View, Text } from 'react-native'
import React from 'react'
import shopStore from '../stores/shopStore'
import { observer } from 'mobx-react';
import ShopItem from './ShopItem';
import { Container } from 'native-base';

const ShopList = ({navigation}) => {
  const image = { uri: "https://i.pinimg.com/originals/10/80/19/108019896a2e4cbade947bdab54f3629.jpg" };

    const shopList = shopStore.shops.map((shop) => 
    <ShopItem shop={shop} key={shop._id} navigation={navigation} />);
  
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <View style={styles.container}>
      <Container>{shopList}</Container>
    </View>
   </ImageBackground>
  )
}

export default observer(ShopList);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    flex: 1,
    alignContent: 'center',
  },
});