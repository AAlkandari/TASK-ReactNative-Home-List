import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import ShopList from "../ShopList";
import ShopDetail from "../ShopDetail";
import ProductDetail from "../ProductDetail";
import CartList from "../CartList";
import CartButton from "../Buttons/CartButton";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";

const Navigator = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="Shops"
        component={ShopList}
        options={{ title: "Choose a shop" }}
        options={{ headerRight: () => <CartButton /> }}
      />
      <Screen
        name="ShopDetails"
        component={ShopDetail}
        options={({ route }) => ({
          title: route.params.shop.name,
          headerRight: () => <CartButton />,
        })}
      />
      <Screen
        name="ProductDetail"
        component={ProductDetail}
        options={({ route }) => ({ title: route.params.product.name })}
      />
      <Screen name="CartList" component={CartList} />
      <Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />
      <Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default Navigator;
