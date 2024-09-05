import React from "react";
import { Text } from "react-native";

import ScreenContainer from "../components/ui/ScreenContainer";
import { StoryStackNavigationProp } from "../types/ParamLists";

interface StoryScreenProps {
  navigation: StoryStackNavigationProp;
}

function EditStoryScreen({ navigation }: StoryScreenProps) {
  return (
    <ScreenContainer>
      <Text>edit story</Text>
    </ScreenContainer>
  );
}

export default EditStoryScreen;
