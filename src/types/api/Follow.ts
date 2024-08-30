interface RequestFollowByUserId {
  userId: number;
}

interface RequestUnFollowByUserId extends RequestFollowByUserId {}

interface ResponseFollow {}

interface ResponseUnFollow {}

interface ResponseGetFollowings {}

interface ResponseGetFollowers {}

export {
  RequestFollowByUserId,
  RequestUnFollowByUserId,
  ResponseFollow,
  ResponseUnFollow,
  ResponseGetFollowings,
  ResponseGetFollowers,
};
