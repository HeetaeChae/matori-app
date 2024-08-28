import urls from "../constants/urls";
import { RequestGetComments, ResponseGetComments } from "../types/api/Comment";
import { axiosInstance } from "./axios";

const { API_COMMENT } = urls;

const getCommentsApi = async (params: RequestGetComments) => {
  const { data } = await axiosInstance.get<ResponseGetComments>(
    `${API_COMMENT}/${params.storyId}`
  );

  return data;
};

export { getCommentsApi };
