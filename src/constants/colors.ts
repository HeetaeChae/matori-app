const palette = {
  BRAND_BLUE: "#1DA1F2",
  WHITE: "#FFFFFF",
  BLACK: "#14171A",
  RED: "#E0245E",
  DARK_GRAY: "#657786",
  LIGHT_GRAY: "#AAB8C2",
  EXTRA_DARK_GRAY: "#1C1C1C",
  EXTRA_LIGHT_GRAY: "#E1E8ED",
} as const;

export const lightColors = {
  PRIMARY: palette.BRAND_BLUE,
  SECONDARY: palette.LIGHT_GRAY,
  TEXT_PRIMARY: palette.BLACK,
  TEXT_SECONDARY: palette.DARK_GRAY,
  BACKGROUND_PRIMARY: palette.WHITE,
  BACKGROUND_SECONDARY: palette.EXTRA_LIGHT_GRAY,
  DANGER: palette.RED,
} as const;

export const darkColors = {
  PRIMARY: palette.BRAND_BLUE,
  SECONDARY: palette.DARK_GRAY,
  TEXT_PRIMARY: palette.WHITE,
  TEXT_SECONDARY: palette.LIGHT_GRAY,
  BACKGROUND_PRIMARY: palette.BLACK,
  BACKGROUND_SECONDARY: palette.EXTRA_DARK_GRAY,
  DANGER: palette.RED,
} as const;
