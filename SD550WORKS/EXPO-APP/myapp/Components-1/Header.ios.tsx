import React from "react";
import { Text, View, Image, StyleSheet, Platform } from "react-native";

import HeaderStyle from "../styles/HeaderStyle";

function Header() {
  return (
    <View
      style={
        (Platform.OS === "ios" ? HeaderStyle.ios : HeaderStyle.android,
        { justifyContent: "center", alignItems: "center" })
      }
    >
      <Image style={styles.image} source={require("../images/course.png")} />
      <Text style={styles.text}> Course List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 23,
    padding: 20,
  },
});
export default Header;
