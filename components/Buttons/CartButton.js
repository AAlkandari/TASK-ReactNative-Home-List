import { StyleSheet, Alert } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { Badge } from "native-base";
import { observer } from "mobx-react";
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";

const CartButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (authStore.user) navigation.navigate("CartList");
    else {
      Alert.alert(
        "Signin",
        "You need to sign in before seeing the cart",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "Signin", onPress: () => navigation.navigate("Signin") },
        ],
        { cancelable: false }
      );
    }
  };
  return (
    <>
      <Badge
        bg="red.400"
        colorScheme="danger"
        rounded="999px"
        mb={-2}
        zIndex={1}
        variant="solid"
        alignSelf="flex-end"
        _text={{
          fontSize: 12,
        }}
      >
        {cartStore.totalQuantity}
      </Badge>
      <Icon
        size={30}
        style={styles.cartButton}
        onPress={handlePress}
        name="cart"
      />
    </>
  );
};

export default observer(CartButton);

const styles = StyleSheet.create({
  cartButton: {
    color: "black",
    marginRight: 20,
  },
});
