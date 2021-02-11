import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import List from "../screens/list";
import Map from "../screens/map";

const AppStack = createStackNavigator();
export default function Navigator() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: true }}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="List" component={List} />
        <AppStack.Screen name="Map" component={Map} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
