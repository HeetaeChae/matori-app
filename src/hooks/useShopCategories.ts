import { useState } from "react";
import { shopCategories, ShopCategory } from "../constants/shopCategories";

function useShopCategories() {
  const [shopCategory, setShopCategory] = useState<ShopCategory>(
    shopCategories.ALL
  );

  const handleSelectShopCategory = (newShopCategory: ShopCategory) => {
    setShopCategory(newShopCategory);
  };

  return { shopCategory, handleSelectShopCategory };
}

export default useShopCategories;
