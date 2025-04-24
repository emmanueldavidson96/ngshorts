import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../styles/Search.style'
import { COLORS } from '../constants/Colors'

const users = [
  {
    id:1,
    user_image:require("../../assets/images/person2.jpeg"),
    user_background_img:require("../../assets/images/person2.jpeg"),
    user_fullname:"Emmanuel Favour",
    user_tagname:"@emmanuelfavour",
    user_description:"Developer | Software Engineer | Dog Lover | "
  },
  {
    id:2,
    user_image:require("../../assets/images/person2.jpeg"),
    user_background_img:require("../../assets/images/person2.jpeg"),
    user_fullname:"Emmanuel Favour",
    user_tagname:"@emmanuelfavour",
    user_description:"Developer | Software Engineer | Dog Lover"
  },
  {
    id:3,
    user_image:require("../../assets/images/person2.jpeg"),
    user_background_img:require("../../assets/images/person2.jpeg"),
    user_fullname:"Emmanuel Favour",
    user_tagname:"@emmanuelfavour",
    user_description:"Developer | Software Engineer | Dog Lover"
  },
  {
    id:4,
    user_image:require("../../assets/images/person2.jpeg"),
    user_background_img:require("../../assets/images/person2.jpeg"),
    user_fullname:"Emmanuel Favour",
    user_tagname:"@emmanuelfavour",
    user_description:"Developer | Software Engineer | Dog Lover"
  },
  {
    id:5,
    user_image:require("../../assets/images/person2.jpeg"),
    user_background_img:require("../../assets/images/person2.jpeg"),
    user_fullname:"Emmanuel Favour",
    user_tagname:"@emmanuelfavour",
    user_description:"Developer | Software Engineer | Dog Lover"
  },
  {
    id:6,
    user_image:require("../../assets/images/person2.jpeg"),
    user_background_img:require("../../assets/images/person2.jpeg"),
    user_fullname:"Emmanuel Favour",
    user_tagname:"@emmanuelfavour",
    user_description:"Developer | Software Engineer | Dog Lover"
  },
]


export default function Search() {
  return (
    <View style={styles.container}>
      {/* Search bar Area */}
      <View style={styles.exploreTextContainer}>
        <Text style={styles.exploreText}>Explore</Text>
      </View>
      <View style={styles.barContainer}>
        <TextInput 
          style={styles.input}
          placeholder='Search here'
          placeholderTextColor={COLORS.black}
        />
      </View>

      {/* OutputTypes */}
      <View style={styles.headerOption}>
        <TouchableOpacity style={{borderBottomColor:COLORS.white, borderBottomWidth:2}}>
          <Text style={styles.textOptions}>People</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textOptions}>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textOptions}>Events</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textOptions}>Videos</Text>
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.feedContainer}
        contentContainerStyle={{paddingBottom:100}}
      >
        {
          users.map((user, index) => {
            return (
              <View style={styles.feed} key={index}>
                <Image 
                  source={user.user_image}
                  style={styles.usersImage}
                />
                <Text style={styles.userFullName}>{user.user_fullname}</Text>
                <Text style={styles.userTagName}>{user.user_tagname}</Text>
                <Text style={styles.userDescription}>{user.user_description}</Text>
              </View>
            )
          })
        }
      </ScrollView>
      {/* Recent Posts */}
      <View>
      </View>      
    </View>
  )
}