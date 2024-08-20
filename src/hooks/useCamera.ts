import { useEffect } from "react";
import { Camera, CameraType } from "expo-camera";
import showSettingsAlert from "../utils/showSettingsAlert";

function useCamera() {
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      if (status !== "granted") {
        showSettingsAlert({
          title: "카메라 접근 허용",
          description:
            "카메라를 사용하기 위해 앱이 카메라에 접근할 수 있도록 허용해주세요.",
        });
      }
    })();
  }, []);
}

export default useCamera;
