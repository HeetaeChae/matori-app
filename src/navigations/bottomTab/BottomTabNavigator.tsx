import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import navigations from "../../constants/navigations";
import SettingsScreen from "../../screens/SettingsScreen";
import { BottomTabParamList } from "../../types/ParamLists";
import HomeStackNavigator from "../stack/HomeStackNavigator";
import ProfileStackNavigator from "../stack/ProfileStackNavigator";
import StoryStackNavigator from "../stack/StoryStackNavigator";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName={navigations.HOME_STACK}
      screenOptions={{ headerShown: false }}
    >
      <BottomTab.Screen
        name={navigations.HOME_STACK}
        component={HomeStackNavigator}
        options={{ tabBarShowLabel: false }}
      />
      <BottomTab.Screen
        name={navigations.PROFILE_STACK}
        component={ProfileStackNavigator}
        options={{ tabBarShowLabel: false }}
      />
      <BottomTab.Screen
        name={navigations.STORY_STACK}
        component={StoryStackNavigator}
        options={{ tabBarShowLabel: false }}
      />
      <BottomTab.Screen
        name={navigations.SETTINGS}
        component={SettingsScreen}
        options={{ tabBarShowLabel: false }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
