import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import {
  RequestGetMarkersByUserId,
  RequestGetMarkerByStoryId,
  ResponseGetMarkers,
  ResponseCreateMarker,
  RequestCreateMarker,
  ResponseDeleteMarker,
  RequestDeleteMarker,
  RequestGetMarkersByBoundary,
} from "../../types/api/Marker";
import { queryKeys } from "../../constants/queryKeys";
import {
  createMarkerApi,
  deleteMarkerApi,
  getAllMarkersApi,
  getMarkerApi,
  getMyMarkersApi,
  getUserMarkersApi,
} from "../../api/marker";

const {
  MARKER,
  GET_ALL_MARKERS,
  GET_MY_MARKERS,
  GET_USER_MARKERS,
  GET_MARKER,
} = queryKeys;

function useMarker() {
  const getAllMarkers = (
    params: RequestGetMarkersByBoundary,
    options?: UseQueryOptions<
      ResponseGetMarkers,
      AxiosError,
      ResponseGetMarkers,
      [typeof MARKER, typeof GET_ALL_MARKERS, typeof params.boundary]
    >
  ) => {
    return useQuery({
      queryKey: [MARKER, GET_ALL_MARKERS, params.boundary],
      queryFn: () => getAllMarkersApi(params),
      ...options,
    });
  };

  const getMyMarkers = (
    params: RequestGetMarkersByBoundary,
    options?: UseQueryOptions<
      ResponseGetMarkers,
      AxiosError,
      ResponseGetMarkers,
      [typeof MARKER, typeof GET_MY_MARKERS, typeof params.boundary]
    >
  ) => {
    return useQuery({
      queryKey: [MARKER, GET_MY_MARKERS, params.boundary],
      queryFn: () => getMyMarkersApi(params),
      ...options,
    });
  };

  const getUserMarkers = (
    params: RequestGetMarkersByUserId & RequestGetMarkersByBoundary,
    options?: UseQueryOptions<
      ResponseGetMarkers,
      AxiosError,
      ResponseGetMarkers,
      [
        typeof MARKER,
        typeof GET_USER_MARKERS,
        typeof params.userId,
        typeof params.boundary
      ]
    >
  ) => {
    return useQuery({
      queryKey: [MARKER, GET_USER_MARKERS, params.userId, params.boundary],
      queryFn: () => getUserMarkersApi(params),
      ...options,
    });
  };

  const getMarker = (
    params: RequestGetMarkerByStoryId & RequestGetMarkersByBoundary,
    options?: UseQueryOptions<
      ResponseGetMarkers,
      AxiosError,
      ResponseGetMarkers,
      [
        typeof MARKER,
        typeof GET_MARKER,
        typeof params.storyId,
        typeof params.boundary
      ]
    >
  ) => {
    return useQuery({
      queryKey: [MARKER, GET_MARKER, params.storyId, params.boundary],
      queryFn: () => getMarkerApi(params),
      ...options,
    });
  };

  const createMarker = (
    options?: UseMutationOptions<
      ResponseCreateMarker,
      AxiosError,
      RequestCreateMarker
    >
  ) => {
    return useMutation({
      mutationFn: createMarkerApi,
      ...options,
    });
  };

  const deleteMarker = (
    options?: UseMutationOptions<
      ResponseDeleteMarker,
      AxiosError,
      RequestDeleteMarker
    >
  ) => {
    return useMutation({
      mutationFn: deleteMarkerApi,
      ...options,
    });
  };

  return {
    getAllMarkers,
    getMyMarkers,
    getUserMarkers,
    getMarker,
    createMarker,
    deleteMarker,
  };
}

export default useMarker;
