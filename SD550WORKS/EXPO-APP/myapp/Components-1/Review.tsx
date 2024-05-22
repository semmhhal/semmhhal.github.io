import React from "react";
import { View, Text } from "react-native";
import { Reviews } from "../types/Icourses";

interface reviewProps {
  data: Reviews;
}
export default function Review({ data }: reviewProps) {
  return (
    <View>
      <Text>
        {data.name}-{data.comment}
      </Text>
    </View>
  );
}
