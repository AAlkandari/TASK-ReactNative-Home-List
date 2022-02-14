import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, NativeBaseProvider } from 'native-base'

const Home = ({navigation}) => {

  const image = { uri: "https://r1.ilikewallpaper.net/iphone-12-pro-max-wallpapers/download-109168/Rick-And-Morty-Hd-In-Resolution.jpg" };

  return (
  <NativeBaseProvider>
     <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <View style={styles.container}>
    <Text style={styles.text}>Home</Text>
      <Button onPress={() => alert("Boom, Yo! xD")}>Press Me :D</Button>
      <Button onPress={() => navigation.navigate("Shops")}>To The Shops !</Button>
    </View>
    </ImageBackground>
    </NativeBaseProvider>
  )
}

export default Home
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
    marginTop:20,
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});