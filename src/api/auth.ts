import AsyncStorage from "@react-native-async-storage/async-storage";
import urls from "../constants/urls";
import {
  RequestLogin,
  RequestProfile,
  RequestSignup,
  ResponseAccessToken,
  ResponseLogin,
  ResponseProfile,
  ResponseSignup,
} from "../types/api/Auth";
import { axiosInstance, axiosInstanceWithAccessToken } from "./axios";

const { API_AUTH } = urls;

const getProfileApi = async (params: RequestProfile) => {
  const { data } = await axiosInstanceWithAccessToken.get<ResponseProfile>(
    `${API_AUTH}/profile/${params.userId}`
  );

  return data;
};

const loginApi = async ({ email, password }: RequestLogin) => {
  const { data } = await axiosInstance.post<ResponseLogin>(
    `${API_AUTH}/login`,
    {
      email,
      password,
    }
  );

  return data;
};

const signupApi = async ({ email, password, nickname }: RequestSignup) => {
  const { data } = await axiosInstance.post<ResponseSignup>(
    `${API_AUTH}/signup`,
    {
      email,
      password,
      nickname,
    }
  );

  return data;
};

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

const logoutApi = async () => {
  const accessToken =
    axiosInstanceWithAccessToken.defaults.headers.common["Authorization"];
  if (accessToken) {
    delete axiosInstanceWithAccessToken.defaults.headers.common[
      "Authorization"
    ];
  }
};

export { getProfileApi, loginApi, signupApi, getAccessTokenApi, logoutApi };
