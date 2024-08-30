import { urls } from "../constants/urls";
import { axiosInstanceWithAccessToken } from "../network/axiosInstanceWithAccessToken";
import { RequestLikeByUserId, RequestUnLikeByUserId } from "../types/api/Like";

const { API_LIKE } = urls;

const likeApi = async (params: RequestLikeByUserId) => {
  const { data } = await axiosInstanceWithAccessToken.post(
    `${API_LIKE}`,
    params
  );

  return data;
};

const unLikeApi = async (params: RequestUnLikeByUserId) => {
  const { data } = await axiosInstanceWithAccessToken.delete(
    `${API_LIKE}/${params.userId}`
  );

  return data;
};

export { likeApi, unLikeApi };
