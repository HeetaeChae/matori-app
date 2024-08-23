import { createStackNavigator } from "@react-navigation/stack";
import navigations from "../../constants/navigations";
import CameraScreen from "../../screens/CameraScreen";
import CommentScreen from "../../screens/CommentScreen";
import EditStoryScreen from "../../screens/EditStoryScreen";
import ShopInfoScreen from "../../screens/ShopInfoScreen";
import StoryScreen from "../../screens/StoryScreen";
import { StoryStackParamList } from "../../types/ParamLists";

const StoryStack = createStackNavigator<StoryStackParamList>();

function StoryStackNavigator() {
  return (
    <StoryStack.Navigator
      initialRouteName={navigations.STORY}
      screenOptions={{ headerShown: false }}
    >
      <StoryStack.Screen name={navigations.STORY} component={StoryScreen} />
      <StoryStack.Screen
        name={navigations.EDIT_STORY}
        component={EditStoryScreen}
      />
      <StoryStack.Screen name={navigations.COMMENT} component={CommentScreen} />
      <StoryStack.Screen
        name={navigations.SHOP_INFO}
        component={ShopInfoScreen}
      />
      <StoryStack.Screen name={navigations.CAMERA} component={CameraScreen} />
    </StoryStack.Navigator>
  );
}

export default StoryStackNavigator;
