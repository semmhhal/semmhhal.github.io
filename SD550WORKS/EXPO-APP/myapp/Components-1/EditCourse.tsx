import React, { useContext, useState } from "react";
import {
  View,
  TextInput,
  Pressable,
  Text,
  StyleSheet,
  Alert,
} from "react-native";
import ICourse from "../types/Icourses";
import GlobalContext from "./context1";
import axios from "axios";

export default function EditCourse({ navigation, route }: any) {
  const { courses, setCourses } = useContext(GlobalContext);
  const data = route.params;
  const [updated, setUpdateCourse] = useState(data);

  const UpdateCourse = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/courses/${updated.id}`,
        updated
      );
      if (response.status === 200) {
        const index = courses.findIndex((x) => x.code === updated.code);
        if (index !== -1) {
          const arr = [...courses];
          arr[index] = response.data;
          setCourses(arr);
          navigation.goBack();
        }
      }
    } catch (error) {
      Alert.alert("Error occured");
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={updated.title}
        onChangeText={(text: string) =>
          setUpdateCourse({ ...updated, title: text })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Faculty"
        value={updated.faculty}
        onChangeText={(text: string) =>
          setUpdateCourse({ ...updated, faculty: text })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Code"
        value={updated.code}
        onChangeText={(text: string) =>
          setUpdateCourse({ ...updated, code: text })
        }
        editable={false}
      />
      <Pressable style={styles.submitButton} onPress={UpdateCourse}>
        <Text style={styles.submitButtonText}>Edit Course</Text>
      </Pressable>
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
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 3,
    fontSize: 15,
  },
  submitButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#0066cc",
    borderRadius: 4,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  submitButtonText: {
    fontSize: 18,
    color: "#ffffff",
    textAlign: "center",
  },
});
