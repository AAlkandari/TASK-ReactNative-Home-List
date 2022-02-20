import React from "react";
import { observer } from "mobx-react";
import { ScrollView } from "react-native";
import { Box, VStack, Button } from "native-base";
import cartStore from "../stores/cartStore";
import CartItem from "./CartItem";
import authStore from "../stores/authStore";

const CartList = () => {
  const cartList = cartStore.items.map((item) => (
    <CartItem item={item} key={item.product._id} />
  ));

  const handleCheckout = () => {
    if (authStore.user) {
      cartStore.checkout();
    } else {
      alert("SignIn First !");
    }
  };

  return (
    <ScrollView>
      <Box space={4} alignItems="center">
        <VStack space={4} alignItems="center">
          {cartList}
        </VStack>
        <Button onPress={handleCheckout}>CheckOut</Button>
      </Box>
    </ScrollView>
  );
};

export default observer(CartList);
