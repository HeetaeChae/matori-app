import { CameraView } from "expo-camera";
import ScreenContainer from "../components/ui/ScreenContainer";
import useCamera from "../hooks/useCamera";
import { StoryStackNavigationProp } from "../types/ParamLists";
import CustomPressable from "../components/ui/CustomPressable";
import ComponentContainer from "../components/ui/ComponentContainer";
import CustomView from "../components/ui/CustomView";

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
      <ComponentContainer
        styleProp={{
          flex: 0.1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <CustomPressable
          icon="close"
          onPress={handleCancel}
          type="secondary"
          size="large"
        />
        <CustomView style={{ flexDirection: "row" }}>
          <CustomPressable
            icon="flash-off"
            onPress={handleToggleFacing}
            type="secondary"
            size="large"
          />
          <CustomPressable
            icon="refresh"
            onPress={handleToggleFacing}
            type="secondary"
            size="large"
          />
        </CustomView>
      </ComponentContainer>
      <CameraView {...cameraProps} style={{ flex: 0.8 }} />
      <ComponentContainer styleProp={{ flex: 0.1 }} isCenter>
        <CustomPressable
          icon="radio-button-on"
          onPress={handleTakePicture}
          type="secondary"
          size="large"
          hasCircleOutline
        />
      </ComponentContainer>
    </ScreenContainer>
  );
}

export default CameraScreen;
