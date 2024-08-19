import React from "react";
import { Text } from "react-native";
import useLocationPermission from "../hooks/useLocationPermission";

function HomeScreen() {
  const location = useLocationPermission();

  return <Text>홈</Text>;
}

export default HomeScreen;
