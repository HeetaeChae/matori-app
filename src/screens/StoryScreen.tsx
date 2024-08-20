import React from "react";
import { Text } from "react-native";
import ComponentContainer from "../components/ui/ComponentContainer";
import CustomText from "../components/ui/CustomText";
import ScreenContainer from "../components/ui/ScreenContainer";

function StoryScreen() {
  return (
    <ScreenContainer>
      <ComponentContainer isCenter>
        <CustomText>스토리</CustomText>
      </ComponentContainer>
    </ScreenContainer>
  );
}

export default StoryScreen;
