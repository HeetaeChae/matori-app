import BottomSheet from "@gorhom/bottom-sheet";
import { useMemo, useRef, useState } from "react";

function useBottomSheet() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const bottomSheetRef = useRef<BottomSheet | null>(null);
  const snapPoints = useMemo(() => ["50%", "100%"], []);

  const handleChangeIndex = (newIndex: number) => {
    if (newIndex === 1) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  };

  const handleCloseSheet = () => bottomSheetRef.current?.close();
  const handleOpenSheet = () => bottomSheetRef.current?.collapse();

  return {
    bottomSheetRef,
    isExpanded,
    snapPoints,
    handleChangeIndex,
    handleCloseSheet,
    handleOpenSheet,
  };
}
export default useBottomSheet;
