import {Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import React, {isValidElement, useState} from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import {Divider} from "react-native-elements";
import isSelectionValid from "react-native-web/dist/modules/isSelectionValid";

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    cation: Yup.string().max(2200, 'Caption has reached the character limited')
})


const FormikPostUploader = () => {
    const [thumbnailUrl, setThumbnailUrl] = useState('https://video-cookie-sample.s3.ap-northeast-2.amazonaws.com/%EA%B8%B0%ED%9A%8D%EC%A0%84+%EC%82%AC%EC%A7%84/default2-img.jpg');
  return (
    <Formik
        initialValues={{caption: '', imageUrl: ''}}
        onSubmit={(value) => console.log(value)}
        validationSchema={uploadPostSchema}
        validateOnMount={true}
    >
        {({handleBlur, handleChange, handleSubmit, values, errors}) =>
            <>
                <View style={{margin: 20, justifyContent: 'space-between', flexDirection: 'row'}}>
                    <TouchableOpacity>
                        <Image source={{uri: thumbnailUrl ? thumbnailUrl : 'https://video-cookie-sample.s3.ap-northeast-2.amazonaws.com/%EA%B8%B0%ED%9A%8D%EC%A0%84+%EC%82%AC%EC%A7%84/default2-img.jpg'}} style={{width: 100, height: 100}}/>
                    </TouchableOpacity>
                    <View style={{flex: 1, marginLeft: 12}}>
                        <TextInput
                            style={{color: 'white', fontSize: 20}}
                            placeholder={"write a cation..."}
                            placeholderTextColor={'gray'}
                            multiline={true}
                            onChangeText={handleChange('caption')}
                            onBlur={handleBlur('caption')}
                            value={values.caption}
                        />
                    </View>
                </View>
                <Divider width={2.0} orientation={'vertical'}/>
                <View>
                    <TextInput
                        onChange={e => setThumbnailUrl(e.nativeEvent.text)}
                        style={{color: 'white', fontSize: 18}}
                        placeholder={"Enter Image Url"}
                        placeholderTextColor={'gray'}
                        onChangeText={handleChange('imageUrl')}
                        onBlur={handleBlur('imageUrl')}
                        value={values.imageUrl}
                    />
                    {errors.imageUrl && (
                        <Text style={{ fontSize: 10, color: 'red'}}>
                            {errors.imageUrl}
                        </Text>
                    )}
                </View>
                <Button title={"Share"} onPress={handleSubmit}/>
            </>
        }
    </Formik>
  )
}

export default FormikPostUploader

const styles = StyleSheet.create({})
