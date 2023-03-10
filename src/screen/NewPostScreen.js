import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import AddNewPost from "./newPost/AddNewPost";

const NewPostScreen = ({navigation}) => {
  return (
      <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
          <AddNewPost navigation={navigation}/>
      </SafeAreaView>
  )
}

export default NewPostScreen

const styles = StyleSheet.create({})
