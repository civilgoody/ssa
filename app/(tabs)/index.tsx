import { Button } from "@/components/button";
import { ImageViewer } from "@/components/image-viewer";
import { View } from "react-native";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  return (
    <View className="flex-1 bg-[#25292e] items-center">
      <View className="flex-1 pt-7">
        <ImageViewer src={PlaceholderImage} />
      </View>
      <View style={{ flex: 1 / 3 }} className="items-center">
        <Button label="Choose a photo" theme="primary" />
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
