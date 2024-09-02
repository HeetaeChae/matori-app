import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import MapView from "react-native-maps";
import { StyleSheet } from "react-native";
import CustomButton from "./ui/CustomButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import useLocation from "../hooks/useLocation";

function MapHome() {
  const { location, boundary, handleChangeBoundary } = useLocation();

  console.log(boundary);

  return (
    <MapView
      style={styles.map}
      region={location}
      onRegionChangeComplete={handleChangeBoundary}
    />
  );
}

export default MapHome;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
