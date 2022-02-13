import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, NativeBaseProvider } from 'native-base'

const Home = () => {
  return (
  <NativeBaseProvider>
    <View>
      <Text>Home</Text>
      <Button onPress={() => alert("Yo!")}>Press Me :D</Button>
    </View>
    </NativeBaseProvider>
  )
}

export default Home
const styles = StyleSheet.create({})