import { Image, StyleSheet, Text, View } from 'react-native'
import {Divider} from 'react-native-elements'
import React from 'react'
const Posts = ({post, index}) => {
  return (
    <View stlye={styles.conatiner}>      
      <Divider width={1} orientation='vertical'></Divider>
      <PostHeader post={post} key={index}/>
    </View>
  )
};

const PostHeader = ({post, index}) => {
  <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignContent: 'center'}} key={index}>
    <View>
      <Image source={{ uri: post.profile_pictrue}} style={styles.story}/>
      <Text style={{color: 'white'}}>{post.user.user}</Text>
    </View>
  </View>
};

const styles = StyleSheet.create({
   conatiner: {
    marginBottom: 30
   },
   story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'orange'
  },
});

export default Posts