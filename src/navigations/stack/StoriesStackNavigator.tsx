import { createStackNavigator } from "@react-navigation/stack";
import { StoriesStackParamList } from "../../types/ParamLists";

import navigations from "../../constants/navigations";
import CameraScreen from "../../screens/CameraScreen";
import CommentScreen from "../../screens/CommentScreen";
import EditStoryScreen from "../../screens/EditStoryScreen";
import GalleryScreen from "../../screens/GalleryScreen";
import ShopInfoScreen from "../../screens/ShopInfoScreen";
import StoryScreen from "../../screens/StoryScreen";
import StoriesScreen from "../../screens/StoriesScreen";

const StoriesStack = createStackNavigator<StoriesStackParamList>();

function StoryStackNavigator() {
  return (
    <StoriesStack.Navigator
      initialRouteName={navigations.STORY}
      screenOptions={{ headerShown: false }}
    >
      <StoriesStack.Screen
        name={navigations.STORIES}
        component={StoriesScreen}
      />
      <StoriesStack.Screen name={navigations.STORY} component={StoryScreen} />
      <StoriesStack.Screen
        name={navigations.EDIT_STORY}
        component={EditStoryScreen}
      />
      <StoriesStack.Screen
        name={navigations.COMMENT}
        component={CommentScreen}
      />
      <StoriesStack.Screen
        name={navigations.SHOP_INFO}
        component={ShopInfoScreen}
      />
      <StoriesStack.Screen name={navigations.CAMERA} component={CameraScreen} />
      <StoriesStack.Screen
        name={navigations.GALLERY}
        component={GalleryScreen}
      />
    </StoriesStack.Navigator>
  );
}

export default StoryStackNavigator;
