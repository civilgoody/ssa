import { Image } from "expo-image";

export function ImageViewer({ src }: { src: string }) {
  return (
    <Image
      source={src}
      style={{ width: 320, height: 440 }}
      className="rounded-2xl"
    />
  );
}
