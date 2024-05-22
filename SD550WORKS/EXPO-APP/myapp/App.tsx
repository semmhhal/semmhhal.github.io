import React, { useState, useEffect, useMemo } from "react";
import { SafeAreaView, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IContact from "./types/Icontacts";
import { NavigationContainer } from "@react-navigation/native";
import ContactList from "./Component2/ContactList";
import createContact from "./Component2/contacts";
import GlobalContext from "./Component2/context2";
import AddContactForm from "./Component2/AddContactForm";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { Navigator, Screen } = createNativeStackNavigator();
export default function App() {
  const [contacts, setContacts] = useState<IContact[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const arr: IContact[] = [];
      for (let i = 0; i < 10; i++) {
        const user = createContact();
        arr.push(user);
      }
      setContacts(arr);
      try {
        const data = await AsyncStorage.getItem("sd550");
      } catch (error) {
        console.log("error");
      }
    };
    loadData();
  }, []);

  const contextValue = useMemo(() => ({ contacts, setContacts }), [contacts]);
  return (
    <GlobalContext.Provider value={contextValue}>
      <NavigationContainer>
        <Navigator>
          <Screen name="Contacts" component={ContactList} />
          <Screen
            name="add-contact"
            component={AddContactForm}
            options={{ title: "Add contacts" }}
          />
        </Navigator>
      </NavigationContainer>
    </GlobalContext.Provider>
  );
}
