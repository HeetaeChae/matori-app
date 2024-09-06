import { useEffect, useState } from "react";
import * as Location from "expo-location";

import showSettingsAlert from "../utils/showSettingsAlert";
import {
  initialRegion,
  initialLargeScaleDelta,
  initialSmallScaleDelta,
} from "../constants/initialLocation";
import { Region, Delta } from "../types/Location";
import { AppStateStatus } from "react-native";

interface UseLocationProps {
  appStateStatus: AppStateStatus;
  mapScale: "large" | "small";
}

function useLocation({ appStateStatus, mapScale }: UseLocationProps) {
  const initialDelta =
    mapScale === "large" ? initialLargeScaleDelta : initialSmallScaleDelta;

  const [location, setLocation] = useState<Region & Delta>({
    ...initialRegion,
    ...initialDelta,
  });

  useEffect(() => {
    if (appStateStatus !== "active") {
      return;
    }
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        showSettingsAlert({
          title: "현재 위치 허용",
          description:
            "내 주변의 맛집 스토리를 보기 위해 현재 위치를 허용해주세요.",
        });
      }

      handleCurrentLocation();
    })();
  }, [appStateStatus]);

  const handleChangeLocation = (newLocation: Region & Delta) => {
    setLocation(newLocation);
  };

  const handleCurrentLocation = async () => {
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({});

    const newLocation = { latitude, longitude, ...initialDelta };

    setLocation(newLocation);
  };

  return { location, handleChangeLocation, handleCurrentLocation };
}

export default useLocation;
