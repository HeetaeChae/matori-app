import MapView from "react-native-maps";
import { StyleSheet } from "react-native";

import useLocation from "../hooks/useLocation";
import { useAppStateStatusStore } from "../store/useAppStateStatusStore";
import useMapBoundary from "../hooks/useMapBoundary";
import ShopCategoryButtons from "./ShopCategoryButtons";
import useShopCategories from "../hooks/useShopCategories";
import CurrentLocationButton from "./CurrentLocationButton";
import StorySheet from "./StorySheet";
import Markers from "./Markers";

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

  console.log(location);

  return (
    <>
      <MapView
        style={styles.map}
        region={location}
        showsUserLocation
        onRegionChangeComplete={handleChangeLocation}
      >
        <Markers mapBoundary={mapBoundary} />
      </MapView>
      <ShopCategoryButtons
        onSelectShopCategory={handleSelectShopCategory}
        selectedShopCategory={selectedShopCategory}
      />
      <CurrentLocationButton onPressCurrentLocation={handleCurrentLocation} />
      <StorySheet />
    </>
  );
}

export default BoundaryMap;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
