import {
  useQuery,
  UseQueryOptions,
  MutationOptions,
  useMutation,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import {
  createStoryApi,
  deleteStoryApi,
  getAllStoriesApi,
  getFollowingStoriesApi,
  getLikedStoriesApi,
  getMyStoriesApi,
  getUserStoriesApi,
  updateStoryApi,
} from "../../api/story";
import { queryKeys } from "../../constants/queryKeys";
import {
  RequestCreateStory,
  RequestDeleteStory,
  RequestGetStoriesByUserId,
  RequestUpdateStory,
  ResponseCreateStory,
  ResponseDeleteStory,
  ResponseGetStories,
  ResponseUpdateStory,
} from "../../types/api/Story";

const {
  STORY,
  GET_ALL_STORIES,
  GET_USER_STORIES,
  GET_FOLLOWING_STORIES,
  GET_LIKED_STORIES,
  GET_MY_STORIES,
} = queryKeys;

function useStory() {
  const getAllStories = async (
    options?: UseQueryOptions<
      ResponseGetStories,
      AxiosError,
      ResponseGetStories,
      [typeof STORY, typeof GET_ALL_STORIES]
    >
  ) => {
    return useQuery({
      queryKey: [STORY, GET_ALL_STORIES],
      queryFn: getAllStoriesApi,
      ...options,
    });
  };

  const getMyStories = async (
    options?: UseQueryOptions<
      ResponseGetStories,
      AxiosError,
      ResponseGetStories,
      [typeof STORY, typeof GET_MY_STORIES]
    >
  ) => {
    return useQuery({
      queryKey: [STORY, GET_MY_STORIES],
      queryFn: getMyStoriesApi,
      ...options,
    });
  };

  const getUserStories = async (
    params: RequestGetStoriesByUserId,
    options?: UseQueryOptions<
      ResponseGetStories,
      AxiosError,
      ResponseGetStories,
      [typeof STORY, typeof GET_USER_STORIES, typeof params.userId]
    >
  ) => {
    return useQuery({
      queryKey: [STORY, GET_USER_STORIES, params.userId],
      queryFn: () => getUserStoriesApi(params),
      ...options,
    });
  };

  const getFollowingStories = async (
    options?: UseQueryOptions<
      ResponseGetStories,
      AxiosError,
      ResponseGetStories,
      [typeof STORY, typeof GET_FOLLOWING_STORIES]
    >
  ) => {
    return useQuery({
      queryKey: [STORY, GET_FOLLOWING_STORIES],
      queryFn: getFollowingStoriesApi,
      ...options,
    });
  };

  const getLikedStories = async (
    options?: UseQueryOptions<
      ResponseGetStories,
      AxiosError,
      ResponseGetStories,
      [typeof STORY, typeof GET_LIKED_STORIES]
    >
  ) => {
    return useQuery({
      queryKey: [STORY, GET_LIKED_STORIES],
      queryFn: getLikedStoriesApi,
      ...options,
    });
  };

  const createStory = async (
    options?: MutationOptions<
      ResponseCreateStory,
      AxiosError,
      RequestCreateStory
    >
  ) => {
    return useMutation({
      mutationFn: createStoryApi,
      ...options,
    });
  };

  const updateStory = async (
    options?: MutationOptions<
      ResponseUpdateStory,
      AxiosError,
      RequestUpdateStory
    >
  ) => {
    return useMutation({
      mutationFn: updateStoryApi,
      ...options,
    });
  };

  const deleteStory = async (
    options?: MutationOptions<
      ResponseDeleteStory,
      AxiosError,
      RequestDeleteStory
    >
  ) => {
    return useMutation({
      mutationFn: deleteStoryApi,
      ...options,
    });
  };

  return {
    getAllStories,
    getMyStories,
    getFollowingStories,
    getLikedStories,
    getUserStories,
    createStory,
    updateStory,
    deleteStory,
  };
}

export default useStory;
