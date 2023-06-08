import { Text, View, Platform } from "react-native";
import { SplashScreen, Stack } from "expo-router";
import { useFonts, Inter_500Medium } from "@expo-google-fonts/inter";
import { lightColors, createTheme, ThemeProvider } from "@rneui/themed";
// import AuthProvider from "../containers/provider/AuthProvider";

import React from "react";
export default function Layout() {
  const [fontsLoaded] = useFonts({
    Inter_500Medium,
  });
  const theme = createTheme({
    lightColors: {
      ...Platform.select({
        default: lightColors.platform.android,
        ios: lightColors.platform.ios,
      }),
    },
  });
  if (!fontsLoaded) return <SplashScreen />;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Stack>
          <Stack.Screen
            name="index" // This is the name of the page and must match the url from root
            options={{
              headerTitle: "overview",
            }}
          />
          <Stack.Screen
            name="settings" // This is the name of the page and must match the url from root
            options={{
              headerTitle: "settings",
            }}
          />
          <Stack.Screen
            name="history" // This is the name of the page and must match the url from root
            options={{
              headerTitle: "history",
            }}
          />
          <Stack.Screen
            name="calculator" // This is the name of the page and must match the url from root
            options={{
              headerTitle: "calculator",
            }}
          />
        </Stack>
      </ThemeProvider>
    </>
  );
}
