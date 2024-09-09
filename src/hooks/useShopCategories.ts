import { useState } from "react";
import { ShopCategoryValue } from "../constants/shopCategories";

function useShopCategories() {
  const [selectedShopCategory, setSelectedShopCategory] = useState<
    ShopCategoryValue | undefined
  >();

  const handleSelectShopCategory = (shopCategoryValue: ShopCategoryValue) => {
    if (selectedShopCategory === shopCategoryValue) {
      setSelectedShopCategory(undefined);
    } else {
      setSelectedShopCategory(shopCategoryValue);
    }
  };

  return { selectedShopCategory, handleSelectShopCategory };
}

export default useShopCategories;
