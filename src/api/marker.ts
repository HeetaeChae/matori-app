import {
  RequestCreateMarker,
  RequestDeleteMarker,
  RequestGetMarkersByUserId,
  ResponseCreateMarker,
  ResponseDeleteMarker,
  ResponseGetMarkers,
} from "../types/api/Marker";
import { axiosInstance, axiosInstanceWithAccessToken } from "./axios";
import urls from "../constants/urls";

const { API_MARKER } = urls;

const getAllMarkersApi = async () => {
  const { data } = await axiosInstance.get<ResponseGetMarkers>(
    `${API_MARKER}/all`
  );

  return data;
};

const getMyMarkersApi = async () => {
  const { data } = await axiosInstanceWithAccessToken.get<ResponseGetMarkers>(
    `${API_MARKER}/my`
  );

  return data;
};

const getUserMarkersApi = async (params: RequestGetMarkersByUserId) => {
  const { data } = await axiosInstance.get<ResponseGetMarkers>(
    `${API_MARKER}/${params.userId}`
  );

  return data;
};

const createMarkerApi = async (params: RequestCreateMarker) => {
  const { data } = await axiosInstance.post<ResponseCreateMarker>(
    `${API_MARKER}`,
    params
  );

  return data;
};

const deleteMarkerApi = async (params: RequestDeleteMarker) => {
  const { data } = await axiosInstance.delete<ResponseDeleteMarker>(
    `${API_MARKER}/${params.markerId}`
  );

  return data;
};

export {
  getAllMarkersApi,
  getMyMarkersApi,
  getUserMarkersApi,
  createMarkerApi,
  deleteMarkerApi,
};
