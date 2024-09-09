type ShopCategoryLabel = "음식점" | "주점" | "카페";
type ShopCategoryValue = "restaurant" | "pub" | "cafe";
type ShopCategoryIcon = "restaurant" | "beer" | "cafe";

interface ShopCategory {
  label: ShopCategoryLabel;
  value: ShopCategoryValue;
  icon: ShopCategoryIcon;
}

const shopCategories: ShopCategory[] = [
  {
    label: "음식점",
    value: "restaurant",
    icon: "restaurant",
  },
  {
    label: "주점",
    value: "pub",
    icon: "beer",
  },
  {
    label: "카페",
    value: "cafe",
    icon: "cafe",
  },
] as const;

export { shopCategories, ShopCategory, ShopCategoryLabel, ShopCategoryValue };
