import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDarkModeStore } from "../../store/useDarkModeStore";
import { darkColors, lightColors } from "../../constants/colors";
import { fontWeights } from "../../constants/fontWeights";
import { fontSizes } from "../../constants/fontSizes";

interface CustomPressableProps extends PressableProps {
  hasCircleOutline?: boolean;
  type?: "primary" | "secondary";
  text?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  size: "normal" | "large";
  styleProp?: ViewStyle;
}

type Colors = typeof darkColors | typeof lightColors;

function CustomPressable({
  hasCircleOutline = false,
  type = "primary",
  text,
  icon,
  size,
  styleProp,
  ...rest
}: CustomPressableProps) {
  const { isDarkMode } = useDarkModeStore();
  const colors: Colors = isDarkMode ? darkColors : lightColors;

  const largeSize = {
    outlineWidth: 80,
    outlineHeight: 80,
    outlineBorderRadius: 40,
    iconSize: 40,
    fontSize: fontSizes.xLarge,
  };
  const normalSize = {
    outlineWidth: 40,
    outlineHeight: 40,
    outlineBorderRadius: 20,
    iconSize: 20,
    fontSize: fontSizes.normal,
  };
  const sizes = size === "normal" ? normalSize : largeSize;

  const pressableStyle = (pressed: boolean) => [
    styleProp,
    pressed && { opacity: 0.7 },
    styles(colors, sizes).pressable,
    hasCircleOutline && styles(colors, sizes).outline,
    hasCircleOutline && styles(colors, sizes).sizedOutline,
    hasCircleOutline && styles(colors, sizes)[`${type}Outline`],
  ];
  const textStyle = [
    styles(colors, sizes).text,
    styles(colors, sizes)[`${type}Text`],
    styles(colors, sizes).sizedText,
  ];
  const iconStyle = [styles(colors, sizes)[`${type}Icon`]];

  return (
    <Pressable style={({ pressed }) => pressableStyle(pressed)} {...rest}>
      {icon && <Ionicons style={iconStyle} name={icon} size={sizes.iconSize} />}
      {text && <Text style={textStyle}>{text}</Text>}
    </Pressable>
  );
}

export default CustomPressable;

const styles = (colors: Colors, sizes: any) =>
  StyleSheet.create({
    outline: {
      borderWidth: 1,
    },
    sizedOutline: {
      width: sizes.outlineWidth,
      height: sizes.outlineHeight,
      borderRadius: sizes.outlineBorderRadius,
    },
    pressable: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap: 3,
    },
    primaryOutline: {
      borderColor: colors.PRIMARY,
    },
    secondaryOutline: {
      borderColor: colors.SECONDARY,
    },
    primaryText: {
      color: colors.PRIMARY,
    },
    secondaryText: {
      color: colors.SECONDARY,
    },
    primaryIcon: {
      color: colors.PRIMARY,
    },
    secondaryIcon: {
      color: colors.SECONDARY,
    },
    text: {
      fontWeight: fontWeights.bold,
    },
    sizedText: {
      fontSize: sizes.fontSize,
    },
  });
