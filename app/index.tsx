import { Text, View } from "react-native";
import { cn } from "../utils";

export default function Page() {
  return (
    <View className={cn("flex-1 item-center p-20")}>
      <View className={cn("flex-1 justify-center max-w-[960] mx-auto")}>
        <Text className={cn("text-[64px] font-bold")}>Hello World</Text>
        <Text className={cn("text-[36px] text-[#38434D]")}>
          This is the first page of your app.123123
        </Text>
      </View>
    </View>
  );
}
