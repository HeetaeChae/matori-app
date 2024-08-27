import {
  MutationOptions,
  QueryOptions,
  useMutation,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import queryKeys from "../../constants/queryKeys";
import { getProfile, login, signup, getAccessToken } from "../../api/auth";
import {
  RequestLogin,
  RequestProfile,
  RequestSignup,
  ResponseAccessToken,
  ResponseLogin,
  ResponseProfile,
  ResponseSigntup,
} from "../../types/api/Auth";
import {
  removeAccessToken,
  removeRefreshToken,
  setAccessToken,
  setRefreshToken,
} from "../../utils/handleToken";

const { AUTH, GET_PROFILE, GET_ACCESS_TOKEN } = queryKeys;

function useAuth() {
  const useGetProfile = (
    { email }: RequestProfile,
    options?: UseQueryOptions<
      ResponseProfile,
      AxiosError,
      ResponseProfile,
      [typeof AUTH, typeof GET_PROFILE]
    >
  ) => {
    return useQuery({
      queryKey: [AUTH, GET_PROFILE],
      queryFn: () => getProfile({ email }),
      ...options,
    });
  };

  const useLogin = (
    options?: MutationOptions<ResponseLogin, AxiosError, RequestLogin>
  ) => {
    return useMutation({
      mutationFn: login,
      onSuccess: ({ refreshToken, accessToken }) => {
        setRefreshToken(refreshToken);
        setAccessToken(accessToken);
      },
      onError: () => {
        removeRefreshToken();
        removeAccessToken();
      },
      ...options,
    });
  };

  const useSignup = (
    options?: MutationOptions<ResponseSigntup, AxiosError, RequestSignup>
  ) => {
    return useMutation({
      mutationFn: signup,
      ...options,
    });
  };

  return { useGetProfile, useLogin, useSignup };
}

export default useAuth;
