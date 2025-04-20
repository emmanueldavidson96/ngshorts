import { View, Text, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles/Signup.styles'
import { COLORS } from '../constants/Colors'
import { router } from 'expo-router';

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState();
  // const {user, isLoading, register, token} = useAuthStore()
  
  const handleSignup = async () => {
    // const result = await register(email,username,password);
    // if(!result.success) Alert.alert("Error", result.error) 
    console.log(username, email, password)   
  }
  return (
    <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios" ? "padding": "height"}>
      <View style={styles.container}>
        <View style={styles.card}>
          {/* HEADER */}
          <View style={styles.header}>
            <Text style={styles.title}>Sign Up | NGSHORTS</Text>
            <Text style={styles.subtitle}>Share your favourite stories...</Text>
          </View>
          <View style={styles.formContainer}>
            {/* USERNAME INPUT */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Username</Text>
              <View style={styles.inputContainer}>
                {/* <Ionicons 
                  name="person-outline"
                  size={20}
                  color={COLORS.primary}
                  style={styles.inputIcon}
                /> */}
                <TextInput 
                  style={styles.input}
                  placeholder="John Doe"
                  placeholderTextColor={COLORS.placeholderText}
                  value={username}
                  onChangeText={setUsername}
                  autoCapitalize='none'
                />
              </View>
            </View>
            {/* EMAIL INPUT */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <View style={styles.inputContainer}>
                {/* <Ionicons 
                  name="person-outline"
                  size={20}
                  color={COLORS.primary}
                  style={styles.inputIcon}
                /> */}
                <TextInput 
                  style={styles.input}
                  placeholder="johndoe@gmail.com"
                  placeholderTextColor={COLORS.placeholderText}
                  value={email}
                  onChangeText={setEmail}
                  autoCapitalize='none'
                  keyboardType='email-address'
                />
              </View>
            </View>
            {/* PASSWORD INPUT */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputContainer}>
                {/* <Ionicons 
                  name="person-outline"
                  size={20}
                  color={COLORS.primary}
                  style={styles.inputIcon}
                /> */}
                <TextInput 
                  style={styles.input}
                  placeholder="********"
                  placeholderTextColor={COLORS.placeholderText}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                />
              </View>
            </View>

            {/* SIGNUP BUTTON */}
            <TouchableOpacity style={styles.button} onPress={handleSignup} disabled={isLoading}>
              {
                isLoading ? (
                  <ActivityIndicator color="#fff"/>
                ) : (
                  <Text style={styles.buttonText}>Sign Up</Text>
                )
              }
            </TouchableOpacity>

            {/* ALREADY OWN AN ACCOUNT */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>Already have an account?</Text>
              <TouchableOpacity onPress={() => router.back()}>
                <Text style={styles.link}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}