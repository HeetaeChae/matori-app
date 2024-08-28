import urls from "../constants/urls";
import useAuth from "../hooks/queries/useAuth";
import { RequestUserStories, ResponseStories } from "../types/_index";
import { axiosInstance, axiosInstanceWithAccessToken } from "./axios";

const { API_STORY } = urls;

const getAllStoriesApi = async () => {
  const { data } = await axiosInstance.get<ResponseStories>(`${API_STORY}/all`);

  return data;
};

const getUserStoriesApi = async (params: RequestUserStories) => {
  const { data } = await axiosInstance.get<ResponseStories>(
    `${API_STORY}/user/${params.userId}`
  );

  return data;
};

const getLikedStoriesApi = async () => {
  const { data } = await axiosInstanceWithAccessToken.get<ResponseStories>(
    `${API_STORY}/liked`
  );

  return data;
};

const getFollowingStoriesApi = async () => {
  const { data } = await axiosInstanceWithAccessToken.get<ResponseStories>(
    `${API_STORY}/following`
  );

  return data;
};

export {
  getAllStoriesApi,
  getUserStoriesApi,
  getLikedStoriesApi,
  getFollowingStoriesApi,
};
