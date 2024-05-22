import React, { useContext, useState, useRef } from "react";

import GlobalContext from "./context1";
import {
  View,
  TextInput,
  Text,
  Pressable,
  Alert,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface dataProps {
  setLoggedin: (loggedin: boolean) => void;
}
export default function Login({ setLoggedin }: dataProps) {
  const [email, setEmail] = useState("");
  const emailinputRef = useRef<TextInput>(null);
  const onLogin = async () => {
    // emailinputRef.current!.focus();
    try {
      if (email.trim() === "") {
        return Alert.alert("please enter an email");
      }
      const response = await axios.get(
        `http://localhost:3000/users?email=${email}`
      );
      if (response.status === 200) {
        AsyncStorage.setItem("LOGIN", JSON.stringify({ loggedin: true }));
        setLoggedin(true);
      }
    } catch (error) {
      Alert.alert("error");
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <TextInput
        ref={emailinputRef}
        style={style.input}
        placeholder="Email"
        value={email}
        onChangeText={(text: string) => setEmail(text)}
        autoCapitalize="none"
      />
      <Pressable style={style.submitButton} onPress={onLogin}>
        <Text style={style.submitButtonText}>Log in</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
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
  focusButton: {
    backgroundColor: "#28a745",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  focusButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
