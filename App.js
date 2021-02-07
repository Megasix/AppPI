import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
import MapView from 'react-native-maps'


Amplify.configure(config)

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Maps : </Text>
      <MapView>
      style={StyleSheet.absoluteFillObject}
      provider={MapView.PROVIDER_GOOGLE}
      </MapView>
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
