import {
  MutationOptions,
  useMutation,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useLoginStateStore } from "../../store/useLoginStateStore";

import queryKeys from "../../constants/queryKeys";
import { getProfileApi, loginApi, logoutApi, signupApi } from "../../api/auth";
import {
  RequestLogin,
  RequestProfile,
  RequestSignup,
  ResponseLogin,
  ResponseProfile,
  ResponseSignup,
} from "../../types/api/Auth";
import {
  removeAccessToken,
  removeRefreshToken,
  setAccessToken,
  setRefreshToken,
} from "../../utils/handleStorageToken";

const { AUTH, GET_PROFILE } = queryKeys;

function useAuth() {
  const { handleLoginState } = useLoginStateStore((state) => state);

  const useGetProfile = (
    params: RequestProfile,
    options?: UseQueryOptions<
      ResponseProfile,
      AxiosError,
      ResponseProfile,
      [typeof AUTH, typeof GET_PROFILE, typeof params.userId]
    >
  ) => {
    return useQuery({
      queryKey: [AUTH, GET_PROFILE, params.userId],
      queryFn: () => getProfileApi(params),
      ...options,
    });
  };

  const useLogin = (
    options?: MutationOptions<ResponseLogin, AxiosError, RequestLogin>
  ) => {
    return useMutation({
      mutationFn: loginApi,
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
    options?: MutationOptions<ResponseSignup, AxiosError, RequestSignup>
  ) => {
    return useMutation({
      mutationFn: signupApi,
      ...options,
    });
  };

  const useLogout = (options?: MutationOptions<void, AxiosError, void>) => {
    return useMutation({
      mutationFn: logoutApi,
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
