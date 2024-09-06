const queryKeys = {
  // auth
  AUTH: "auth",
  GET_PROFILE: "getProfile",
  GET_ACCESS_TOKEN: "getAccessToken",
  LOG_OUT: "logout",
  // story
  STORY: "story",
  GET_ALL_STORIES: "getAllStories",
  GET_STORIES: "getStories",
  GET_USER_STORIES: "getUserStories",
  GET_FOLLOWING_STORIES: "getFollowingStories",
  GET_MY_STORIES: "getMyStories",
  GET_LIKED_STORIES: "getLikedStories",
  // comment
  COMMENT: "comment",
  GET_COMMENTS: "getComments",
  // marker
  MARKER: "marker",
  GET_ALL_MARKERS: "getAllMarkers",
  GET_MY_MARKERS: "getMyMarkers",
  GET_USER_MARKERS: "getUserMarkers",
  GET_MARKER: "getMarker",
  // follow
  FOLLOW: "follow",
  GET_FOLLOWINGS: "getFollowings",
  GET_FOLLOWERS: "getFollowers",
  // like
  LIKE: "like",
  // geocoding
  GEOCODING: "geocoding",
  GET_ADDRESS: "getAddress",
} as const;

export { queryKeys };
