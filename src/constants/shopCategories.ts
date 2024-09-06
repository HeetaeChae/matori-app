const shopCategories = {
  ALL: "전체",
  RESTAURANT: "음식점",
  PUB: "주점",
  CAFE: "카페",
} as const;

type ShopCategory = (typeof shopCategories)[keyof typeof shopCategories];

export { shopCategories, ShopCategory };
