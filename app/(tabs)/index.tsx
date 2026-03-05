import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-3xl font-bold underline">Home screen</Text>
      <Link href="/about" className="text-blue-500 text-2xl">
        About
      </Link>
    </View>
  );
}
