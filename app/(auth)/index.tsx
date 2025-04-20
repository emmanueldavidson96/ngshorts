import { View, Text, KeyboardAvoidingView, Platform, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles/Login.styles'
import { Link } from 'expo-router'
import { COLORS } from '../constants/Colors'

export default function Signin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    console.log("clicked")
  }
  return (
    <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === "ios" ? "padding": "height"}>
      <View style={styles.container}>
        {/* ILLUSTRATION */}
        <View style={styles.topIllustration}>
          <Image 
            source={require("../../assets/images/androgynous-avatar-non-binary-queer-person-removebg-preview.png")}
            resizeMode='contain'
            style={styles.illustrationImage}
          />
        </View>
        <View style={styles.card}>
          <View style={styles.formContainer}>
            {/* Email */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <View style={styles.inputContainer}>
                <TextInput 
                  style={styles.input}
                  placeholder='Enter your email'
                  placeholderTextColor={COLORS.placeholderText}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize='none'
                />
              </View>
            </View>
            {/* Password */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputContainer}>
                <TextInput 
                  style={styles.input}
                  placeholder='Enter your password'
                  placeholderTextColor={COLORS.placeholderText}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}                  
                />
              </View>
            </View>
            {/* Button */}
            <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={isLoading}>
              {
                isLoading ? (
                  <ActivityIndicator color={"#fff"}/>
                ) : (
                  <Text style={styles.buttonText}>Login</Text>
                )
              }
            </TouchableOpacity>    
            {/* DONT OWN AN ACCOUNT       */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>Don't have an account?</Text>
              <Link href="/Signup" asChild>
                <TouchableOpacity>
                  <Text style={styles.link}>Sign Up</Text>
                </TouchableOpacity>
              </Link>
            </View>

          </View>

        </View>
        
      </View>
    </KeyboardAvoidingView>

  )
}