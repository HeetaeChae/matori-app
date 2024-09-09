import { StyleSheet, View } from "react-native";
import { shopCategories, ShopCategoryValue } from "../constants/shopCategories";
import CustomButton from "./ui/CustomButton";
import { spacing } from "../constants/styles/spacing";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";

interface ShopCategoryButtonsProps {
  selectedShopCategory: ShopCategoryValue;
  onSelectShopCategory: (shopCategoryValue: ShopCategoryValue) => void;
}

function ShopCategoryButtons({
  selectedShopCategory,
  onSelectShopCategory,
}: ShopCategoryButtonsProps) {
  const insets: EdgeInsets = useSafeAreaInsets();

  return (
    <View style={styles(insets).buttonsContainer}>
      {shopCategories.map((item, index) => (
        <CustomButton
          key={index}
          hasShadow
          type={item.value === selectedShopCategory ? "outlined" : "secondary"}
          onPress={() => onSelectShopCategory(item.value)}
          icon={item.icon}
        >
          {item.label}
        </CustomButton>
      ))}
    </View>
  );
}

export default ShopCategoryButtons;

const styles = (insets: EdgeInsets) =>
  StyleSheet.create({
    buttonsContainer: {
      position: "absolute",
      top: insets.top,
      left: spacing.medium,
      flexDirection: "row",
      gap: 7,
    },
  });
