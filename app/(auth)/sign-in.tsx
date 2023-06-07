import { Text, View } from "react-native";
import { useAuth } from "../../context/auth";

export default function SignIn() {
  console.log('this is sign in page')
  const { signIn } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>This is the sign in page of your app.</Text>
      <Text
        onPress={() =>
          signIn({
            email: "123",
          })
        }
      >
        Sign In in page
      </Text>
    </View>
  );
}
