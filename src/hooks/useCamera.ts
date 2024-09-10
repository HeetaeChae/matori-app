import React, { useEffect, useRef, useState } from "react";
import {
  Camera,
  CameraCapturedPicture,
  CameraType,
  CameraView,
  FocusMode,
} from "expo-camera";
import showSettingsAlert from "../utils/showSettingsAlert";
import navigations from "../constants/navigations";

type CapturedImage = CameraCapturedPicture | undefined;

interface CameraProps {
  ref: React.RefObject<CameraView>;
  facing: CameraType;
  zoom: number;
  autoFocus: FocusMode;
}

function useCamera(
  navigation
): [
  CapturedImage,
  () => void,
  () => void,
  (zoom: number) => void,
  () => void,
  CameraProps
] {
  const cameraRef = useRef<CameraView>(null);

  const [facing, setFacing] = useState<CameraType>("back");
  const [zoomLevel, setZoomLevel] = useState<number>(0);
  const [capturedImage, setCapturedImage] = useState<CapturedImage>();

  useEffect(() => {
    (async (): Promise<void> => {
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

  const handleToggleFacing = (): void => {
    setFacing((prev) => (prev === "back" ? "front" : "back"));
  };

  const handleTakePicture = async (): Promise<void> => {
    if (!cameraRef.current) return;
    await cameraRef.current
      .takePictureAsync({ base64: true })
      .then((data) => setCapturedImage(data));
  };

  const handleChangeZoomLevel = (zoom: number): void => {
    setZoomLevel(zoom);
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  const cameraProps: CameraProps = {
    ref: cameraRef,
    facing,
    zoom: zoomLevel,
    autoFocus: "off",
  };

  return [
    capturedImage,
    handleToggleFacing,
    handleTakePicture,
    handleChangeZoomLevel,
    handleCancel,
    cameraProps,
  ];
}

export default useCamera;
