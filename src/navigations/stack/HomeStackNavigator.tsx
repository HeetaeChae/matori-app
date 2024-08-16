import { createStackNavigator } from "@react-navigation/stack";
import navigations from "../../constants/navigations";
import HomeScreen from "../../screens/HomeScreen";
import ShopInfoScreen from "../../screens/ShopInfoScreen";
import { HomeStackParamList } from "../../types/ParamLists";

const HomeStack = createStackNavigator<HomeStackParamList>();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
      initialRouteName={navigations.HOME}
      screenOptions={{ headerShown: false }}
    >
      <HomeStack.Screen name={navigations.HOME} component={HomeScreen} />
      <HomeStack.Screen
        name={navigations.SHOP_INFO}
        component={ShopInfoScreen}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackNavigator;
