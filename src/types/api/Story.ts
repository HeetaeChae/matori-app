interface RequestGetStoriesByUserId {
  userId: number;
}

interface ResponseGetStories {}

interface RequestCreateStory {}

interface ResponseCreateStory {}

interface RequestUpdateStory {}

interface ResponseUpdateStory {}

interface RequestDeleteStory {
  storyId: number;
}

interface ResponseDeleteStory {}

export {
  RequestGetStoriesByUserId,
  ResponseGetStories,
  RequestCreateStory,
  ResponseCreateStory,
  RequestUpdateStory,
  ResponseUpdateStory,
  RequestDeleteStory,
  ResponseDeleteStory,
};
