import { router, Stack, useSegments } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SafeScreen from "./components/SafeScreen";
import {StatusBar} from "expo-status-bar";
import { useEffect } from "react";


export default function RootLayout() {
  const segments = useSegments();
  // const user = {
  //   name:"Emmanuel"
  // }
  const user = null
  useEffect(() => {
    const authScreens = segments[0] === "(auth)";
    if(user && segments[0] !== "(tabs)") {
      router.replace("/(tabs)")
    } else if(!user && !authScreens) {
      router.replace("/")
    }
  }, [segments, user])
  
  return (
    <SafeAreaProvider>
      <SafeScreen>
        <Stack screenOptions={{headerShown:false}}>
          <Stack.Screen name="(auth)"/>
          <Stack.Screen name="(tabs)"/>
        </Stack>
      </SafeScreen>
      <StatusBar style="dark"/>
    </SafeAreaProvider>
  );
}
