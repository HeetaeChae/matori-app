import { ReactNode } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";

interface ScreenContainerProps {
  children: ReactNode;
}

function ScreenContainer({ children }: ScreenContainerProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      {children}
    </View>
  );
}

export default ScreenContainer;
