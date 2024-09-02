import { useEffect, useState } from "react";
import * as Location from "expo-location";
import showSettingsAlert from "../utils/showSettingsAlert";

interface Region {
  latitude: number;
  longitude: number;
}

interface Location extends Region {
  latitudeDelta: number;
  longitudeDelta: number;
}

interface Boundary {
  northEast: Region;
  southWest: Region;
}

const initialDelta = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
} as const;

function useLocation() {
  const [location, setLocation] = useState<Location>({
    latitude: 37.5664056,
    longitude: 126.9778222,
    ...initialDelta,
  });

  const [boundary, setBoundary] = useState<Boundary | undefined>();

  useEffect(() => {
    requestLocation();
  }, []);

  const requestLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      showSettingsAlert({
        title: "현재 위치 허용",
        description:
          "내 주변의 맛집 스토리를 보기 위해 현재 위치를 허용해주세요.",
      });
    }

    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({});

    console.log(latitude, longitude);

    const newLocation = { latitude, longitude, ...initialDelta };

    setLocation(newLocation);
    handleChangeBoundary(newLocation);
  };

  const handleChangeBoundary = (location: Location) => {
    const { latitude, longitude, latitudeDelta, longitudeDelta } = location;

    const northEastLat = latitude + latitudeDelta / 2;
    const northEastLng = longitude + longitudeDelta / 2;
    const southWestLat = latitude - latitudeDelta / 2;
    const southWestLng = longitude - longitudeDelta / 2;

    const newBoundary = {
      northEast: { latitude: northEastLat, longitude: northEastLng },
      southWest: { latitude: southWestLat, longitude: southWestLng },
    };

    return setBoundary(newBoundary);
  };

  return { location, boundary, handleChangeBoundary };
}

export default useLocation;
