import axios, { AxiosError } from "axios";
import { API_BASE_URL } from "@/shared/constants/api.constant";
import { selectAccessToken } from "@/app/store/auth/auth.selector";
import store from "@/app/store";
import { setAccessToken } from "@/app/store/auth/auth.slice";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = selectAccessToken(store.getState());
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

let isRefreshing = false;
let pendingRequests: ((token: string) => void)[] = [];

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError & { config: any }) => {
    const original = error.config;
    if (error.response?.status === 401 && !original._retry) {
      if (isRefreshing) {
        return new Promise((resolve) => {
          pendingRequests.push((token) => {
            original.headers.Authorization = `Bearer ${token}`;
            resolve(axiosInstance(original));
          });
        });
      }
      original._retry = true;
      isRefreshing = true;
      try {
        const response = await axios.post(
          `${API_BASE_URL}/auth/refresh`,
          {},
          {
            withCredentials: true,
          }
        );
        if (response.status === 200) {
          const { accessToken } = response.data;
          store.dispatch(setAccessToken(accessToken));
          pendingRequests.forEach((cb) => cb(accessToken));
          pendingRequests = [];
          original.headers.Authorization = `Bearer ${accessToken}`;
          return axiosInstance(original);
        }
      } catch (error) {
        store.dispatch(setAccessToken(null));
        return Promise.reject(error);
      } finally {
        isRefreshing = false;
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
