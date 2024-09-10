import { StackScreenProps } from "@react-navigation/stack";
import React, { useLayoutEffect } from "react";
import { Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import CustomView from "../components/ui/CustomView";
import navigations from "../constants/navigations";
import { HomeStackParamList, StoriesStackParamList } from "../types/ParamLists";
import { HomeScreenProps } from "./HomeScreen";
import { StoriesScreenProps } from "./StoriesScreen";

export type StoryScreenProps = StackScreenProps<
  HomeStackParamList | StoriesStackParamList,
  typeof navigations.STORY
>;

function StoryScreen({ navigation }: StoryScreenProps) {
  useLayoutEffect(() => {
    navigation.setOptions({ headerBackTitleVisible: false, title: "스토리" });
  }, [navigation]);

  return (
    <CustomView hasPadding styleProp={{ flex: 1 }}>
      <Text>Story</Text>
    </CustomView>
  );
}

export default StoryScreen;
