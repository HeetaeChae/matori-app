import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import queryKeys from "../../constants/queryKeys";
import {
  ResponseAllStories,
  ResponseStories,
  ResponseStoryComments,
} from "../../types/_index";

const { STORY, GET_ALL_STORIES, GET_STORIES, GET_STORY_COMMENTS } = queryKeys;

function useStory() {
  const getAllStories = (
    options?: UseQueryOptions<
      ResponseAllStories,
      AxiosError,
      ResponseAllStories,
      [typeof STORY, typeof GET_ALL_STORIES]
    >
  ) => {
    return useQuery({
      queryKey: [STORY, GET_ALL_STORIES],
      // queryFn
      ...options,
    });
  };

  const getStories = (
    options?: UseQueryOptions<
      ResponseStories,
      AxiosError,
      ResponseStories,
      [typeof STORY, typeof GET_STORIES]
    >
  ) => {
    return useQuery({
      queryKey: [STORY, GET_STORIES],
      // queryFn
      ...options,
    });
  };

  const getStoryComments = (
    options?: UseQueryOptions<
      ResponseStoryComments,
      AxiosError,
      ResponseStoryComments,
      [typeof STORY, typeof GET_STORY_COMMENTS]
    >
  ) => {
    return useQuery({
      queryKey: [STORY, GET_STORY_COMMENTS],
      // queryFn,
      ...options,
    });
  };
}
