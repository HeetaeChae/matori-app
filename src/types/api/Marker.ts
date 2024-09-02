import { Boundary } from "../Location";

interface RequestGetMarkersByBoundary {
  boundary: Boundary;
}

interface RequestGetMarkersByUserId {
  userId: number;
}

interface RequestGetMarkerByStoryId {
  storyId: number;
}

interface ResponseGetMarkers {}

interface RequestCreateMarker {}

interface ResponseCreateMarker {}

interface RequestDeleteMarker {
  markerId: number;
}

interface ResponseDeleteMarker {}

export {
  Boundary,
  RequestGetMarkersByBoundary,
  RequestGetMarkersByUserId,
  RequestGetMarkerByStoryId,
  ResponseGetMarkers,
  RequestCreateMarker,
  ResponseCreateMarker,
  RequestDeleteMarker,
  ResponseDeleteMarker,
};
