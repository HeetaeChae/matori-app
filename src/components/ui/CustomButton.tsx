import { ReactNode } from "react";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  darkColors,
  lightColors,
  spacing,
  fontWeights,
  fontSizes,
  shadow,
} from "../../constants/styles/_index";
import { useDarkModeStore } from "../../store/useDarkModeStore";

interface CustomButtonProps extends PressableProps {
  isFull?: boolean;
  hasShadow?: boolean;
  type?: "primary" | "outlined" | "secondary" | "borderedSecondary" | "link";
  icon?: keyof typeof Ionicons.glyphMap;
  children: ReactNode;
  styleProp?: ViewStyle;
}

type Colors = typeof darkColors | typeof lightColors;

function CustomButton({
  isFull = false,
  hasShadow = false,
  type = "primary",
  icon,
  children,
  styleProp,
  ...rest
}: CustomButtonProps) {
  const { isDarkMode } = useDarkModeStore();
  const colors: Colors = isDarkMode ? darkColors : lightColors;

  const pressableStyle = (pressed: boolean) => [
    styleProp,
    pressed && { opacity: 0.7 },
    hasShadow && shadow,
    styles(colors, isFull).pressable,
    styles(colors, isFull)[`${type}Pressable`],
  ];
  const textStyle = [
    styles(colors, isFull).text,
    styles(colors, isFull)[`${type}Text`],
  ];

  return (
    <Pressable style={({ pressed }) => pressableStyle(pressed)} {...rest}>
      {icon && <Ionicons name={icon} style={textStyle} />}
      <Text style={textStyle}>{children}</Text>
    </Pressable>
  );
}

export default CustomButton;

const styles = (colors: Colors, isFull: boolean) =>
  StyleSheet.create({
    // pressable
    pressable: {
      alignSelf: isFull ? "stretch" : "center",
      paddingVertical: isFull ? spacing.medium : spacing.extraSmall,
      paddingHorizontal: isFull ? spacing.medium : spacing.small,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 5,
      borderRadius: 20,
      borderWidth: 1,
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
      borderColor: colors.BACKGROUND_SECONDARY_2,
      backgroundColor: colors.BACKGROUND_SECONDARY_2,
    },
    borderedSecondaryPressable: {
      borderColor: colors.BORDER_SECONDARY,
      backgroundColor: colors.BACKGROUND_SECONDARY_2,
    },
    linkPressable: {
      borderColor: colors.BACKGROUND_PRIMARY,
      backgroundColor: colors.BACKGROUND_PRIMARY,
    },
    // text
    text: {
      fontWeight: fontWeights.bold,
      fontSize: isFull ? fontSizes.normal : fontSizes.small,
    },
    primaryText: { color: colors.WHITE },
    outlinedText: { color: colors.PRIMARY },
    secondaryText: { color: colors.TEXT_SECONDARY_2 },
    borderedSecondaryText: { color: colors.TEXT_SECONDARY_2 },
    linkText: { color: colors.PRIMARY },
  });
