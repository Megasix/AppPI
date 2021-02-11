import React from "react";
import { Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function List() {
  const navigation = useNavigation();

  function navigateToMap() {
    navigation.navigate("Map");
  }

  function navigateToHome() {
    navigation.navigate("Home");
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>List Screen</Text>
      <Button title="Home" onPress={() => navigateToHome()} />
      <Button title="Open Map" onPress={() => navigateToMap()} />
    </View>
  );
}
