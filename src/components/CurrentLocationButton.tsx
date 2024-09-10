import React from "react";
import CircleButton from "./ui/CircleButton";
import { StyleSheet, View } from "react-native";
import { spacing } from "../constants/styles/spacing";

interface CurrentLocationButtonProps {
  onPressCurrentLocation: () => void;
}

function CurrentLocationButton({
  onPressCurrentLocation,
}: CurrentLocationButtonProps) {
  return (
    <View style={styles.circleButtonContainer}>
      <CircleButton
        icon="paper-plane"
        hasShadow
        styleProp={{ alignSelf: "flex-end" }}
        onPress={onPressCurrentLocation}
      />
    </View>
  );
}

export default CurrentLocationButton;

const styles = StyleSheet.create({
  circleButtonContainer: {
    position: "absolute",
    bottom: spacing.medium,
    right: spacing.medium,
  },
});
