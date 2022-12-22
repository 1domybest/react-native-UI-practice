import { StyleSheet, Text, View,SafeAreaView, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React from 'react'
import Header from './home/Header'
import Stories from './home/Stories'
import Posts from './home/Posts'
import { POSTS } from '../data/posts'
import BottomTabs from "./home/BottomTabs";
const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView edge={['top']} style={styles.container}>
        <Header navigation={navigation}/>
        <ScrollView>
            <Stories></Stories>
            {POSTS.map((post, index) => (
                <Posts post={post} key={index}/>
            ))}
        </ScrollView>
        <BottomTabs/>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
      },
});
