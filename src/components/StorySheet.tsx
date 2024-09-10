import useBottomSheet from "../hooks/useBottomSheet";
import BottomSheetContainer from "./ui/BottomSheetContainer";
import CustomText from "./ui/CustomText";

function StorySheet() {
  const {
    bottomSheetRef,
    isExpanded,
    snapPoints,
    handleChangeIndex,
    handleCloseSheet,
    handleOpenSheet,
  } = useBottomSheet();

  return (
    <BottomSheetContainer
      ref={bottomSheetRef}
      isExpanded={isExpanded}
      snapPoints={snapPoints}
      onChangeIndex={handleChangeIndex}
      onCloseSheet={handleCloseSheet}
      onOpenSheet={handleOpenSheet}
    >
      <CustomText>스토리</CustomText>
    </BottomSheetContainer>
  );
}

export default StorySheet;
