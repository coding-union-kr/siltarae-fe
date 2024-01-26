/* eslint-disable no-underscore-dangle */
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.siltarae.me/api/v1",
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const { data } = await axiosInstance.post("/token");
        const { accessToken } = data;

        const expiryDays = 1;
        const date = new Date();
        date.setTime(date.getTime() + expiryDays * 24 * 60 * 60 * 1000);
        const expires = `expires=${date.toUTCString()}`;

        document.cookie = `accessToken=${accessToken};${expires};path=/`;

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;

        return await axiosInstance(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
