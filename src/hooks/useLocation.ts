import { useEffect, useState } from "react";
import * as Location from "expo-location";

import showSettingsAlert from "../utils/showSettingsAlert";
import { initialRegion, initialDelta } from "../constants/initialLocation";
import { Region, Delta } from "../types/Location";
import { AppStateStatus } from "react-native";

function useLocation(appStatusStatus: AppStateStatus) {
  const [location, setLocation] = useState<Region & Delta>({
    ...initialRegion,
    ...initialDelta,
  });

  useEffect(() => {
    if (appStatusStatus !== "active") {
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

      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});

      const newLocation = { latitude, longitude, ...initialDelta };

      setLocation(newLocation);
    })();
  }, [appStatusStatus]);

  return { location };
}

export default useLocation;
