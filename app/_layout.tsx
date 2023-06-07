import { Text, View } from "react-native";
import { SplashScreen, Slot, Stack } from "expo-router";
import { useFonts, Inter_500Medium } from "@expo-google-fonts/inter";
// import { Drawer } from "./drawer";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Drawer } from "expo-router/drawer";
import React from "react";
import Provider from "../containers/provider/AuthProvider";
export default function Layout() {
  const [fontsLoaded] = useFonts({
    Inter_500Medium,
  });

  if (!fontsLoaded) return <SplashScreen />;

  return (
    <>
      <Provider>
        <Stack />
      </Provider>
    </>
  );
}
