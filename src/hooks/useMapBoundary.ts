import { useEffect, useState } from "react";
import { Boundary, Delta, Region } from "../types/Location";

function useMapBoundary(location: Region & Delta) {
  const [mapBoundary, setMapBoundary] = useState<null | Boundary>(null);

  useEffect(() => {
    handleChangeMapBoundary(location);
  }, [location]);

  const handleChangeMapBoundary = (location: Region & Delta) => {
    const { latitude, longitude, latitudeDelta, longitudeDelta } = location;

    const northEastLat = latitude + latitudeDelta / 2;
    const northEastLng = longitude + longitudeDelta / 2;
    const southWestLat = latitude - latitudeDelta / 2;
    const southWestLng = longitude - longitudeDelta / 2;

    const newBoundary = {
      northEast: { latitude: northEastLat, longitude: northEastLng },
      southWest: { latitude: southWestLat, longitude: southWestLng },
    };

    setMapBoundary(newBoundary);
  };

  return { mapBoundary };
}

export default useMapBoundary;
