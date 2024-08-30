import AsyncStorage from "@react-native-async-storage/async-storage";
import { axiosInstance } from "../network/axiosInstance";
import { ResponseAccessToken } from "../types/_index";
import { urls } from "../constants/urls";

const { API_AUTH } = urls;

const getAccessTokenApi = async () => {
  const refreshToken = await AsyncStorage.getItem("refresh-token");
  const { data } = await axiosInstance.get<ResponseAccessToken>(
    `${API_AUTH}/accessToken`,
    {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    }
  );

  return data;
};

export default getAccessTokenApi;
