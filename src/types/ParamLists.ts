import navigations from "../constants/navigations";

export type HomeStackParamList = {
  [navigations.HOME]: undefined;
  [navigations.SHOP_INFO]: undefined;
  [navigations.STORY]: undefined;
};

export type ProfileStackParamList = {
  [navigations.PROFILE]: undefined;
  [navigations.EDIT_PROFILE]: undefined;
  [navigations.FOLLOW]: undefined;
  [navigations.COMMENT]: undefined;
};

export type StoriesStackParamList = {
  [navigations.STORIES]: undefined;
  [navigations.STORY]: undefined;
  [navigations.EDIT_STORY]: undefined;
  [navigations.SHOP_INFO]: undefined;
  [navigations.COMMENT]: undefined;
  [navigations.CAMERA]: undefined;
  [navigations.GALLERY]: undefined;
};

export type BottomTabParamList = {
  [navigations.HOME_STACK]: undefined;
  [navigations.STORY_STACK]: undefined;
  [navigations.PROFILE_STACK]: undefined;
  [navigations.SETTINGS]: undefined;
};
