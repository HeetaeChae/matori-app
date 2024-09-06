import { urls } from "../constants/urls";
import {
  RequestCreateStory,
  RequestDeleteStory,
  RequestGetStoriesByUserId,
  RequestUpdateStory,
  ResponseCreateStory,
  ResponseDeleteStory,
  ResponseGetStories,
  ResponseUpdateStory,
} from "../types/api/Story";
import { axiosInstance, axiosInstanceWithAccessToken } from "../network/_index";

const { API_STORY } = urls;

const getAllStoriesApi = async () => {
  const { data } = await axiosInstance.get<ResponseGetStories>(
    `${API_STORY}/all`
  );

  return data;
};

const getUserStoriesApi = async (params: RequestGetStoriesByUserId) => {
  const { data } = await axiosInstance.get<ResponseGetStories>(
    `${API_STORY}/user/${params.userId}`
  );

  return data;
};

const getMyStoriesApi = async () => {
  const { data } = await axiosInstance.get<ResponseGetStories>(
    `${API_STORY}/my`
  );

  return data;
};

const getLikedStoriesApi = async () => {
  const { data } = await axiosInstanceWithAccessToken.get<ResponseGetStories>(
    `${API_STORY}/liked`
  );

  return data;
};

const getFollowingStoriesApi = async () => {
  const { data } = await axiosInstanceWithAccessToken.get<ResponseGetStories>(
    `${API_STORY}/following`
  );

  return data;
};

const createStoryApi = async (params: RequestCreateStory) => {
  const { data } = await axiosInstanceWithAccessToken.post<ResponseCreateStory>(
    `${API_STORY}`,
    params
  );

  return data;
};

const updateStoryApi = async (params: RequestUpdateStory) => {
  const { data } =
    await axiosInstanceWithAccessToken.patch<ResponseUpdateStory>(
      `${API_STORY}`,
      params
    );

  return data;
};

const deleteStoryApi = async (params: RequestDeleteStory) => {
  const { data } =
    await axiosInstanceWithAccessToken.delete<ResponseDeleteStory>(
      `${API_STORY}/${params.storyId}`
    );

  return data;
};

export {
  getAllStoriesApi,
  getMyStoriesApi,
  getUserStoriesApi,
  getLikedStoriesApi,
  getFollowingStoriesApi,
  createStoryApi,
  updateStoryApi,
  deleteStoryApi,
};
