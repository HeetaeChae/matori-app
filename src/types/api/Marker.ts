interface RequestGetMarkersByUserId {
  userId: number;
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
  ResponseGetMarkers,
  RequestCreateMarker,
  ResponseCreateMarker,
  RequestDeleteMarker,
  ResponseDeleteMarker,
};
