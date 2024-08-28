import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getCommentsApi } from "../../api/comments";
import queryKeys from "../../constants/queryKeys";
import {
  RequestGetComments,
  ResponseGetComments,
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

  return { getComments };
}

export default useComment;
