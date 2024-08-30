import AsyncStorage from "@react-native-async-storage/async-storage";
import { urls } from "../constants/urls";
import {
  RequestLogin,
  RequestProfile,
  RequestSignup,
  ResponseLogin,
  ResponseProfile,
  ResponseSignup,
} from "../types/api/Auth";

import { axiosInstance, axiosInstanceWithAccessToken } from "../network/_index";

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

export { getProfileApi, loginApi, signupApi };
