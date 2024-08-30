import {
  MutationOptions,
  useMutation,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import {
  RequestFollowByUserId,
  RequestUnFollowByUserId,
  ResponseFollow,
  ResponseGetFollowers,
  ResponseGetFollowings,
  ResponseUnFollow,
} from "../../types/api/Follow";
import { queryKeys } from "../../constants/queryKeys";
import { followApi, getFollowingsApi, unFollowApi } from "../../api/follow";

const { FOLLOW, GET_FOLLOWINGS, GET_FOLLOWERS } = queryKeys;

function useFollow() {
  const getFollowings = (
    options?: UseQueryOptions<
      ResponseGetFollowings,
      AxiosError,
      ResponseGetFollowings,
      [typeof FOLLOW, typeof GET_FOLLOWINGS]
    >
  ) => {
    return useQuery({
      queryKey: [FOLLOW, GET_FOLLOWINGS],
      queryFn: getFollowingsApi,
      ...options,
    });
  };

  const getFollowers = (
    options?: UseQueryOptions<
      ResponseGetFollowers,
      AxiosError,
      ResponseGetFollowers,
      [typeof FOLLOW, typeof GET_FOLLOWERS]
    >
  ) => {
    return useQuery({
      queryKey: [FOLLOW, GET_FOLLOWERS],
      queryFn: getFollowingsApi,
      ...options,
    });
  };

  const follow = (
    options?: MutationOptions<ResponseFollow, AxiosError, RequestFollowByUserId>
  ) => {
    return useMutation({
      mutationFn: followApi,
      ...options,
    });
  };

  const unFollow = (
    options?: MutationOptions<
      ResponseUnFollow,
      AxiosError,
      RequestUnFollowByUserId
    >
  ) => {
    return useMutation({
      mutationFn: unFollowApi,
      ...options,
    });
  };

  return { getFollowings, getFollowers, follow, unFollow };
}

export default useFollow;
