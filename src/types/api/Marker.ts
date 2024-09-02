interface Boundary {
  northEast: {
    latitude: number;
    longitude: number;
  };
  southWest: {
    latitude: number;
    longitude: number;
  };
}

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
