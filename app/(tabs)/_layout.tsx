import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../constants/Colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function TabLayout() {
    const insets = useSafeAreaInsets();
    return (
        <Tabs 
            screenOptions={{
                headerShown:false,
                tabBarActiveTintColor:COLORS.primary,
                headerTitleStyle:{
                    color:COLORS.textPrimary,
                    fontWeight:"600",
                },
                headerShadowVisible:false,
                tabBarStyle:{
                    backgroundColor:COLORS.background,
                    borderTopWidth:1,
                    borderTopColor:COLORS.border,
                    paddingTop:10,
                    paddingBottom:insets.bottom,
                    height:80 + insets.bottom,
                }
            }}
        >
            <Tabs.Screen name="index"
                options={{
                    title:"Home",
                    tabBarIcon:({color, size}) => (<Ionicons name="home-outline" size={size} color={color}/>)
                }}
            />
            <Tabs.Screen name="recommendations"
                options={{
                    title:"Recommendations",
                    tabBarIcon:({color, size}) => (<Ionicons name="heart-circle" size={size} color={color}/>)
                }}
            />
            <Tabs.Screen name="create"
                options={{
                    title:"Create",
                    tabBarIcon:({color, size}) => (<Ionicons name="add-circle-outline" size={size} color={color}/>)            
                }}
            />
            <Tabs.Screen name="search"
                options={{
                    title:"Search",
                    tabBarIcon:({color, size}) => (<Ionicons name="search" size={size} color={color}/>)
                }}
            />
            <Tabs.Screen name="profile"
                options={{
                    title:"Profile",
                    tabBarIcon:({color, size}) => (<Ionicons name="person-outline" size={size} color={color}/>)
                }}
            />
        </Tabs>
    )
}