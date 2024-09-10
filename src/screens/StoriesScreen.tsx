import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Text } from "react-native";

import ScreenContainer from "../components/ui/ScreenContainer";
import navigations from "../constants/navigations";
import { StoriesStackParamList } from "../types/ParamLists";

export type StoriesScreenProps = StackScreenProps<
  StoriesStackParamList,
  typeof navigations.STORIES
>;

function StoriesScreen({ navigation }: StoriesScreenProps) {
  return (
    <ScreenContainer>
      <Text>Stories</Text>
    </ScreenContainer>
  );
}

export default StoriesScreen;
