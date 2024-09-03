import { useEffect, useState } from "react";
import { Boundary, Delta, Region } from "../types/Location";

function useBoundary(location: Region & Delta) {
  const [boundary, setBoundary] = useState<null | Boundary>(null);

  useEffect(() => {
    handleChangeBoundary(location);
  }, [location]);

  const handleChangeBoundary = (location: Region & Delta) => {
    const { latitude, longitude, latitudeDelta, longitudeDelta } = location;

    const northEastLat = latitude + latitudeDelta / 2;
    const northEastLng = longitude + longitudeDelta / 2;
    const southWestLat = latitude - latitudeDelta / 2;
    const southWestLng = longitude - longitudeDelta / 2;

    const newBoundary = {
      northEast: { latitude: northEastLat, longitude: northEastLng },
      southWest: { latitude: southWestLat, longitude: southWestLng },
    };

    setBoundary(newBoundary);
  };

  return { boundary, handleChangeBoundary };
}

export default useBoundary;
