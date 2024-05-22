import React, { useContext, useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import { Reviews } from "../types/Icourses";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Stars from "./Stars";
import axios from "axios";
import GlobalContext from "./context1";
import StarButton from "./StarButton";

export default function AddReview({ navigation, route }: any) {
  const { courses, setCourses } = useContext(GlobalContext);
  const data = route.params;
  const [selected, setSelected] = useState(0);
  const [newreviews, setnewReviews] = useState<Reviews>({
    name: "",
    rating: 0,
    comment: "",
  });

  const onSubmit = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/courses/${data.id}`,
        { ...data, reviews: [...data.reviews, newreviews] }
      );
      if (response.status === 200) {
        const index = courses.findIndex((x) => x.code === data.code);
        if (index !== -1) {
          const arr = { ...courses[index] };
          arr.reviews.push({ ...newreviews, rating: selected });
          let sum = 0;
          for (let i = 0; i < arr.reviews.length; i++) {
            sum += arr.reviews[i].rating;
            arr.rating = Math.ceil(sum / arr.reviews.length);
            courses[index] = arr;
            AsyncStorage.setItem("Sd550", JSON.stringify(courses));
            setCourses([...courses]);
            navigation.goBack();
          }
        }
      }
    } catch (error) {
      Alert.alert("An Error has occured");
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="enter name"
        value={newreviews.name}
        onChangeText={(text: string) =>
          setnewReviews({ ...newreviews, name: text })
        }
      />
      <Text style={styles.Text}>Your Rating</Text>
      <View style={styles.stars}>
        {[1, 2, 3, 4, 5].map((value: number) => (
          <StarButton
            key={value}
            value={value}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </View>
      <Stars rating={newreviews.rating} />
      <TextInput
        style={styles.input}
        placeholder="enter comment"
        value={newreviews.comment}
        multiline={true}
        numberOfLines={5}
        onChangeText={(text: string) =>
          setnewReviews({ ...newreviews, comment: text })
        }
      />
      <TouchableHighlight
        onPress={onSubmit}
        underlayColor="black"
        style={styles.SubmitButton}
      >
        <Text style={styles.SubmitText}>Submit Review</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  input: {
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    fontSize: 20,
    width: 380,
  },
  stars: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 80,
  },
  Text: {
    fontSize: 20,
    textAlign: "center",
    padding: 20,
  },
  SubmitButton: {
    backgroundColor: "blue",
    borderRadius: 4,
    padding: 20,
    paddingHorizontal: 20,
    marginTop: 20,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  SubmitText: {
    fontSize: 25,
    textAlign: "center",
  },
});
