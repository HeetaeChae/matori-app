import urls from "../constants/urls";
import {
  RequestCreateComment,
  RequestDeleteComment,
  RequestGetComments,
  RequestUpdateComment,
  ResponseCreateComment,
  ResponseDeleteComment,
  ResponseGetComments,
  ResponseUpdateComment,
} from "../types/api/Comment";
import { axiosInstance, axiosInstanceWithAccessToken } from "./axios";

const { API_COMMENT } = urls;

const getCommentsApi = async (params: RequestGetComments) => {
  const { data } = await axiosInstance.get<ResponseGetComments>(
    `${API_COMMENT}/${params.storyId}`
  );

  return data;
};

const createCommentApi = async (params: RequestCreateComment) => {
  const { data } =
    await axiosInstanceWithAccessToken.post<ResponseCreateComment>(
      `${API_COMMENT}`,
      params
    );

  return data;
};

const updateCommentApi = async (params: RequestUpdateComment) => {
  const { data } =
    await axiosInstanceWithAccessToken.patch<ResponseUpdateComment>(
      `${API_COMMENT}`,
      params
    );

  return data;
};

const deleteCommentApi = async (params: RequestDeleteComment) => {
  const { data } =
    await axiosInstanceWithAccessToken.delete<ResponseDeleteComment>(
      `${API_COMMENT}/${params.commentId}`
    );

  return data;
};

export { getCommentsApi, createCommentApi, updateCommentApi, deleteCommentApi };
