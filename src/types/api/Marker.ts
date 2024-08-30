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
  RequestGetMarkersByUserId,
  RequestGetMarkerByStoryId,
  ResponseGetMarkers,
  RequestCreateMarker,
  ResponseCreateMarker,
  RequestDeleteMarker,
  ResponseDeleteMarker,
};
