import React from "react";
import ComponentContainer from "../components/ui/ComponentContainer";
import CustomButton from "../components/ui/CustomButton";
import ScreenContainer from "../components/ui/ScreenContainer";
import navigations from "../constants/navigations";
import useMediaLibrary from "../hooks/useMediaLibrary";
import { StoryStackNavigationProp } from "../types/ParamLists";

interface StoryScreenProps {
  navigation: StoryStackNavigationProp;
}

function StoryScreen({ navigation }: StoryScreenProps) {
  useMediaLibrary();

  return (
    <ScreenContainer>
      <ComponentContainer>
        <CustomButton
          onPress={() => navigation.navigate(navigations.EDIT_STORY)}
        >
          Edit Story
        </CustomButton>
      </ComponentContainer>
    </ScreenContainer>
  );
}

export default StoryScreen;
