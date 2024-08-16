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
        paddingTop: insets.top,
        paddingLeft: insets.left,
        paddingBottom: insets.bottom,
        paddingRight: insets.right,
      }}
    >
      {children}
    </View>
  );
}

export default ScreenContainer;
