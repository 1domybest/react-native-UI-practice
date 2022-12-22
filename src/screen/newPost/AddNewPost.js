import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import { ICONS } from '../../data/icons'
import Ionicons from "react-native-vector-icons/Ionicons";
import {Divider} from "react-native-elements";
import FormikPostUploader from "./FormikPostUploader";
const AddNewPost = ({navigation}) => {
  return (
      <View style={styles.container}>
          <Header navigation={navigation}/>
          <FormikPostUploader/>
      </View>
  )
}


const Header = ({navigation}) => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name={ICONS.chevronLeft} size={30} color={'white'}/>
            </TouchableOpacity>
            <Text style={styles.headerText}>AddNewPost</Text>
            <Text/>
        </View>
    )
}
export default AddNewPost

const styles = StyleSheet.create({
   container: {
       marginHorizontal: 10,
   },
   headerContainer: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
   },
   headerText: {
       color: 'white',
       fontWeight: '700',
       fontSize: 20,
       marginRight: 25
   },
});
