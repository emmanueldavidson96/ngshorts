import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../styles/Profile'

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.exploreTextContainer}>
          <Text style={styles.exploreText}>My Profile</Text>
      </View>
    </View>
  )
}