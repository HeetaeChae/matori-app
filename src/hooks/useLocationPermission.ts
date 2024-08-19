import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { Alert, Linking, Platform } from "react-native";

const openAppSettings = (): void => {
  if (Platform.OS === "ios") {
    Linking.openURL("app-settings:");
  } else if (Platform.OS === "android") {
    Linking.openSettings();
  }
};

function useLocationPermission() {
  const [location, setLocation] = useState<
    Location.LocationObject | undefined
  >();

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        Alert.alert(
          "현재 위치 허용",
          "내 주변의 맛집 스토리를 확인하기 위해 현재 위치를 허용해주세요.",
          [
            {
              text: "취소",
              style: "cancel",
            },
            {
              text: "설정",
              onPress: () => openAppSettings(),
            },
          ]
        );
      }

      const newLocation = await Location.getCurrentPositionAsync({});
      setLocation(newLocation);
    })();
  }, []);

  return location;
}

export default useLocationPermission;
