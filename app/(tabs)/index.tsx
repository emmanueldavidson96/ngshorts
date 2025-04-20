import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { styles } from '../styles/Home.style'

export default function Home() {
  return (
    <View style={styles.container}>
      {/* Top Banner Section */}
      <View style={styles.bannerRegion}>
        <View>

        </View>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>NGShorts</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image 
            source={require("../../assets/images/person2.jpeg")}
            style={styles.profileContainer}
          />
        </View>
      </View>
      {/* Feed */}
      <ScrollView style={styles.feedContainer}>
        {/* first feed */}        
        <View style={styles.feed}>
          <View style={styles.usersPostProfileImage}>
            <Image 
              source={require("../../assets/images/person2.jpeg")}
              style={styles.profileContainer}
            />          
          </View>        
          <View style={styles.usersPostContentContainer}>
            <Text style={styles.userUsername}>Username (Oludare Emmanuel)</Text>
            <Text style={styles.userPostText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Ea quibusdam impedit fugiat tempora quis! Consequatur ipsa cupiditate, 
              quaerat alias dolorum provident laborum facere sapiente 
              officia assumenda nobis modi quos quam?</Text>
            <Image 
              source={require("../../assets/images/person4.jpg")}
              resizeMode='cover'
              style={styles.userPostImage}
            />
          </View>
        </View>
        {/* second feed */}
        <View style={styles.feed}>
          <View style={styles.usersPostProfileImage}>
            <Image 
              source={require("../../assets/images/person2.jpeg")}
              style={styles.profileContainer}
            />          
          </View>        
          <View style={styles.usersPostContentContainer}>
            <Text style={styles.userUsername}>Username (Oludare Emmanuel)</Text>
            <Text style={styles.userPostText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Ea quibusdam impedit fugiat tempora quis! Consequatur ipsa cupiditate, 
              quaerat alias dolorum provident laborum facere sapiente 
              officia assumenda nobis modi quos quam?</Text>
            <Image 
              source={require("../../assets/images/person4.jpg")}
              resizeMode='cover'
              style={styles.userPostImage}
            />
          </View>
        </View>
        {/* third feed */}

        <View style={styles.feed}>
          <View style={styles.usersPostProfileImage}>
            <Image 
              source={require("../../assets/images/person2.jpeg")}
              style={styles.profileContainer}
            />          
          </View>        
          <View style={styles.usersPostContentContainer}>
            <Text style={styles.userUsername}>Username (Oludare Emmanuel)</Text>
            <Text style={styles.userPostText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Ea quibusdam impedit fugiat tempora quis! Consequatur ipsa cupiditate, 
              quaerat alias dolorum provident laborum facere sapiente 
              officia assumenda nobis modi quos quam?</Text>
            <Image 
              source={require("../../assets/images/person4.jpg")}
              resizeMode='cover'
              style={styles.userPostImage}
            />
          </View>
        </View>   

      </ScrollView>
    </View>

  )
}