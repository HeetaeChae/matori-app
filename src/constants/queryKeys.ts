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
  // comment
  COMMENT: "comment",
  GET_COMMENTS: "getComments",
} as const;

export default queryKeys;
