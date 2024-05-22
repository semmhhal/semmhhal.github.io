import React, { useContext, useEffect, useState } from "react";
import { Button, FlatList, SafeAreaView, Text, TextInput } from "react-native";
import GlobalContext from "./context2";
import Contact from "./Contact";
import { IContact } from "./contacts";
export default function ContactList({ navigation }: any) {
  const { contacts } = useContext(GlobalContext);
  const [displayList, setDisplayList] = useState(contacts);
  const [toggle, setToggle] = useState(true);
  const [asc, setAsc] = useState(true);

  const showToggle = () => {
    setToggle(!toggle);
  };

  const onSort = () => {
    let arr = [];
    if (asc) {
      arr = contacts.sort((a: IContact, b: IContact) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      );
    } else {
      arr = contacts.sort((a: IContact, b: IContact) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      );
    }
    setAsc(!asc);
    setDisplayList(arr);
  };

  useEffect(() => {
    setDisplayList(contacts);
  }, []);

  const AddContacts = () => {
    navigation.navigate("add-contact");
  };
  return (
    <SafeAreaView>
      <Button title="Toggle" onPress={showToggle} />
      <Button title="Sort" onPress={onSort} />
      <Button title="Add Contact" onPress={AddContacts} />
      <FlatList
        data={displayList}
        renderItem={({ item }) => <Contact data={item} />}
      />
    </SafeAreaView>
  );
}
