import { Button } from "@/components/button";
import { ImageViewer } from "@/components/image-viewer";
import { View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [selectedImg, setSelectedImg] = useState<string | undefined>(undefined);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImg(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };
  return (
    <View className="flex-1 bg-[#25292e] items-center">
      <View className="flex-1 pt-7">
        <ImageViewer src={PlaceholderImage} selectedImg={selectedImg} />
      </View>
      <View style={{ flex: 1 / 3 }} className="items-center">
        <Button
          label="Choose a photo"
          theme="primary"
          onPress={pickImageAsync}
        />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

// export default function Index() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.imageContainer}>
//         <ImageViewer src={PlaceholderImage} />
//       </View>
//       <View style={styles.footerContainer}>
//         <Button label="Choose a photo" />
//         <Button label="Use this photo" />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#25292e",
//     alignItems: "center",
//   },
//   imageContainer: {
//     flex: 1,
//     paddingTop: 28,
//   },
//   footerContainer: {
//     flex: 1 / 3,
//     alignItems: "center",
//   },
// });
