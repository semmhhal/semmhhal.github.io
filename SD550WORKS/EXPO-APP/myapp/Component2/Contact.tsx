import React from "react";
import { IContact } from "./contacts";
import { View, Text } from "react-native";

interface dataprops {
  data: IContact;
}
export default function Contact({ data }: dataprops) {
  return (
    <View>
      <Text>
        {data.name}-{data.phone}
      </Text>
    </View>
  );
}
