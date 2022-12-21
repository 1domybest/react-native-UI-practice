import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import LoginScreen from './src/screen/LoginScreen'
import {Provider} from "react-redux";
import store from "./store";
export default function App() {
  return (
    <SafeAreaView>
      <Provider store={store}>
        <LoginScreen></LoginScreen>
      </Provider>
    </SafeAreaView>
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
