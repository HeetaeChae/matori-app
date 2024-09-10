import { Ionicons } from "@expo/vector-icons";
import { Pressable, PressableProps, StyleSheet, ViewStyle } from "react-native";

import { darkColors, lightColors, shadow } from "../../constants/styles/_index";
import { useDarkModeStore } from "../../store/useDarkModeStore";

interface CircleButtonProps extends PressableProps {
  icon: keyof typeof Ionicons.glyphMap;
  hasShadow?: boolean;
  type?: "bordered" | "default";
  styleProp?: ViewStyle;
}

type Colors = typeof darkColors | typeof lightColors;

function CircleButton({
  icon,
  hasShadow = false,
  type = "default",
  styleProp,
  ...rest
}: CircleButtonProps) {
  const { isDarkMode } = useDarkModeStore();
  const colors: Colors = isDarkMode ? darkColors : lightColors;

  const pressableStyle = (pressed: boolean): ViewStyle[] => [
    styleProp,
    pressed && { opacity: 0.7 },
    hasShadow && shadow,
    styles(colors).pressable,
    styles(colors)[`${type}Pressable`],
  ];

  const iconStyle = [styles(colors)[`${type}Icon`]];

  return (
    <Pressable style={({ pressed }) => pressableStyle(pressed)} {...rest}>
      <Ionicons style={iconStyle} name={icon} size={25} />
    </Pressable>
  );
}

export default CircleButton;

const styles = (colors: Colors) =>
  StyleSheet.create({
    pressable: {
      width: 60,
      height: 60,
      borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
    },
    defaultPressable: {
      backgroundColor: colors.BACKGROUND_SECONDARY_2,
    },
    borderedPressable: {
      borderWidth: 1,
      borderColor: colors.BORDER_SECONDARY,
      backgroundColor: colors.BACKGROUND_SECONDARY_2,
    },
    defaultIcon: {
      color: colors.TEXT_SECONDARY_2,
    },
    borderedIcon: {
      color: colors.TEXT_SECONDARY_2,
    },
  });
