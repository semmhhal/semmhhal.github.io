import React, { useContext, useEffect, useReducer, useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  View,
  StyleSheet,
  Platform,
  Pressable,
} from "react-native";
import GlobalContext from "./context1";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Header.ios";
import Course from "./Course";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  displayList: [],
  search: "",
};

function reducer(state, action) {
  const { type, data } = action;
  switch (type) {
    case "DISPLAY LIST":
      return { ...state, displayList: data };
    case "SEARCH":
      return { ...state, search: data };

    default:
      state;
  }
}

export default function CourseList() {
  const { courses, setLoggedin } = useContext(GlobalContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const onSearch = (text: string) => {
    const arr = courses.filter((x) =>
      x.title.toLowerCase().includes(text.toLowerCase())
    );
    dispatch({ type: "DISPLAY LIST", data: arr });
    dispatch({ type: "SEARCH", data: text });
  };

  useEffect(() => {
    dispatch({ type: "DISPLAY LIST", data: courses });
  }, [courses]);

  const onLogout = () => {
    AsyncStorage.removeItem("LOGIN");
    setLoggedin(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header />
        <TextInput
          style={styles.input}
          placeholder="Live Search"
          value={state.search}
          onChangeText={onSearch}
        />
        <FlatList
          data={state.displayList}
          renderItem={({ item, index }) => <Course data={item} index={index} />}
        />
        <Pressable onPress={onLogout} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Log Out</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: Platform.OS === "ios" ? 30 : 0,
    paddingBottom: 200,
  },
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#F5F5F5",
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
