import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, Alert } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles/Create.style'
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/Colors';
import * as ImagePicker from "expo-image-picker"

export default function Create() {
  const [image, setImage] = useState();
  const [imageBase64, setImageBase64] = useState(null);
  
  const pickImage = async () => {
    try{
      // request permission if needed
      if(Platform.OS !== "web"){
        const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(status !== "granted"){
          Alert.alert("Permission Denied", "We need camera roll permissions to upload an image")
          return;
        }
      }
      //lauch image library
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes:"images",
        allowsEditing:true,
        aspect:[4,3],
        quality:0.5,// lower quality for smaller base64
        base64:true,
      })
      if(!result.canceled){
        setImage(result.assets[0].uri)
        //if base64 is provided, use it
        if(result.assets[0].base64){
          setImageBase64(result.assets[0].base64);
        }else{
          // otherwise, convert to base64
          const base64 = await FileSystem.readAsStringAsync(result.assets[0].uri, {
            encoding: FileSystem.EncodingType.Base64,
          })
          setImageBase64(base64);
        }
      }
    }
    catch(err){
      console.log(err)
      Alert.alert("Error", "There was a problem selecting your image")
    }
  }
  return (
    <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios" ? "padding": "height"}>
      <View style={styles.container}>
        {/* Search bar Area */}
        <View style={styles.exploreTextContainer}>
          <Text style={styles.exploreText}>Create A Post</Text>
          <Text style={styles.tagText}>Make a post and reach thousands...</Text>
        </View>
      
        <View style={styles.createpostContainer}>
          <View style={styles.formGroup}>
              <Text style={styles.label}>Post Image</Text>
              
              <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
                {
                  image ? (
                    <Image 
                      style={styles.previewImage}
                      source={{uri:image}} 
                    />
                  ) : (
                    <View style={styles.placeholderContainer}>
                      <Ionicons 
                        name="image-outline"
                        size={40}
                        color={COLORS.textSecondary}                        
                      />
                      <Text style={styles.placeholderText}>Tap to select image</Text>
                    </View>
                  )
                }                
              </TouchableOpacity>
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Post </Text>            
              <TextInput 
                style={styles.inputMainContent}
                placeholder='Enter post title...'
                placeholderTextColor={"grey"}
                multiline
                numberOfLines={6}
              />
            </View> 

            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>       
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}