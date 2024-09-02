import {
  Boundary,
  RequestCreateMarker,
  RequestDeleteMarker,
  RequestGetMarkerByStoryId,
  RequestGetMarkersByBoundary,
  RequestGetMarkersByUserId,
  ResponseCreateMarker,
  ResponseDeleteMarker,
  ResponseGetMarkers,
} from "../types/api/Marker";
import { urls } from "../constants/urls";

import { axiosInstance, axiosInstanceWithAccessToken } from "../network/_index";

const { API_MARKER } = urls;

const boundaryUrl = (boundary: Boundary) => {
  return `northEastLat=${boundary.northEast.latitude}&northEastLng=${boundary.northEast.longitude}&southWestLat=${boundary.southWest.latitude}&southWestLng=${boundary.southWest.longitude}`;
};

const getAllMarkersApi = async (params: RequestGetMarkersByBoundary) => {
  const { data } = await axiosInstance.get<ResponseGetMarkers>(
    `${API_MARKER}/all?${boundaryUrl(params.boundary)}`
  );

  return data;
};

const getMyMarkersApi = async (params: RequestGetMarkersByBoundary) => {
  const { data } = await axiosInstanceWithAccessToken.get<ResponseGetMarkers>(
    `${API_MARKER}/my?${boundaryUrl(params.boundary)}}`
  );

  return data;
};

const getUserMarkersApi = async (
  params: RequestGetMarkersByUserId & RequestGetMarkersByBoundary
) => {
  const { data } = await axiosInstance.get<ResponseGetMarkers>(
    `${API_MARKER}/${params.userId}/user?${boundaryUrl(params.boundary)}`
  );

  return data;
};

const getMarkerApi = async (
  params: RequestGetMarkerByStoryId & RequestGetMarkersByBoundary
) => {
  const { data } = await axiosInstance.get<ResponseGetMarkers>(
    `${API_MARKER}/${params.storyId}/story?${boundaryUrl(params.boundary)}`
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
  getMarkerApi,
  createMarkerApi,
  deleteMarkerApi,
};
