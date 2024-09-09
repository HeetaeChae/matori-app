import MapView from "react-native-maps";
import { StyleSheet } from "react-native";

import useLocation from "../hooks/useLocation";
import { useAppStateStatusStore } from "../store/useAppStateStatusStore";
import useMapBoundary from "../hooks/useMapBoundary";
import ShopCategoryButtons from "./ShopCategoryButtons";
import useShopCategories from "../hooks/useShopCategories";
import CurrentLocationButton from "./CurrentLocationButton";

function BoundaryMap() {
  const { appStateStatus } = useAppStateStatusStore();
  const { location, handleChangeLocation, handleCurrentLocation } = useLocation(
    {
      appStateStatus,
      mapScale: "large",
    }
  );
  const { mapBoundary } = useMapBoundary(location);
  const { selectedShopCategory, handleSelectShopCategory } =
    useShopCategories();

  return (
    <>
      <MapView
        style={styles.map}
        region={location}
        showsUserLocation
        onRegionChangeComplete={handleChangeLocation}
      />
      <ShopCategoryButtons
        onSelectShopCategory={handleSelectShopCategory}
        selectedShopCategory={selectedShopCategory}
      />
      <CurrentLocationButton onCurrentLocation={handleCurrentLocation} />
    </>
  );
}

export default BoundaryMap;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
