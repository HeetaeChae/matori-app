import { createStackNavigator } from "@react-navigation/stack";
import navigations from "../../constants/navigations";
import HomeScreen from "../../screens/HomeScreen";
import ShopInfoScreen from "../../screens/ShopInfoScreen";
import StoryScreen from "../../screens/StoryScreen";
import { HomeStackParamList } from "../../types/ParamLists";

const HomeStack = createStackNavigator<HomeStackParamList>();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator initialRouteName={navigations.HOME}>
      <HomeStack.Screen
        name={navigations.HOME}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen name={navigations.STORY} component={StoryScreen} />
      <HomeStack.Screen
        name={navigations.SHOP_INFO}
        component={ShopInfoScreen}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackNavigator;
