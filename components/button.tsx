import { Pressable, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
// if (theme === "primary") {
//   return (
//     <View
//       style={[
//         styles.buttonContainer,
//         { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 },
//       ]}
//     >
//       <Pressable
//         style={[styles.button, { backgroundColor: "#fff" }]}
//         onPress={() => alert("You pressed a button.")}
//       >
//         <FontAwesome
//           name="picture-o"
//           size={18}
//           color="#25292e"
//           style={styles.buttonIcon}
//         />
//         <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
//       </Pressable>
//     </View>
//   );
// }
export function Button({ label, theme }: { label: string; theme?: string }) {
  if (theme === "primary") {
    return (
      <View className="mx-5 w-80 h-16 justify-center p-[3px] items-center border-4 border-[#ffd33d] rounded-[18px]">
        <Pressable
          className="w-full h-full rounded-lg flex-row items-center justify-center bg-white"
          onPress={() => alert("Button pressed")}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={{ paddingRight: 8 }}
          />
          <Text className="text-[#25292e] text-base">{label}</Text>
        </Pressable>
      </View>
    );
  } else {
    return (
      <View className="flex-1 mx-5 w-80 h-16 justify-center p-3 items-center">
        <Pressable
          className="w-full h-full rounded-lg flex items-center justify-center"
          onPress={() => {
            alert("Button pressed");
          }}
        >
          <Text className="text-white">{label}</Text>
        </Pressable>
      </View>
    );
  }
}
