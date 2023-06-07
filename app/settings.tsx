import { View, Text } from "react-native";

export default function Settings() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 64,
          fontWeight: "bold",
        }}
      >
        Settings
      </Text>
      <Text
        style={{
          fontSize: 36,
          color: "#38434D",
        }}
      >
        This is the settings page of your app.
      </Text>
    </View>
  );
}