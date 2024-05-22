import React, { useContext } from "react";
import ICourse from "../types/Icourses";
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Alert,
} from "react-native";
import Stars from "./Stars";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import GlobalContext from "./context1";
interface dataProps {
  data: ICourse;
  index: number;
}
export default function Course({ data, index }: dataProps) {
  const { courses, setCourses } = useContext(GlobalContext);
  const navigation = useNavigation();
  const gotodetails = () => {
    navigation.navigate("Course Detail", data);
  };

  const gotoEdit = () => {
    navigation.navigate("Edit Course", data);
  };

  const onDelete = async () => {
    Alert.alert(
      "Confirmation",
      "Do you want to delete this course",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: async () => {
            try {
              const response = await axios.delete(
                `http://localhost:3000/courses/${data.id}`
              );
              if (response.status === 200) {
                const updatedData = courses.filter((x) => x.id !== data.id);
                setCourses(updatedData);
              }
            } catch (error) {
              Alert.alert("an error occured");
            }
          },
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <View style={{ backgroundColor: index % 2 === 0 ? "white" : "#F3F3F7" }}>
      <View style={styles.row}>
        <View style={styles.stars}>
          <Stars rating={data.rating} />
        </View>

        <View style={styles.course}>
          <Text>{data.title}</Text>
          <Text style={styles.faculty}>
            {data.code} - {data.faculty}
          </Text>
        </View>

        <View style={styles.edges}>
          <TouchableHighlight
            onPress={gotodetails}
            underlayColor="#5398DC"
            style={styles.button}
          >
            <Text style={styles.buttonText}>Details</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            underlayColor="#5398DC"
            onPress={gotoEdit}
          >
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            underlayColor="#5398DC"
            onPress={onDelete}
          >
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  edges: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    minWidth: 50,
  },
  stars: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 5,
    minWidth: 50,
  },
  course: {
    flexDirection: "column",
    flex: 8,
  },
  faculty: {
    color: "grey",
  },
  button: {
    borderWidth: 1,
    borderColor: "#0066CC",
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: "#fff",
  },
  buttonText: {
    color: "#0066CC",
    fontSize: 12,
    textAlign: "center",
  },
  info: {
    marginHorizontal: 40,
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
  },
});
