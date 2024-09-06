import { ReactNode } from "react";
import { StyleSheet, Text, TextProps, TextStyle } from "react-native";

import {
  darkColors,
  lightColors,
  fontSizes,
  fontWeights,
} from "../../constants/styles/_index";
import { useDarkModeStore } from "../../store/useDarkModeStore";

interface CustomTextProps extends TextProps {
  isBold?: boolean;
  type?: "header" | "body" | "description";
  children: ReactNode;
  styleProp?: TextStyle;
}

type Colors = typeof darkColors | typeof lightColors;

function CustomText({
  isBold = false,
  type = "body",
  children,
  styleProp,
  ...rest
}: CustomTextProps) {
  const { isDarkMode } = useDarkModeStore();
  const colors: Colors = isDarkMode ? darkColors : lightColors;

  const textStyle = [
    styleProp,
    styles(colors)[type],
    isBold && { fontWeight: fontWeights.bold },
  ];

  return (
    <Text style={textStyle} {...rest}>
      {children}
    </Text>
  );
}

export default CustomText;

const styles = (colors: Colors) =>
  StyleSheet.create({
    header: {
      fontSize: fontSizes.large,
      color: colors.TEXT_PRIMARY,
    },
    body: {
      fontSize: fontSizes.normal,
      color: colors.TEXT_PRIMARY,
    },
    description: {
      fontSize: fontSizes.small,
      color: colors.TEXT_SECONDARY,
    },
  });
