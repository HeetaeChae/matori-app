import React from "react";
import { Text } from "react-native";
import ComponentContainer from "../components/ui/ComponentContainer";
import CustomText from "../components/ui/CustomText";
import ScreenContainer from "../components/ui/ScreenContainer";
import useMediaLibrary from "../hooks/useMediaLibrary";

function StoryScreen() {
  useMediaLibrary();

  return (
    <ScreenContainer>
      <ComponentContainer>
        <CustomText>스토리</CustomText>
      </ComponentContainer>
    </ScreenContainer>
  );
}

export default StoryScreen;
