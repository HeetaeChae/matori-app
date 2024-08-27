import React from "react";
import ComponentContainer from "../components/ui/ComponentContainer";
import CustomButton from "../components/ui/CustomButton";
import ScreenContainer from "../components/ui/ScreenContainer";
import navigations from "../constants/navigations";
import { StoryStackNavigationProp } from "../types/ParamLists";

interface StoryScreenProps {
  navigation: StoryStackNavigationProp;
}

function EditStoryScreen({ navigation }: StoryScreenProps) {
  return (
    <ScreenContainer>
      <ComponentContainer>
        <CustomButton onPress={() => navigation.navigate(navigations.CAMERA)}>
          CAMERA
        </CustomButton>
        <CustomButton onPress={() => navigation.navigate(navigations.GALLERY)}>
          GALLERY
        </CustomButton>
      </ComponentContainer>
    </ScreenContainer>
  );
}

export default EditStoryScreen;
