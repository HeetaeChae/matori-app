export interface RequestProfile {
  email: string;
}

export interface RequestLogin extends RequestProfile {
  password: string;
}

export interface RequestSignup extends RequestLogin {
  nickname: string;
}

export interface ResponseProfile {}

export interface ResponseAccessToken {
  accessToken: string;
}

export interface ResponseLogin extends ResponseAccessToken {
  refreshToken: string;
}

export interface ResponseSigntup {}
