import { ReactNode } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";

import { useDarkModeStore } from "../../store/useDarkModeStore";

import { darkColors, lightColors } from "../../constants/styles/_index";

interface ScreenContainerProps {
  children: ReactNode;
}

type Colors = typeof darkColors | typeof lightColors;

function ScreenContainer({ children }: ScreenContainerProps) {
  const insets: EdgeInsets = useSafeAreaInsets();

  const { isDarkMode } = useDarkModeStore();
  const colors: Colors = isDarkMode ? darkColors : lightColors;

  return (
    <View style={styles(colors, insets).screenContainer}>
      <StatusBar />
      {children}
    </View>
  );
}

export default ScreenContainer;

const styles = (colors: Colors, insets: EdgeInsets) =>
  StyleSheet.create({
    screenContainer: {
      backgroundColor: colors.BACKGROUND_PRIMARY,
      flex: 1,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
    },
  });
