import useAuth from "../hooks/queries/useAuth";
import { ResponseStories } from "../types/_index";
import { axiosInstanceWithAccessToken } from "./axios";

const getAllStories = async () => {
  const { data } = await axiosInstanceWithAccessToken.get<ResponseStories>(
    "/api/story/all"
  );

  return data;
};
