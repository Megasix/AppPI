import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";
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
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Ouvrir la Carte"
        style={styles.BtnStyl}
        onPress={() => navigation.navigate("Map")}
      ></Button>
    </View>
  );
}

function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView
        mapType={"satellite"}
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
  BtnStyl: {
    backgroundColor: "grey",
    padding: 10,
    paddingHorizontal: 10,
  },
});

export default App;
