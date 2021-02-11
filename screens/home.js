import React from "react";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  function navigateToList() {
    navigation.navigate("List");
  }
  return (
    <>
      <Button title="Open List Screen" onPress={() => navigateToList()} />
      <footer></footer>
    </>
  );
}
