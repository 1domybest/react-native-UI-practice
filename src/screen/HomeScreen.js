import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Header from './home/Header'
import Stories from './home/Stories'
import Posts from './home/Posts'
import { POSTS } from '../data/posts'
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Header></Header>
        <ScrollView>
            <Stories></Stories>
            {POSTS.map((post, index) => (
                <Posts post={post} key={index}/>
            ))}
        </ScrollView>  
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