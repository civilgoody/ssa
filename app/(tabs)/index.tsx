import { ImageViewer } from "@/components/image-viewer";
import { Link } from "expo-router";
import { Text, View } from "react-native";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <View className="flex-1">
        <ImageViewer src={PlaceholderImage} />
      </View>
    </View>
  );
}
