import { createStackNavigator } from "@react-navigation/stack";
import navigations from "../../constants/navigations";
import CommentScreen from "../../screens/CommentScreen";
import EditProfileScreen from "../../screens/EditProfileScreen";
import FollowScreen from "../../screens/FollowScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import { ProfileStackParamList } from "../../types/ParamLists";

const ProfileStack = createStackNavigator<ProfileStackParamList>();

function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator
      initialRouteName={navigations.PROFILE}
      screenOptions={{ headerShown: false }}
    >
      <ProfileStack.Screen
        name={navigations.PROFILE}
        component={ProfileScreen}
      />
      <ProfileStack.Screen
        name={navigations.EDIT_PROFILE}
        component={EditProfileScreen}
      />
      <ProfileStack.Screen name={navigations.FOLLOW} component={FollowScreen} />
      <ProfileStack.Screen
        name={navigations.COMMENT}
        component={CommentScreen}
      />
    </ProfileStack.Navigator>
  );
}

export default ProfileStackNavigator;
