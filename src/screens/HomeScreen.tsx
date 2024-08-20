import React from "react";
import { Switch } from "react-native";
import ComponentContainer from "../components/ui/ComponentContainer";
import CustomButton from "../components/ui/CustomButton";
import CustomText from "../components/ui/CustomText";
import CustomView from "../components/ui/CustomView";
import ScreenContainer from "../components/ui/ScreenContainer";
import { useDarkModeStore } from "../store/useDarkModeStore";

function HomeScreen() {
  const { toggleDarkMode, isDarkMode } = useDarkModeStore();

  return (
    <ScreenContainer>
      <Switch onChange={() => toggleDarkMode()} value={isDarkMode} />
      <ComponentContainer>
        <CustomButton>primary-content</CustomButton>
        <CustomButton type="outlined">outlined-content</CustomButton>
        <CustomButton type="link">link-content</CustomButton>
        <CustomButton type="secondary">secondary-content</CustomButton>
        <CustomButton isFull>primary-full</CustomButton>
        <CustomButton isFull type="outlined">
          outlined-full
        </CustomButton>
        <CustomButton isFull type="link">
          link-full
        </CustomButton>
        <CustomButton isFull type="secondary">
          secondary-full
        </CustomButton>
      </ComponentContainer>
      <ComponentContainer>
        <CustomText isBold type="header">
          header-bold
        </CustomText>
        <CustomText isBold>body-bold</CustomText>
        <CustomText isBold type="description">
          description-bold
        </CustomText>
        <CustomText type="header">header</CustomText>
        <CustomText type="body">body</CustomText>
        <CustomText type="description">description</CustomText>
      </ComponentContainer>
      <ComponentContainer>
        <CustomView isCenter>
          <CustomText>default</CustomText>
        </CustomView>
        <CustomView type="card" isCenter styleProp={{ padding: 30 }}>
          <CustomText>card</CustomText>
        </CustomView>
      </ComponentContainer>
    </ScreenContainer>
  );
}

export default HomeScreen;
