import axios from "axios";
import { getRefreshToken, setAccessToken } from "../utils/handleToken";
import { getAccessToken } from "./auth";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/JSON",
  },
});

const axiosInstanceWithAccessToken = axiosInstance;

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
    if (
      !originalRequest._retry &&
      (error.response.status === 400 || error.response.status === 401)
    ) {
      originalRequest._retry = true;
      const refreshToken = await getRefreshToken();
      if (refreshToken) {
        const { accessToken } = await getAccessToken();
        await setAccessToken(accessToken);
        originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
        return axios(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);

export { axiosInstance, axiosInstanceWithAccessToken };
