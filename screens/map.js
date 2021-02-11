import React from "react";
import MapView from "react-native-maps";

export default function Dashboard() {
  return (
    <MapView
      style={StyleSheet.absoluteFillObject}
      provider={MapView.PROVIDER_GOOGLE}
      showsUserLocation={true}
      showsMyLocationButton={true}
    ></MapView>
  );
}
