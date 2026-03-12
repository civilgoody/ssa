import { useState } from "react";
import {
  ImageSourcePropType,
  StyleSheet,
  FlatList,
  Platform,
  Pressable,
} from "react-native";
import { Image } from "expo-image";

type Props = {
  onSelect: (image: ImageSourcePropType) => void;
  onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {
  const [emoji] = useState<ImageSourcePropType[]>([
    require("../assets/images/emoji1.png"),
    require("../assets/images/emoji2.png"),
    require("../assets/images/emoji3.png"),
    require("../assets/images/emoji4.png"),
    require("../assets/images/emoji5.png"),
    require("../assets/images/emoji6.png"),
  ]);

  return (
    <FlatList
      horizontal
      contentContainerClassName="px-5 flex-row items-center justify-between rounded-tl-[10px] rounded-tr-[10px]"
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      data={emoji}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
        >
          <Image
            source={item}
            key={index}
            // className="w-24 h-24 mr-5"
            style={{ width: 100, height: 100, marginRight: 20 }}
          />
        </Pressable>
      )}
    />
  );
}
