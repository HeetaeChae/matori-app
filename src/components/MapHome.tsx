import MapView from "react-native-maps";
import { StyleSheet } from "react-native";
import { useEffect, useState } from "react";

import useLocation from "../hooks/useLocation";
import useBoundary from "../hooks/useBoundary";
import useMarker from "../hooks/queries/useMarker";

function MapHome() {
  const { location } = useLocation();
  const { boundary, handleChangeBoundary } = useBoundary();
  const { getAllMarkers } = useMarker();

  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    if (!boundary) {
      return;
    }
  }, [boundary]);

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
