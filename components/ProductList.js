import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import ProductItem from './ProductItem';
import { observer } from 'mobx-react';
import { Container } from 'native-base';

const ProductList = ({ products }) => {

const productList = products.map((product) => 
      <ProductItem product={product} key={product._id} />);

  return (
    
    <View >
      <Text style={styles.text}>ProductList</Text>
      <Container>{productList}</Container>
    </View>
   
  )
}

export default observer(ProductList);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    flex: 1,
    alignContent: 'center',
  },
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  }
});

