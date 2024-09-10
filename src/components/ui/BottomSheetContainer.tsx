import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { forwardRef, ReactNode, useEffect } from "react";
import { StyleSheet } from "react-native";

import { darkColors, lightColors } from "../../constants/styles/colors";
import { useDarkModeStore } from "../../store/useDarkModeStore";
import CustomView from "./CustomView";
import CustomButton from "./CustomButton";
import navigations from "../../constants/navigations";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenProps } from "../../screens/HomeScreen";

type Ref = BottomSheet;
type Colors = typeof darkColors | typeof lightColors;

interface BottomSheetContainerContainerProps {
  children: ReactNode;
  isExpanded: boolean;
  snapPoints: string[];
  onChangeIndex: (newIndex: number) => void;
  onCloseSheet: () => void;
  onOpenSheet: () => void;
}

const BottomSheetContainer = forwardRef<
  Ref,
  BottomSheetContainerContainerProps
>((props, ref) => {
  const {
    children,
    isExpanded,
    snapPoints,
    onChangeIndex,
    onCloseSheet,
    onOpenSheet,
  } = props;
  const { isDarkMode } = useDarkModeStore();
  const colors: Colors = isDarkMode ? darkColors : lightColors;

  const navigation = useNavigation<HomeScreenProps["navigation"]>();

  const { indicator, bottomSheetBackground } = styles(colors);

  useEffect(() => {
    if (isExpanded) {
      navigation.navigate(navigations.STORY);
      setTimeout(() => {
        onCloseSheet();
      }, 500);
    }
  }, [isExpanded]);

  return (
    <>
      <BottomSheet
        ref={ref}
        snapPoints={snapPoints}
        handleIndicatorStyle={indicator}
        backgroundStyle={bottomSheetBackground}
        index={-1}
        onChange={onChangeIndex}
        enablePanDownToClose
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
          />
        )}
      >
        <CustomView hasPadding>{children}</CustomView>
      </BottomSheet>
    </>
  );
});

export default BottomSheetContainer;

const styles = (colors: Colors) =>
  StyleSheet.create({
    indicator: {
      backgroundColor: colors.BACKGROUND_SECONDARY,
    },
    bottomSheetBackground: {
      backgroundColor: colors.BACKGROUND_PRIMARY,
    },
  });
