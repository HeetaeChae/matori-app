import { MutationOptions, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { likeApi, unLikeApi } from "../../api/like";
import {
  RequestLikeByUserId,
  RequestUnLikeByUserId,
  ResponseLike,
  ResponseUnLike,
} from "../../types/api/Like";

function useLike() {
  const like = (
    options?: MutationOptions<ResponseLike, AxiosError, RequestLikeByUserId>
  ) => {
    return useMutation({
      mutationFn: likeApi,
      ...options,
    });
  };

  const unLike = (
    options?: MutationOptions<ResponseUnLike, AxiosError, RequestUnLikeByUserId>
  ) => {
    return useMutation({
      mutationFn: unLikeApi,
      ...options,
    });
  };

  return { like, unLike };
}

export default useLike;
