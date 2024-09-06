import MapView from "react-native-maps";
import { StyleSheet, Switch, View } from "react-native";

import useLocation from "../hooks/useLocation";
import { useAppStateStatusStore } from "../store/useAppStateStatusStore";
import useMapBoundary from "../hooks/useMapBoundary";
import ShopCategoryButtons from "./ShopCategoryButtons";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";
import { spacing } from "../constants/styles/spacing";
import { useDarkModeStore } from "../store/useDarkModeStore";
import CustomView from "./ui/CustomView";
import CustomText from "./ui/CustomText";
import CircleButton from "./ui/CircleButton";
import { useState } from "react";
import useShopCategories from "../hooks/useShopCategories";

function BoundaryMap() {
  const insets: EdgeInsets = useSafeAreaInsets();

  const { appStateStatus } = useAppStateStatusStore();
  const { toggleDarkMode, isDarkMode } = useDarkModeStore();
  const { location, handleChangeLocation, handleCurrentLocation } = useLocation(
    {
      appStateStatus,
      mapScale: "large",
    }
  );
  const { mapBoundary } = useMapBoundary(location);
  const { shopCategory, handleSelectShopCategory } = useShopCategories();

  return (
    <>
      <MapView
        style={styles(insets).map}
        region={location}
        showsUserLocation
        onRegionChangeComplete={handleChangeLocation}
      />
      <View style={styles(insets).buttonsContainer}>
        <ShopCategoryButtons
          onSelectShopCategory={handleSelectShopCategory}
          shopCategory={shopCategory}
        />
      </View>
      <View style={styles(insets).circleButtonContainer}>
        <CircleButton
          icon="paper-plane"
          hasShadow
          styleProp={{ alignSelf: "flex-end" }}
          onPress={handleCurrentLocation}
        />
      </View>
    </>
  );
}

export default BoundaryMap;

const styles = (insets: EdgeInsets) =>
  StyleSheet.create({
    map: {
      flex: 1,
    },
    buttonsContainer: {
      position: "absolute",
      top: insets.top,
      left: spacing.medium,
    },
    circleButtonContainer: {
      position: "absolute",
      bottom: spacing.medium,
      right: spacing.medium,
    },
  });
