
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../Home'
import ShopList from '../ShopList'
import ShopDetail from '../ShopDetail'
import ProductDetail from '../ProductDetail'


const Navigator = () => {

const { Navigator, Screen } = createStackNavigator();

return (
<Navigator initialRouteName='Home'>
    <Screen name="Home" component={Home} options={{ headerShown: false }} />
    <Screen name="Shops" component={ShopList} options={{ title: "Choose a shop" }}/>
    <Screen name="ShopDetails" component={ShopDetail} options={({route}) => ({title: route.params.shop.name})}/>
    <Screen name="ProductDetail" component={ProductDetail} options={({route}) => ({title: route.params.product.name})}/>
</Navigator>
)
}

export default Navigator