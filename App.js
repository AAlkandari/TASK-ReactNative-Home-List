import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigator from './components/Navigation/Navigator';

export default function App() {
  
  return (
  <SafeAreaProvider>
    <NativeBaseProvider>
      <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
       <Navigator/>
      </View>
      </NavigationContainer>
    </NativeBaseProvider>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "white",
    fontSize: 25,
    lineHeight: 80,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});
