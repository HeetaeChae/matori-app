import {
  MutationOptions,
  useMutation,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import {
  createCommentApi,
  getCommentsApi,
  updateCommentApi,
  deleteCommentApi,
} from "../../api/comments";
import queryKeys from "../../constants/queryKeys";
import {
  RequestCreateComment,
  RequestDeleteComment,
  RequestGetComments,
  RequestUpdateComment,
  ResponseCreateComment,
  ResponseDeleteComment,
  ResponseGetComments,
  ResponseUpdateComment,
} from "../../types/api/Comment";

function useComment() {
  const { COMMENT, GET_COMMENTS } = queryKeys;

  const getComments = async (
    params: RequestGetComments,
    options?: UseQueryOptions<
      ResponseGetComments,
      AxiosError,
      ResponseGetComments,
      [typeof COMMENT, typeof GET_COMMENTS, typeof params.storyId]
    >
  ) => {
    return useQuery({
      queryKey: [COMMENT, GET_COMMENTS, params.storyId],
      queryFn: () => getCommentsApi(params),
      ...options,
    });
  };

  const createComment = async (
    options?: MutationOptions<
      ResponseCreateComment,
      AxiosError,
      RequestCreateComment
    >
  ) => {
    return useMutation({
      mutationFn: createCommentApi,
      ...options,
    });
  };

  const updateComment = async (
    options?: MutationOptions<
      ResponseUpdateComment,
      AxiosError,
      RequestUpdateComment
    >
  ) => {
    return useMutation({
      mutationFn: updateCommentApi,
      ...options,
    });
  };

  const deleteComment = async (
    options?: MutationOptions<
      ResponseDeleteComment,
      AxiosError,
      RequestDeleteComment
    >
  ) => {
    return useMutation({
      mutationFn: deleteCommentApi,
      ...options,
    });
  };

  return { getComments, createComment, updateComment, deleteComment };
}

export default useComment;
