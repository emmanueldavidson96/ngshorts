import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../styles/Recommendations.style'

export default function Recommendations() {
  return (
    <View style={styles.container}>
      <View style={styles.exploreTextContainer}>
          <Text style={styles.exploreText}>Your Recommendations</Text>
      </View>
      
    </View>
  )
}