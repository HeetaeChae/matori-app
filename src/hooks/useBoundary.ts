import { useEffect, useState } from "react";

interface Boundary {
  northEast: {
    latitude: number;
    longitude: number;
  };
  southWest: {
    latitude: number;
    longitude: number;
  };
}

interface Region {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

function useBoundary(region: Region) {
  const [boundary, setBoundary] = useState<null | Boundary>(null);

  useEffect(() => {
    const { latitude, longitude, latitudeDelta, longitudeDelta } = region;

    const northEastLat = latitude + latitudeDelta / 2;
    const northEastLng = longitude + longitudeDelta / 2;
    const southWestLat = latitude - latitudeDelta / 2;
    const southWestLng = longitude - longitudeDelta / 2;

    setBoundary({
      northEast: { latitude: northEastLat, longitude: northEastLng },
      southWest: { latitude: southWestLat, longitude: southWestLng },
    });
  }, [region]);

  return boundary;
}

export default useBoundary;
