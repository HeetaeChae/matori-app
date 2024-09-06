export const palette = {
  BRAND_BLUE: "#1DA1F2",
  WHITE: "#FFFFFF",
  BLACK: "#14171A",
  RED: "#E0245E",
  DARK_GRAY: "#657786",
  LIGHT_GRAY: "#AAB8C2",
  EXTRA_DARK_GRAY: "#363636",
  EXTRA_LIGHT_GRAY: "#E1E8ED",
} as const;

export const lightColors = {
  ...palette,
  // 메인색상 (브랜드 블루)
  PRIMARY: palette.BRAND_BLUE,
  // 옅은 회색
  SECONDARY: palette.LIGHT_GRAY,
  // 검정색
  TEXT_PRIMARY: palette.BLACK,
  // 진한 회색
  TEXT_SECONDARY: palette.DARK_GRAY,
  // 옅은 회색
  TEXT_SECONDARY_2: palette.DARK_GRAY,
  // 흰색
  BACKGROUND_PRIMARY: palette.WHITE,
  // 매우 옅은 회색
  BACKGROUND_SECONDARY: palette.EXTRA_LIGHT_GRAY,
  // 흰색
  BACKGROUND_SECONDARY_2: palette.WHITE,
  // 옅은 회색
  BORDER_SECONDARY: palette.LIGHT_GRAY,
  // 적색
  DANGER: palette.RED,
} as const;

export const darkColors = {
  ...palette,
  // 메인색상 (브랜드 블루)
  PRIMARY: palette.BRAND_BLUE,
  // 진한 회색
  SECONDARY: palette.DARK_GRAY,
  // 흰색
  TEXT_PRIMARY: palette.WHITE,
  // 옅은 회색
  TEXT_SECONDARY: palette.LIGHT_GRAY,
  // 흰색
  TEXT_SECONDARY_2: palette.WHITE,
  // 검정색
  BACKGROUND_PRIMARY: palette.BLACK,
  // 매우 짙은 회색
  BACKGROUND_SECONDARY: palette.EXTRA_DARK_GRAY,
  // 매우 짙은 회색
  BACKGROUND_SECONDARY_2: palette.EXTRA_DARK_GRAY,
  // 매우 짙은 회색
  BORDER_SECONDARY: palette.EXTRA_DARK_GRAY,
  // 적색
  DANGER: palette.RED,
} as const;
