import {
  MutationOptions,
  useMutation,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useLoginStateStore } from "../../store/useLoginStateStore";

import queryKeys from "../../constants/queryKeys";
import { getProfile, login, logout, signup } from "../../api/auth";
import {
  RequestLogin,
  RequestProfile,
  RequestSignup,
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
import { useEffect } from "react";

const { AUTH, GET_PROFILE, LOG_OUT } = queryKeys;

function useAuth() {
  const { handleLoginState } = useLoginStateStore((state) => state);

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
        handleLoginState(true);
      },
      onError: () => {
        removeRefreshToken();
        removeAccessToken();
        handleLoginState(false);
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

  const useLogout = (options?: MutationOptions<void, AxiosError, void>) => {
    return useMutation({
      mutationFn: logout,
      onSettled: () => {
        removeRefreshToken();
        removeAccessToken();
        handleLoginState(false);
      },
      ...options,
    });
  };

  return { useGetProfile, useLogin, useSignup, useLogout };
}

export default useAuth;
