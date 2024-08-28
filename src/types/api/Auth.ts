interface RequestProfile {
  userId: number;
}

interface RequestLogin extends RequestProfile {
  email: string;
  password: string;
}

interface RequestSignup extends RequestLogin {
  nickname: string;
}

interface ResponseProfile {}

interface ResponseAccessToken {
  accessToken: string;
}

interface ResponseLogin extends ResponseAccessToken {
  refreshToken: string;
}

interface ResponseSignup {}

export {
  RequestProfile,
  RequestLogin,
  RequestSignup,
  ResponseProfile,
  ResponseAccessToken,
  ResponseLogin,
  ResponseSignup,
};
