import { Modal, View, Text, Pressable } from "react-native";
import { PropsWithChildren } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

export default function EmojiPicker({ isVisible, children, onClose }: Props) {
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View className="absolute bottom-0 w-full h-1/4 bg-[#25292e] rounded-tl-[18px] rounded-tr-[18px]">
          <View className="h-[16%] bg-[#464C55] rounded-tl-[10px] rounded-tr-[10px] px-5 flex-row items-center justify-between">
            <Text className="text-white text-base">Choose a sticker</Text>
            <Pressable onPress={onClose}>
              <MaterialIcons name="close" color="#fff" size={22} />
            </Pressable>
          </View>
          {children}
        </View>
      </Modal>
    </View>
  );
}
