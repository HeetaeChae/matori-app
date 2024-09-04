import MapView from "react-native-maps";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useLocation from "../hooks/useLocation";
import { useAppStateStatusStore } from "../store/useAppStateStatusStore";
import useMapCenter from "../hooks/useMapCenter";

function CenterMap() {
  const { appStateStatus } = useAppStateStatusStore();

  const { location, handleChangeLocation } = useLocation({
    appStateStatus,
    mapScale: "small",
  });

  const { mapCenter } = useMapCenter(location);

  console.log(mapCenter);

  return (
    <>
      <MapView
        style={styles.map}
        region={location}
        showsUserLocation
        onRegionChangeComplete={handleChangeLocation}
      />
      <Ionicons
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
        name="add"
        size={30}
      />
    </>
  );
}

export default CenterMap;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
