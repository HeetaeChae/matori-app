import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./bottomTab/BottomTabNavigator";
import useLoginState from "../hooks/useLoginState";

function RootNavigator() {
  const isLoggedIn = useLoginState();

  if (isLoggedIn === null) {
    // 로딩창 띄움.
  }

  // isLoggedIn의 상태에 따라 다른 네비게이터 출력.
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

export default RootNavigator;
