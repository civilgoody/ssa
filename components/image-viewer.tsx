import { Image } from "expo-image";
import { ImageSourcePropType } from "react-native";

export function ImageViewer({
  src,
  selectedImg,
}: {
  src: ImageSourcePropType;
  selectedImg?: string;
}) {
  const imgSrc = selectedImg ? selectedImg : src;
  return (
    <Image
      source={imgSrc}
      style={{ width: 320, height: 440 }}
      className="rounded-[18px]"
    />
  );
}
