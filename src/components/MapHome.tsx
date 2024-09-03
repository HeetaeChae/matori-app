import MapView from "react-native-maps";
import { StyleSheet } from "react-native";

import useLocation from "../hooks/useLocation";
import useBoundary from "../hooks/useBoundary";
import { useAppStateStatusStore } from "../store/useAppStateStatusStore";

function MapHome() {
  const { appStatusStatus } = useAppStateStatusStore();

  const { location } = useLocation(appStatusStatus);
  const { boundary, handleChangeBoundary } = useBoundary(location);

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
