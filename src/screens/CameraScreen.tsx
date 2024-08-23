import { CameraView, CameraType, Camera } from "expo-camera";
import { Pressable, View } from "react-native";
import CustomText from "../components/ui/CustomText";
import CustomView from "../components/ui/CustomView";
import ScreenContainer from "../components/ui/ScreenContainer";
import useCamera from "../hooks/useCamera";
import { StoryStackNavigationProp } from "../types/ParamLists";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "../components/ui/CustomButton";
import { useLayoutEffect } from "react";

interface CameraScreenProps {
  navigation: StoryStackNavigationProp;
}

function CameraScreen({ navigation }: CameraScreenProps) {
  const [
    capturedImage,
    handleToggleFacing,
    handleTakePicture,
    handleChangeZoomLevel,
    handleCancel,
    cameraProps,
  ] = useCamera(navigation);

  return (
    <ScreenContainer>
      <CustomView styleProp={{ flex: 0.1 }}>
        <CustomButton type="outlined" onPress={handleCancel}>
          <Ionicons name="arrow-back" size={30} />
        </CustomButton>
      </CustomView>
      <CameraView {...cameraProps} style={{ flex: 0.8 }} />
      <CustomView styleProp={{ flex: 0.1 }} isCenter>
        <CustomButton type="outlined">
          <Ionicons name="camera" size={30} />
        </CustomButton>
      </CustomView>
    </ScreenContainer>
  );
}

export default CameraScreen;
