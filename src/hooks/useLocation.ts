import { useEffect, useState } from "react";
import * as Location from "expo-location";
import showSettingsAlert from "../utils/showSettingsAlert";

function useLocation() {
  const [location, setLocation] = useState<
    Location.LocationObject | undefined
  >();

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        showSettingsAlert({
          title: "현재 위치 허용",
          description:
            "내 주변의 맛집 스토리를 보기 위해 현재 위치를 허용해주세요.",
        });
      }

      const newLocation = await Location.getCurrentPositionAsync({});
      setLocation(newLocation);
    })();
  }, []);

  return location;
}

export default useLocation;
