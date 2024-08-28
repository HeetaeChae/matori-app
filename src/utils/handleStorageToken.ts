import AsyncStorage from "@react-native-async-storage/async-storage";

const setRefreshToken = async (refreshToken: string) => {
  await AsyncStorage.setItem("refresh-token", refreshToken);
};

const setAccessToken = async (accessToken: string) => {
  await AsyncStorage.setItem("access-token", accessToken);
};

const getRefreshToken = async () => {
  const token = await AsyncStorage.getItem("refresh-token");
  return token;
};

const getAccessToken = async () => {
  const token = await AsyncStorage.getItem("access-token");
  return token;
};

const removeRefreshToken = async () => {
  await AsyncStorage.removeItem("refresh-token");
};

const removeAccessToken = async () => {
  await AsyncStorage.removeItem("access-token");
};

export {
  setRefreshToken,
  setAccessToken,
  getRefreshToken,
  getAccessToken,
  removeRefreshToken,
  removeAccessToken,
};
