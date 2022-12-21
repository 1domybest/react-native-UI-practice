import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome'
import EvilIcons from '@expo/vector-icons/EvilIcons'

const Header = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <Image 
                style={styles.logo} 
                source={require('../../../assets/header-logo.png')}/>
        </TouchableOpacity>
        <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.icon}>
                <Ionicons name="add-circle-outline" size={28} color="white"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
                <View style={styles.unRedCircle}>
                    <Text>    </Text>
                </View>
                <Ionicons name="heart-outline" size={28} color="white"/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
                <View style={styles.unredBadge}>
                    <Text style={styles.unredBadgeText}>11</Text>
                </View>
                <Ionicons name="paper-plane-outline" size={28} color="white"/>
            </TouchableOpacity>
        </View>
    </View>
  ) 
}

export default Header

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 15,
    },
    logo: {
        width: 165,
        height: 50,
        color:'white',
    },
    icon: {
        marginLeft: 15,
    },
    unredBadge: {
        position: 'absolute',
        backgroundColor: 'red',
        left: 10,
        bottom: 18,
        borderRadius: 10,
        width: 25,
        height: 18,
        alignItems:'center',
        zIndex: 100
    },
    unredBadgeText: {
        color: 'white',
        fontWeight: '600'
    },
    unRedCircle: {
      position: 'absolute',
      backgroundColor: 'red',
      borderRadius: 20,
      width: 10,
      height: 10,
      left: 18,
      bottom: 20,
      zIndex: 100
    },
    iconContainer: {
        flexDirection: 'row'
    },
});