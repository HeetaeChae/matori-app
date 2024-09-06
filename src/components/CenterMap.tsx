import MapView from "react-native-maps";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useLocation from "../hooks/useLocation";
import { useAppStateStatusStore } from "../store/useAppStateStatusStore";
import useMapCenter from "../hooks/useMapCenter";
import { palette } from "../constants/styles/colors";
import useGeocoding from "../hooks/queries/useGeocoding";

function CenterMap() {
  const { appStateStatus } = useAppStateStatusStore();

  const { location, handleChangeLocation } = useLocation({
    appStateStatus,
    mapScale: "small",
  });

  const { mapCenter } = useMapCenter(location);
  const { getAddress } = useGeocoding();

  const address = getAddress(mapCenter);

  console.log(address);

  return (
    <>
      <MapView
        style={styles.map}
        region={location}
        showsUserLocation
        onRegionChangeComplete={handleChangeLocation}
      />
      <Ionicons style={styles.cursor} name="add" size={30} />
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
    transform: [{ translateX: -15 }, { translateY: -15 }],
    color: palette.BRAND_BLUE,
  },
});
