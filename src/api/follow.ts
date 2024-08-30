import { axiosInstanceWithAccessToken } from "../network/axiosInstanceWithAccessToken";
import { urls } from "../constants/urls";
import {
  RequestFollowByUserId,
  RequestUnFollowByUserId,
  ResponseFollow,
  ResponseGetFollowers,
  ResponseGetFollowings,
  ResponseUnFollow,
} from "../types/api/Follow";

const { API_FOLLOW } = urls;

const getFollowingsApi = async () => {
  const { data } =
    await axiosInstanceWithAccessToken.get<ResponseGetFollowings>(
      `${API_FOLLOW}/following`
    );

  return data;
};

const getFollowersApi = async () => {
  const { data } = await axiosInstanceWithAccessToken.get<ResponseGetFollowers>(
    `${API_FOLLOW}/follower`
  );

  return data;
};

const followApi = async (params: RequestFollowByUserId) => {
  const { data } = await axiosInstanceWithAccessToken.post<ResponseFollow>(
    `${API_FOLLOW}`,
    params
  );

  return data;
};

const unFollowApi = async (params: RequestUnFollowByUserId) => {
  const { data } = await axiosInstanceWithAccessToken.delete<ResponseUnFollow>(
    `${API_FOLLOW}/${params.userId}`
  );

  return data;
};

export { getFollowingsApi, getFollowersApi, followApi, unFollowApi };
