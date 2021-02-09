import React from "react";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import { StyleSheet, View, Button, Text, SafeAreaView } from "react-native";
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
import MapView from "react-native-maps";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

Amplify.configure(config);

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  const colorScheme = useColorScheme();

  const btnColor = colorScheme === "light" ? "blue" : "red";
  const themeTextStyle =
    colorScheme === "light" ? styles.lightThemeText : styles.darkThemeText;
  const themeContainerStyle =
    colorScheme === "light" ? styles.lightContainer : styles.darkContainer;

  return (
    <View style={[styles.container, themeContainerStyle]}>
      <Text style={themeTextStyle}>Home Screen</Text>
      <Button
        title="Ouvrir la Carte"
        color={btnColor}
        onPress={() => navigation.navigate("Map")}
      ></Button>
    </View>
  );
}

function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFillObject}
        provider={MapView.PROVIDER_GOOGLE}
        showsUserLocation={true}
        showsMyLocationButton={true}
      ></MapView>
    </View>
  );
}

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  lightContainer: {
    backgroundColor: "#ffffff",
  },
  darkContainer: {
    backgroundColor: "#000000",
  },
  lightThemeText: {
    color: "#000000",
  },
  darkThemeText: {
    color: "#ffffff",
  },
});

export default App;
