import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
      <View className="flex-1 justify-center items-center">
        <Text className="text-3xl font-bold underline">Not Found</Text>
        <Link href="/" className="text-blue-500 text-2xl">
          Go to home screen
        </Link>
      </View>
    </>
  );
}
