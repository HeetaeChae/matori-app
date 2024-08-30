import axios from "axios";
import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
} from "../utils/handleStorageToken";
import getAccessTokenApi from "../api/accessToken";

const axiosInstanceWithAccessToken = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/JSON",
  },
});

axiosInstanceWithAccessToken.interceptors.request.use(async (config) => {
  const accessToken = await getAccessToken();

  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }

  return config;
});

axiosInstanceWithAccessToken.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    console.log(error);

    if (error.response?.status === 400 || error.response?.status === 401) {
      const refreshToken = await getRefreshToken();
      if (refreshToken) {
        const { accessToken } = await getAccessTokenApi();
        await setAccessToken(accessToken);
        originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
        return axios(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);

export { axiosInstanceWithAccessToken };
