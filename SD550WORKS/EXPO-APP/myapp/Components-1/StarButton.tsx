import React from "react";
import { Pressable, View, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface starProps {
  value: number;
  selected: number;
  setSelected: (selected: number) => void;
}
export default function StarButton({
  value,
  selected,
  setSelected,
}: starProps) {
  const onPress = () => {
    setSelected(value);
  };

  const color = value <= selected ? "gold" : "grey";
  return (
    <View>
      <Pressable onPress={onPress}>
        <AntDesign name="star" size={40} color={color} />
      </Pressable>
    </View>
  );
}
