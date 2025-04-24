import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../styles/Home.style'
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'

const comments= [
  {
    id:1,
    user_img:"../../assets/images/person2.jpeg",
    username:"Username (Oludare Emmanuel)",
    user_post:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quibusdam impedit fugiat tempora quis! Consequatur ipsa cupiditate, quaerat alias dolorum provident laborum facere sapiente officia assumenda nobis modi quos quam?",
    user_post_image:"./../assets/images/person4.jpg",
    comment_count:20,
    likes:"You & 300"
  },
  {
    id:2,
    user_img:"../../assets/images/person2.jpeg",
    username:"Username (Oludare Emmanuel)",
    user_post:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quibusdam impedit fugiat tempora quis! Consequatur ipsa cupiditate, quaerat alias dolorum provident laborum facere sapiente officia assumenda nobis modi quos quam?",
    user_post_image:"./../assets/images/person4.jpg",
    comment_count:20,
    likes:"You & 300"
  },
  {
    id:3,
    user_img:"../../assets/images/person2.jpeg",
    username:"Username (Oludare Emmanuel)",
    user_post:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quibusdam impedit fugiat tempora quis! Consequatur ipsa cupiditate, quaerat alias dolorum provident laborum facere sapiente officia assumenda nobis modi quos quam?",
    user_post_image:"./../assets/images/person4.jpg",
    comment_count:20,
    likes:"You & 300"
  },
  {
    id:4,
    user_img:"../../assets/images/person2.jpeg",
    username:"Username (Oludare Emmanuel)",
    user_post:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quibusdam impedit fugiat tempora quis! Consequatur ipsa cupiditate, quaerat alias dolorum provident laborum facere sapiente officia assumenda nobis modi quos quam?",
    user_post_image:"./../assets/images/person4.jpg",
    comment_count:20,
    likes:"You & 300"
  }
]
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
      <ScrollView 
        style={styles.feedContainer}
        contentContainerStyle={{paddingBottom:100}}
      >
        {/* first feed */}      
        {
          comments.map((comment, index) => {
            return (
              <View style={styles.feed} key={index}>
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
                  <View style={styles.commentContainer}>            
                    {/* Comment Click */}
                    <TouchableOpacity style={styles.commentClick}>
                      <MaterialIcons
                        name="message"
                        size={20}
                        color={"white"}
                      />
                      <Text style={{color:"white", fontSize:12}}>20 comments</Text>
                    </TouchableOpacity>
                    {/* Like Click */}
                    <TouchableOpacity style={styles.likeClick}>
                      <Text style={{color:"white", fontSize:12}}>You & 300 others</Text>
                      <FontAwesome 
                        name="heart" 
                        size={20} 
                        color="red" 
                      />              
                    </TouchableOpacity>
                  </View>
                </View>
                {/* Comment Container */}          
              </View>
            )})
        }          

      </ScrollView>
    </View>

  )
}