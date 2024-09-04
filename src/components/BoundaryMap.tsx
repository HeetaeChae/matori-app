import MapView from "react-native-maps";
import { StyleSheet } from "react-native";

import useLocation from "../hooks/useLocation";
import { useAppStateStatusStore } from "../store/useAppStateStatusStore";
import useMapBoundary from "../hooks/useMapBoundary";

function BoundaryMap() {
  const { appStateStatus } = useAppStateStatusStore();

  const { location, handleChangeLocation } = useLocation({
    appStateStatus,
    mapScale: "large",
  });

  const { mapBoundary } = useMapBoundary(location);

  console.log(mapBoundary);
  return (
    <MapView
      style={styles.map}
      region={location}
      showsUserLocation
      onRegionChangeComplete={handleChangeLocation}
    />
  );
}

export default BoundaryMap;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
