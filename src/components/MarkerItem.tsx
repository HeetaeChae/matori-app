import { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";

import { ShopCategoryLabel } from "../constants/shopCategories";
import { Region } from "../types/Location";
import { Image } from "react-native";

type MarkerItemProps = { category: string } & Region;

function MarkerItem({ latitude, longitude, category }: MarkerItemProps) {
  return (
    <Marker coordinate={{ latitude, longitude }} title={category}>
      <Image
        source={require("../../assets/favicon.png")}
        style={{ height: 25, width: 25 }}
      />
    </Marker>
  );
}

export default MarkerItem;
