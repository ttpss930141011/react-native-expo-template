import { useState } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { Stack, useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useAuth } from "../context/auth";
const Home = () => {
  const { user, signOut } = useAuth();
  const router = useRouter();
  console.log("this is home page", user)
  return (
    <SafeAreaView className="flex-1 bg-[#FAFAFC]">
      {/*點擊打開側邊欄 drawer */}
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#FAFAFC" },
          headerShadowVisible: false,
          headerLeft: () => <Ionicons name="list" size={32} />,

          //   headerRight: () => (
          //     <Ionicons name="md-checkmark-circle" size={32} color="green" />
          //   ),
          headerTitle: "",
        }}
      />
      {!user.email ? (
        <>
          <Text>Not logged in</Text>
          <Text onPress={() => router.replace("/sign-in")}>Sign In</Text>
        </>
      ) : (
        <View className="flex-1 justify-center items-center">
          <Text onPress={() => signOut()}>Sign Out</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;
