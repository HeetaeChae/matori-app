import { useDarkModeStore } from "../../store/useDarkModeStore";

import { ReactNode } from "react";
import { StyleSheet, View, ViewProps, ViewStyle } from "react-native";

import {
  darkColors,
  lightColors,
  spacing,
} from "../../constants/styles/_index";

interface ComponentContainerProps extends ViewProps {
  isCenter?: boolean;
  children: ReactNode;
  styleProp?: ViewStyle;
}

type Colors = typeof darkColors | typeof lightColors;

function ComponentContainer({
  isCenter = false,
  children,
  styleProp,
  ...rest
}: ComponentContainerProps) {
  const { isDarkMode } = useDarkModeStore();
  const colors: Colors = isDarkMode ? darkColors : lightColors;

  const { centered, componentContainer } = styles(colors);

  const viewStyle = [styleProp, componentContainer, isCenter && centered];

  return (
    <View style={viewStyle} {...rest}>
      {children}
    </View>
  );
}

export default ComponentContainer;

const styles = (colors: Colors) =>
  StyleSheet.create({
    componentContainer: {
      backgroundColor: colors.BACKGROUND_PRIMARY,
      padding: spacing.medium,
    },
    centered: {
      justifyContent: "center",
      alignItems: "center",
    },
  });
