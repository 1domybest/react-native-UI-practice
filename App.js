import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import LoginScreen from './src/screen/LoginScreen'
import {Provider} from "react-redux";
import store from "./store";
import HomeScreen from './src/screen/HomeScreen';
import NewPostScreen from "./src/screen/NewPostScreen";
import SignedInStack from "./src/screen/Navigation";
export default function App() {
  return (
    <Provider store={store}>
        <SignedInStack/>
    </Provider>
  );
}

const styles = StyleSheet.create({
});
