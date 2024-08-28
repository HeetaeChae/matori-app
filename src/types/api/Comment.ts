interface RequestGetComments {
  storyId: number;
}

interface ResponseGetComments {}

interface RequestCreateComment {}

interface ResponseCreateComment {}

interface RequestUpdateComment {}

interface ResponseUpdateComment {}

interface RequestDeleteComment {
  commentId: number;
}

interface ResponseDeleteComment {}

export {
  RequestGetComments,
  ResponseGetComments,
  RequestCreateComment,
  ResponseCreateComment,
  RequestUpdateComment,
  ResponseUpdateComment,
  RequestDeleteComment,
  ResponseDeleteComment,
};
