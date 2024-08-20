import { Alert, Linking, Platform } from "react-native";

const openAppSettings = (): void => {
  if (Platform.OS === "ios") {
    Linking.openURL("app-settings:");
  } else if (Platform.OS === "android") {
    Linking.openSettings();
  }
};

const showSettingsAlert = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) =>
  Alert.alert(title, description, [
    {
      text: "취소",
      style: "cancel",
    },
    {
      text: "설정",
      onPress: () => openAppSettings(),
    },
  ]);

export default showSettingsAlert;
