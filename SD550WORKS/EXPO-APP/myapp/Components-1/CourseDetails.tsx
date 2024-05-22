import React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import Stars from "./Stars";
import ReviewList from "./ReviewList";
export default function CourseDetails({ navigation, route }: any) {
  const data = route.params;

  const gotoAddReview = () => {
    navigation.navigate("Add Review", data);
  };
  return (
    <View>
      <Text style={styles.name}>{data.title}</Text>
      <Text style={styles.info}>{data.faculty}</Text>
      <Text style={styles.info}>{data.code}</Text>
      <ReviewList data={data} />
      <Stars rating={data.rating} />

      <Pressable style={styles.button} onPress={gotoAddReview}>
        <Text style={styles.buttonText}>Add Review</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  name: {
    fontSize: 24,
    marginTop: 5,
  },
  info: {
    color: "grey",
    marginBottom: 5,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  button: {
    borderWidth: 1,
    borderColor: "#0066cc",
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: "#fff",
    marginTop: 10,
  },
  buttonText: {
    color: "#0066CC",
    fontSize: 12,
    textAlign: "center",
  },
  CommentStyle: {
    marginBottom: 10,
    marginTop: 10,
    color: "grey",
    fontSize: 24,
  },
});
