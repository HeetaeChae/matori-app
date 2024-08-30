interface RequestLikeByUserId {
  userId: number;
}

interface ResponseLike {}

interface RequestUnLikeByUserId extends RequestLikeByUserId {}

interface ResponseUnLike {}

export {
  RequestLikeByUserId,
  RequestUnLikeByUserId,
  ResponseLike,
  ResponseUnLike,
};
