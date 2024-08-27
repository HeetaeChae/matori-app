import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  RequestLogin,
  RequestProfile,
  RequestSignup,
  ResponseAccessToken,
  ResponseLogin,
  ResponseProfile,
  ResponseSigntup,
} from "../types/api/Auth";
import { axiosInstance, axiosInstanceWithAccessToken } from "./axios";

const getProfile = async ({ email }: RequestProfile) => {
  const { data } = await axiosInstanceWithAccessToken.get<ResponseProfile>(
    `/api/auth/profile/:${email}`
  );

  return data;
};

const login = async ({ email, password }: RequestLogin) => {
  const { data } = await axiosInstance.post<ResponseLogin>("/api/auth/login", {
    email,
    password,
  });

  return data;
};

const signup = async ({ email, password, nickname }: RequestSignup) => {
  const { data } = await axiosInstance.post<ResponseSigntup>(
    "/api/auth/signup",
    {
      email,
      password,
      nickname,
    }
  );

  return data;
};

const getAccessToken = async () => {
  const refreshToken = await AsyncStorage.getItem("refresh-token");
  const { data } = await axiosInstance.get<ResponseAccessToken>(
    "/api/auth/accessToken",
    {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    }
  );

  return data;
};

export { getProfile, login, signup, getAccessToken };
