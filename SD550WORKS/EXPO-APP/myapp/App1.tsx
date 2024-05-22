import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./Components-1/HomeScreen";
import About from "./Components-1/About";
import ICourse from "./types/Icourses";
import axios from "axios";
import GlobalContext from "./Components-1/context1";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "./Components-1/Login";

const Tab = createBottomTabNavigator();

export default function App1() {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [loggedin, setLoggedin] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await AsyncStorage.getItem("LOGIN");
        if (data) {
          const obj = JSON.parse(data);
          setLoggedin(obj.loggedin);
        }
        const response = await axios.get("http://localhost:3000/courses");
        if (response.status === 200) {
          setCourses(response.data);
        }
      } catch (error) {
        Alert.alert("An error has occurred");
      }
    };
    loadData();
  }, []);

  if (!loggedin) {
    return <Login setLoggedin={setLoggedin} />;
  }
  return (
    <GlobalContext.Provider value={{ courses, setCourses, setLoggedin }}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Courses"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="About"
            component={About}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GlobalContext.Provider>
  );
}
