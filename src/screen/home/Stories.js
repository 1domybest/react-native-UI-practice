import { ScrollView, StyleSheet,Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users'
const Stories = () => {
  return (
    <View style={{marginBottom: 13, marginTop: 10}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
            <TouchableOpacity style={styles.storyBox} key={index}>
                <Image source={{uri: story.image}} style={styles.story}/>
                <View>
                    <Text style={styles.nickName}>
                        {
                            story.user.length > 11 ?
                            story.user.slice(0, 11).toLowerCase() + '...':
                            story.user.toLowerCase()
                        }
                    </Text>
                </View>
            </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default Stories

const styles = StyleSheet.create({
    storyBox: {
        marginLeft: 10, 
        alignItems: 'center',
    },
    story: {
        width: 65,
        height: 65,
        borderRadius: 50,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: 'orange'
    },
    nickName: {
        color: 'white',
        fontSize: 13
    }
})