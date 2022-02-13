import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import ShopDetail from './components/ShopDetail';
import ShopItem from './components/ShopItem';
import ShopList from './components/ShopList';

export default function App() {
  
  return (
  <NativeBaseProvider>
    <View style={styles.container}>
      <Text>Welcome To My App</Text>
      <StatusBar style="auto" />
      <ShopDetail />
    </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
