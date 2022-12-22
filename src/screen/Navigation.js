import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "./HomeScreen";
import NewPostScreen from "./NewPostScreen";

const Stack = createStackNavigator();

const screenOption = {
    headerShown: false
}

const SignedInStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"HomeScreen"} screenOptions={screenOption}>
                <Stack.Screen name={"HomeScreen"} component={HomeScreen}/>
                <Stack.Screen name={"NewPostScreen"} component={NewPostScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
        )
}

export default SignedInStack

const styles = StyleSheet.create({})
