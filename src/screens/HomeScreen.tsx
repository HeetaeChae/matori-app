import React from "react";
import { Switch } from "react-native";
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
      <CustomView type="card" hasPadding isCenter>
        <CustomText>dd</CustomText>
        <CustomText>dd</CustomText>
      </CustomView>
      <CustomButton icon="add-circle">primary</CustomButton>
      <CustomButton type="outlined" styleProp={{ margin: 10 }}>
        outlined
      </CustomButton>
      <CustomButton type="secondary" hasShadow styleProp={{ margin: 10 }}>
        secondary
      </CustomButton>
      <CustomButton type="link" styleProp={{ margin: 10 }}>
        link
      </CustomButton>
      <CustomButton type="borderedSecondary" styleProp={{ margin: 10 }}>
        borderedSecondary
      </CustomButton>
      <CustomButton isFull styleProp={{ margin: 10 }}>
        primary
      </CustomButton>
      <CustomButton type="outlined" isFull styleProp={{ margin: 10 }}>
        outlined
      </CustomButton>
      <CustomButton type="secondary" isFull styleProp={{ margin: 10 }}>
        secondary
      </CustomButton>
      <CustomButton type="link" isFull styleProp={{ margin: 10 }}>
        link
      </CustomButton>
      <CustomButton type="borderedSecondary" isFull styleProp={{ margin: 10 }}>
        borderedSecondary
      </CustomButton>
    </ScreenContainer>
  );
}

export default HomeScreen;
