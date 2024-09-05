import React from "react";
import { Text } from "react-native";

import ScreenContainer from "../components/ui/ScreenContainer";
import { StoryStackNavigationProp } from "../types/ParamLists";

interface StoryScreenProps {
  navigation: StoryStackNavigationProp;
}

function StoryScreen({ navigation }: StoryScreenProps) {
  return (
    <ScreenContainer>
      <Text>Story</Text>
    </ScreenContainer>
  );
}

export default StoryScreen;
