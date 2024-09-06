import { StyleSheet, View } from "react-native";
import { shopCategories, ShopCategory } from "../constants/shopCategories";
import CustomButton from "./ui/CustomButton";

interface ShopCategoryButtonsProps {
  shopCategory: ShopCategory;
  onSelectShopCategory: (newShopCategory: ShopCategory) => void;
}

function ShopCategoryButtons({
  shopCategory,
  onSelectShopCategory,
}: ShopCategoryButtonsProps) {
  return (
    <View style={styles.view}>
      <CustomButton
        type={shopCategory === shopCategories.ALL ? "outlined" : "secondary"}
        hasShadow
        onPress={() => onSelectShopCategory(shopCategories.ALL)}
      >
        ALL 전체
      </CustomButton>
      <CustomButton
        type={
          shopCategory === shopCategories.RESTAURANT ? "outlined" : "secondary"
        }
        icon="fast-food"
        hasShadow
        onPress={() => onSelectShopCategory(shopCategories.RESTAURANT)}
      >
        음식점
      </CustomButton>
      <CustomButton
        type={shopCategory === shopCategories.PUB ? "outlined" : "secondary"}
        icon="beer"
        hasShadow
        onPress={() => onSelectShopCategory(shopCategories.PUB)}
      >
        주점
      </CustomButton>
      <CustomButton
        type={shopCategory === shopCategories.CAFE ? "outlined" : "secondary"}
        icon="cafe"
        hasShadow
        onPress={() => onSelectShopCategory(shopCategories.CAFE)}
      >
        카페
      </CustomButton>
    </View>
  );
}

export default ShopCategoryButtons;

const styles = StyleSheet.create({
  view: { flexDirection: "row", gap: 7, zIndex: 1 },
});
