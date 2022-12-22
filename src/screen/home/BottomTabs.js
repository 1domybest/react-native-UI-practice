import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {useState} from 'react'
import {Divider} from "react-native-elements";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BOTTOM_ICONS } from '../../data/icons'
const BottomTabs = () => {
    const [activeTab, setActiveTab] = useState('Home');
    const Icon = ({iconName, name}) => (
        <TouchableOpacity onPress={() => setActiveTab(name)}>
            <Ionicons style={{marginRight: 10}} name={iconName} size={30} color="white"></Ionicons>
        </TouchableOpacity>
    )
  return (
      <View style={styles.wrapper}>
          <Divider width={1} orientation={"vertical"}></Divider>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', padding: 15, alignItems: 'center'}}>
              {BOTTOM_ICONS.map((icon, index) => (
                  <Icon iconName={activeTab === icon.name ? icon.activeIcon : icon.inActiveIcon} name={icon.name} key={index}/>
              ))}
              <TouchableOpacity onPress={() => setActiveTab('Profile')}>
                  <Image source={{uri: 'https://editsay.s3.ap-northeast-2.amazonaws.com/images/%EB%8C%80%EC%A7%80+1_1-100.jpg'}}
                         style={[
                             styles.profileIcon,
                             styles.profilePic(activeTab)
                             // activeTab === 'profile' ? styles.profilePic(activeTab) : null
                         ]}/>
              </TouchableOpacity>
          </View>
      </View>
  )
}

export default BottomTabs

const styles = StyleSheet.create({
    profileIcon: {
        width: 32,
        height: 32,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'orange'
    },
    profilePic: (activeTab = '') => ({
        width: 30,
        height: 30,
        borderRadius: 50,
        borderWidth: activeTab === 'Profile' ? 2 : 0,
        borderColor:  activeTab === 'Profile' ? 'red' : ''
    }),
    wrapper: {
        // position: 'absolute',
        // bottom: '3%',
        width: '100%',
        zIndex: 999,
        backgroundColor: 'black'
    },
});
