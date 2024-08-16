import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./bottomTab/BottomTabNavigator";

function RootNavigator() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

export default RootNavigator;
