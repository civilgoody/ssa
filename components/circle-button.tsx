import { View, Pressable, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
  onPress: () => void;
};

export function CircleButton({ onPress }: Props) {
  return (
    <View className="items-center justify-center mx-[60px] w-[84px] h-[84px] p-[3px] border-4 border-[#ffd33d] rounded-[42px]">
      <Pressable
        className="bg-white w-full h-full rounded-[42px] justify-center items-center"
        onPress={onPress}
      >
        <MaterialIcons name="add" size={38} color="#25292e" />
      </Pressable>
    </View>
  );
}

// export function CircleButton({ onPress }: Props) {
//   return (
//     <View style={styles.circleButtonContainer}>
//       <Pressable style={styles.circleButton} onPress={onPress}>
//         <MaterialIcons name="add" size={38} color="#25292e" />
//       </Pressable>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   circleButtonContainer: {
//     width: 84,
//     height: 84,
//     marginHorizontal: 60,
//     borderWidth: 4,
//     borderColor: "#ffd33d",
//     borderRadius: 42,
//     padding: 3,
//   },
//   circleButton: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 42,
//     backgroundColor: "#fff",
//   },
// });
