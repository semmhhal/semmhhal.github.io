import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native";
import CourseList from "./CourseList";
import CourseDetails from "./CourseDetails";
import AddReview from "./AddReview";
import EditCourse from "./EditCourse";

const { Navigator, Screen } = createNativeStackNavigator();
export default function HomeScreen() {
  return (
    <Navigator>
      <Screen
        name="Course List"
        component={CourseList}
        options={{ headerShown: false }}
      />
      <Screen name="Course Detail" component={CourseDetails} />
      <Screen name="Add Review" component={AddReview} />
      <Screen name="Edit Course" component={EditCourse} />
    </Navigator>
  );
}
