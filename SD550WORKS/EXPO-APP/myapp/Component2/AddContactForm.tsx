import React, { useContext, useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import createContact, { IContact } from "./contacts";
import GlobalContext from "./context2";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AddContactForm({ navigation }: any) {
  const { contacts, setContacts } = useContext(GlobalContext);
  const [newcontact, setnewContact] = useState<IContact>({
    id: "",
    name: "",
    phone: "",
  });

  const onAdd = async () => {
    try {
      if (newcontact.name.trim() === "") {
        return Alert.alert("please enter name");
      }

      const user = createContact(newcontact.name, newcontact.phone);
      const arr = [user, ...contacts];
      await AsyncStorage.setItem("SD550", JSON.stringify(arr));
      setContacts(arr);
      navigation.navigate("Contacts");
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={newcontact.name}
        onChangeText={(text: string) =>
          setnewContact({ ...newcontact, name: text })
        }
      />
      <TextInput
        style={styles.input}
        value={newcontact.phone}
        onChangeText={(text: string) =>
          setnewContact({ ...newcontact, phone: text })
        }
      />
      <Pressable style={styles.button} onPress={onAdd}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 1,
    width: "90%",
    padding: 10,
    fontSize: 24,
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  buttonText: {
    fontSize: 24,
  },
});
