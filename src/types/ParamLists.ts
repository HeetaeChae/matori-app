import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
import navigations from "../constants/navigations";

export type HomeStackParamList = {
  [navigations.HOME]: undefined;
  [navigations.SHOP_INFO]: undefined;
};
export type HomeStackNavigationProp = StackNavigationProp<HomeStackParamList>;

export type ProfileStackParamList = {
  [navigations.PROFILE]: undefined;
  [navigations.EDIT_PROFILE]: undefined;
  [navigations.FOLLOW]: undefined;
  [navigations.COMMENT]: undefined;
};
export type ProfileStackNavigationProp =
  StackNavigationProp<ProfileStackParamList>;

export type StoryStackParamList = {
  [navigations.STORY]: undefined;
  [navigations.EDIT_STORY]: undefined;
  [navigations.SHOP_INFO]: undefined;
  [navigations.COMMENT]: undefined;
  [navigations.CAMERA]: undefined;
};
export type StoryStackNavigationProp = StackNavigationProp<StoryStackParamList>;

export type BottomTabParamList = {
  [navigations.HOME_STACK]: undefined;
  [navigations.STORY_STACK]: undefined;
  [navigations.PROFILE_STACK]: undefined;
  [navigations.SETTINGS]: undefined;
};
export type BottomTabNavigationProps =
  BottomTabNavigationProp<BottomTabParamList>;
