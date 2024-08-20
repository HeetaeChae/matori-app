import { ReactNode } from "react";
import { StyleSheet, View, ViewProps, ViewStyle } from "react-native";

import { darkColors, lightColors } from "../../constants/colors";
import { useDarkModeStore } from "../../store/useDarkModeStore";

interface CustomView extends ViewProps {
  type?: "default" | "card";
  isCenter?: boolean;
  children: ReactNode;
  styleProp?: ViewStyle;
}

type Colors = typeof darkColors | typeof lightColors;

function CustomView({
  type = "default",
  isCenter = false,
  children,
  styleProp,
  ...rest
}: CustomView) {
  const { isDarkMode } = useDarkModeStore();
  const colors: Colors = isDarkMode ? darkColors : lightColors;

  const viewStyle = [
    styleProp,
    styles(colors)[type],
    isCenter && styles(colors).centered,
  ];

  return (
    <View style={viewStyle} {...rest}>
      {children}
    </View>
  );
}

export default CustomView;

const styles = (colors: Colors) =>
  StyleSheet.create({
    default: {
      backgroundColor: colors.BACKGROUND_PRIMARY,
    },
    card: {
      backgroundColor: colors.BACKGROUND_SECONDARY,
      borderRadius: 10,
    },
    centered: {
      alignItems: "center",
      justifyContent: "center",
    },
  });
