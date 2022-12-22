import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Divider} from 'react-native-elements'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";
import { ICONS } from '../../data/icons'
const Posts = ({post, index}) => {
  return (
    <View stlye={styles.container}>
      <Divider width={1} orientation='vertical'></Divider>
      <PostHeader post={post} key={index}/>
      <PostImage post={post}/>
      <View style={{marginHorizontal: 15}}>
          <PostFooter post={post}/>
          <Likes post={post}/>
          <Caption post={post}/>
          <CommentsSection post={post} />
      </View>
    </View>
  )
};

const PostHeader = ({post, index}) => {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 15, alignContent: 'center'}} key={index}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity>
                    <Image source={{ uri: post.profile_pictrue}} style={styles.story}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text  style={{color: 'white', marginLeft: 5, fontWeight: '700'}}>{post.user}</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                    <Ionicons name="ellipsis-horizontal-outline" size={20} color="white"></Ionicons>
                </TouchableOpacity>
            </View>
        </View>
        );
};


const PostImage = ({post}) => {
    return (
        <View style={{width: '100%',height: 450}}>
            <Image source={{uri: post.imageUrl}} style={{height: '100%', resizeMode: 'cover'}}/>
        </View>
    );
}


const PostFooter = ({post}) => {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
            <View style={{flexDirection: 'row', width: '40%'}}>
                <Icon iconName={ICONS.heartOutline}/>
                <Icon iconName={ICONS.commentOutline}/>
                <Icon iconName={ICONS.shareOutline}/>
            </View>
            <View>
                <Icon iconName={"ellipsis-horizontal-outline"}/>
            </View>
            <View style={{width: '40%', alignItems: 'flex-end'}}>
                <TouchableOpacity>
                    <Ionicons name={ICONS.saveOutline} size={28} color="white"></Ionicons>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const Icon = ({iconName}) => {
    return (
        <TouchableOpacity>
            <Ionicons style={{marginRight: 10}} name={iconName} size={28} color="white"></Ionicons>
        </TouchableOpacity>
        );
}


const Likes = ({post}) => {
    return (
        <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text style={{color: 'white', fontWeight: '600'}}>
                {post.likes.toLocaleString('en')} likes
            </Text>
        </View>
    )
}

const Caption = ({post}) => {
    return (
        <View style={{marginTop: 5}}>
            <Text>
                <Text style={{fontWeight: '600', color: 'white', marginRight: 10}}>{post.user}  </Text>
                <Text style={{color: 'white'}}>{post.caption}</Text>
            </Text>
        </View>
    )
}

const CommentsSection  = ({post}) => {
    return (
        <View style={{marginTop: 5, marginBottom: 15}}>
            {post.comments.length > 0 &&
            (
                <View>
                    <Text style={{color: 'gray'}}>
                        View{post.comments.length > 1 ? ' all ' : ''}{post.comments.length}&nbsp;
                        {post.comments.length > 1 ? 'comments' : 'comment'}
                    </Text>
                    <View style={{marginTop: 5, flexDirection: 'row'}}>
                        <Text style={{color: 'white', fontWeight: '600', marginRight: 5}}>{post.comments[0].user}</Text>
                        <Text style={{color: 'white'}}>
                            {
                                post.comments[0].comment.length > 20 ?
                                    post.comments[0].comment.slice(0, 21) + '...' :
                                    post.comments[0].comment
                            }
                        </Text>
                    </View>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
   container: {
    marginTop: 50
   },
   story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'orange'
  },
});

export default Posts
