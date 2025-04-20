import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles/styles";
import { router } from "expo-router";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <View style={styles.imagesContainer}>
        <Image 
          source={require("../assets/images/person.jpg")}
          style={styles.imageOne}
        />
        <Image 
          source={require("../assets/images/person2.jpeg")}
          style={styles.imageTwo}
        />
        <Image 
          source={require("../assets/images/person3.jpeg")}
          style={styles.imageThird}
        />
        <Image 
          source={require("../assets/images/person4.jpg")}
          style={styles.imageFour}
        />
        <Image 
          source={require("../assets/images/person5.jpg")}
          style={styles.imageFive}
        />
      </View>
      
      <View style={styles.content}>
        <View style={styles.welcomeText}>
          <Text style={styles.welcomeTextContent}>Welcome to <Text style={{color:"#4CAF50"}}>NGSHORTS</Text></Text>
        </View>
        <View style={styles.tagText}>
          <Text style={styles.tagTextContent}>Where Trends Are Shared and Hype Lives</Text>
        </View>
        <View style={styles.siteText}>
          <Text style={styles.siteTextContent}>Discover the latest in pop culture, lifestyle trends, and viral 
            moments-all in one place. Join the community thats always ahead of the curve.</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/(auth)")}>
          <Text style={styles.buttonContent}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
