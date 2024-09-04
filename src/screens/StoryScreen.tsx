import React from "react";
import { FlatList, Image } from "react-native";
import * as MediaLibrary from "expo-media-library";

import ComponentContainer from "../components/ui/ComponentContainer";
import CustomButton from "../components/ui/CustomButton";
import CustomView from "../components/ui/CustomView";
import ScreenContainer from "../components/ui/ScreenContainer";
import navigations from "../constants/navigations";
import useMediaLibrary from "../hooks/useMediaLibrary";
import { useAppStateStatusStore } from "../store/useAppStateStatusStore";
import { StoryStackNavigationProp } from "../types/ParamLists";

interface StoryScreenProps {
  navigation: StoryStackNavigationProp;
}

function StoryScreen({ navigation }: StoryScreenProps) {
  const { appStateStatus } = useAppStateStatusStore();
  const {
    photos,
    selectedPhotos,
    endCursor,
    hasNextPage,
    handleFetchPhotos,
    handleSelectPhoto,
  } = useMediaLibrary(appStateStatus);

  console.log("photos:", photos);
  console.log("selectedPhotos", selectedPhotos, selectedPhotos.length);
  console.log("hasNextPage:", hasNextPage);
  console.log("endCursor:", endCursor);
  console.log("사진 개수:", photos.length);

  return (
    <ScreenContainer>
      <ComponentContainer>
        <CustomButton
          onPress={() => navigation.navigate(navigations.EDIT_STORY)}
        >
          Edit Story
        </CustomButton>
        <CustomButton onPress={() => handleFetchPhotos(endCursor)}>
          Photo test
        </CustomButton>
      </ComponentContainer>
      <FlatList
        data={photos}
        onEndReached={() => handleFetchPhotos(endCursor)}
        onEndReachedThreshold={0.1}
        renderItem={(item) => {
          return (
            <CustomButton onPress={() => handleSelectPhoto(item.item)}>
              {item.item.filename}
            </CustomButton>
          );
        }}
      />
    </ScreenContainer>
  );
}

export default StoryScreen;
