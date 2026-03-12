import { Button } from "@/components/button";
import { ImageViewer } from "@/components/image-viewer";
import { ImageSourcePropType, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import IconButton from "@/components/icon-button";
import { CircleButton } from "@/components/circle-button";
import EmojiPicker from "@/components/emoji-picker";
import EmojiList from "@/components/emoji-list";
import EmojiSticker from "@/components/emoji-sticker";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [selectedImg, setSelectedImg] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [showModal, setShowModal] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState<
    ImageSourcePropType | undefined
  >(undefined);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImg(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("You did not select any image.");
    }
  };
  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setShowModal(true);
    // we will implement this later
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };
  return (
    <View className="flex-1 bg-[#25292e] items-center">
      <View className="flex-1 pt-7">
        <ImageViewer src={PlaceholderImage} selectedImg={selectedImg} />
        {pickedEmoji && (
          <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
        )}
      </View>
      {showAppOptions ? (
        <View className="absolute bottom-20">
          <View className="items-center flex-row">
            <IconButton onPress={onReset} label="Reset" icon="refresh" />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={{ flex: 1 / 3 }} className="items-center">
          <Button
            label="Choose a photo"
            theme="primary"
            onPress={pickImageAsync}
          />
          <Button
            label="Use this photo"
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}
      <EmojiPicker isVisible={showModal} onClose={() => setShowModal(false)}>
        <EmojiList
          onSelect={setPickedEmoji}
          onCloseModal={() => setShowModal(false)}
        />
      </EmojiPicker>
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
