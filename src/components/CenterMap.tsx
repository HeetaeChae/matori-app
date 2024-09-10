import MapView from "react-native-maps";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useLocation from "../hooks/useLocation";
import { useAppStateStatusStore } from "../store/useAppStateStatusStore";
import useMapCenter from "../hooks/useMapCenter";
import { palette } from "../constants/styles/colors";
import useGeocoding from "../hooks/queries/useGeocoding";
import CurrentLocationButton from "./CurrentLocationButton";

function CenterMap() {
  const { appStateStatus } = useAppStateStatusStore();

  const { location, handleChangeLocation, handleCurrentLocation } = useLocation(
    {
      appStateStatus,
      mapScale: "small",
    }
  );

  const { mapCenter } = useMapCenter(location);
  // const { getAddress } = useGeocoding();

  // const address = getAddress(mapCenter);

  return (
    <>
      <MapView
        style={styles.map}
        region={location}
        showsUserLocation
        onRegionChangeComplete={handleChangeLocation}
      />
      <View style={styles.cursor} />
      <CurrentLocationButton onPressCurrentLocation={handleCurrentLocation} />
    </>
  );
}

export default CenterMap;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  cursor: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 16,
    height: 16,
    borderWidth: 2,
    borderColor: palette.BRAND_BLUE,
    transform: [{ translateX: -8 }, { translateY: -8 }],
  },
});
