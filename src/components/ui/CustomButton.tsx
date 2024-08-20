import { ReactNode } from "react";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";

import {
  darkColors,
  lightColors,
  spacing,
  fontWeights,
  fontSizes,
} from "../../constants/_index";
import { useDarkModeStore } from "../../store/useDarkModeStore";

interface CustomButtonProps extends PressableProps {
  isFull?: boolean;
  type?: "primary" | "outlined" | "secondary" | "link";
  children: ReactNode;
  styleProp?: ViewStyle;
}

type Colors = typeof darkColors | typeof lightColors;

function CustomButton({
  isFull = false,
  type = "primary",
  children,
  styleProp,
  ...rest
}: CustomButtonProps) {
  const { isDarkMode } = useDarkModeStore();
  const colors: Colors = isDarkMode ? darkColors : lightColors;

  const pressableStyle = (pressed: boolean) => [
    styleProp,
    pressed && { opacity: 0.7 },
    styles(colors, isFull).pressable,
    styles(colors, isFull)[`${type}Pressable`],
  ];
  const textStyle = [
    styles(colors, isFull).text,
    styles(colors, isFull)[`${type}Text`],
  ];

  return (
    <Pressable style={({ pressed }) => pressableStyle(pressed)} {...rest}>
      <Text style={textStyle}>{children}</Text>
    </Pressable>
  );
}

export default CustomButton;

const styles = (colors: Colors, isFull: boolean) =>
  StyleSheet.create({
    pressable: {
      borderWidth: 1,
      alignSelf: isFull ? "stretch" : "center",
      borderRadius: isFull ? 20 : 25,
      padding: isFull ? spacing.medium : spacing.small,
    },
    primaryPressable: {
      borderColor: colors.PRIMARY,
      backgroundColor: colors.PRIMARY,
    },
    outlinedPressable: {
      borderColor: colors.PRIMARY,
      backgroundColor: colors.BACKGROUND_PRIMARY,
    },
    secondaryPressable: {
      borderColor: colors.BACKGROUND_SECONDARY,
      backgroundColor: colors.BACKGROUND_SECONDARY,
    },
    linkPressable: {
      borderColor: colors.BACKGROUND_PRIMARY,
      backgroundColor: colors.BACKGROUND_PRIMARY,
    },
    text: {
      fontWeight: fontWeights.bold,
      fontSize: isFull ? fontSizes.normal : fontSizes.small,
    },
    primaryText: {
      color: "white",
    },
    outlinedText: { color: colors.PRIMARY },
    secondaryText: { color: colors.TEXT_PRIMARY },
    linkText: { color: colors.PRIMARY },
  });
