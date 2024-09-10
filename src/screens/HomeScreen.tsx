import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import BoundaryMap from "../components/BoundaryMap";
import navigations from "../constants/navigations";
import { HomeStackParamList } from "../types/ParamLists";

export type HomeScreenProps = StackScreenProps<
  HomeStackParamList,
  typeof navigations.HOME
>;

function HomeScreen({ navigation }: HomeScreenProps) {
  return <BoundaryMap />;
}

export default HomeScreen;
