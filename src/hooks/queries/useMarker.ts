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
    options?: UseQueryOptions<
      ResponseGetMarkers,
      AxiosError,
      ResponseGetMarkers,
      [typeof MARKER, typeof GET_ALL_MARKERS]
    >
  ) => {
    return useQuery({
      queryKey: [MARKER, GET_ALL_MARKERS],
      queryFn: getAllMarkersApi,
      ...options,
    });
  };

  const getMyMarkers = (
    options?: UseQueryOptions<
      ResponseGetMarkers,
      AxiosError,
      ResponseGetMarkers,
      [typeof MARKER, typeof GET_MY_MARKERS]
    >
  ) => {
    return useQuery({
      queryKey: [MARKER, GET_MY_MARKERS],
      queryFn: getMyMarkersApi,
      ...options,
    });
  };

  const getUserMarkers = (
    params: RequestGetMarkersByUserId,
    options?: UseQueryOptions<
      ResponseGetMarkers,
      AxiosError,
      ResponseGetMarkers,
      [typeof MARKER, typeof GET_USER_MARKERS, typeof params.userId]
    >
  ) => {
    return useQuery({
      queryKey: [MARKER, GET_USER_MARKERS, params.userId],
      queryFn: () => getUserMarkersApi(params),
      ...options,
    });
  };

  const getMarker = (
    params: RequestGetMarkerByStoryId,
    options?: UseQueryOptions<
      ResponseGetMarkers,
      AxiosError,
      ResponseGetMarkers,
      [typeof MARKER, typeof GET_MARKER, typeof params.storyId]
    >
  ) => {
    return useQuery({
      queryKey: [MARKER, GET_MARKER, params.storyId],
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
