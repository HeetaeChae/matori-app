import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import {
  getAllStoriesApi,
  getFollowingStoriesApi,
  getLikedStoriesApi,
  getUserStoriesApi,
} from "../../api/story";
import queryKeys from "../../constants/queryKeys";
import { RequestUserStories, ResponseStories } from "../../types/_index";

const { STORY, GET_ALL_STORIES, GET_STORIES, GET_USER_STORIES } = queryKeys;

function useStory() {
  const getAllStories = (
    options?: UseQueryOptions<
      ResponseStories,
      AxiosError,
      ResponseStories,
      [typeof STORY, typeof GET_ALL_STORIES]
    >
  ) => {
    return useQuery({
      queryKey: [STORY, GET_ALL_STORIES],
      queryFn: getAllStoriesApi,
      ...options,
    });
  };

  const getUserStories = (
    params: RequestUserStories,
    options?: UseQueryOptions<
      ResponseStories,
      AxiosError,
      ResponseStories,
      [typeof STORY, typeof GET_USER_STORIES, typeof params.userId]
    >
  ) => {
    return useQuery({
      queryKey: [STORY, GET_USER_STORIES, params.userId],
      queryFn: () => getUserStoriesApi(params),
      ...options,
    });
  };

  const getFollowingStories = (
    options?: UseQueryOptions<
      ResponseStories,
      AxiosError,
      ResponseStories,
      [typeof STORY, typeof GET_STORIES]
    >
  ) => {
    return useQuery({
      queryKey: [STORY, GET_STORIES],
      queryFn: getFollowingStoriesApi,
      ...options,
    });
  };

  const getLikedStories = (
    options?: UseQueryOptions<
      ResponseStories,
      AxiosError,
      ResponseStories,
      [typeof STORY, typeof GET_STORIES]
    >
  ) => {
    return useQuery({
      queryKey: [STORY, GET_STORIES],
      queryFn: getLikedStoriesApi,
      ...options,
    });
  };

  return {
    getAllStories,
    getFollowingStories,
    getLikedStories,
    getUserStories,
  };
}

export default useStory;
