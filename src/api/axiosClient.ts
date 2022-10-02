import { IResponseData } from 'models';
import { IResponseError } from './../models/index';
import axios from "axios";
import ignoreApi from "constants/ignoreApi";
import { show } from "reducers/dialogReducer";
import { store } from "reducers/store";
import { storageKey } from "../constants/storageKey";

// const BASE_URL =
//   process.env.NODE_ENV !== "production" ? '' : '';
const BASE_URL = "https://exam-dev-api.web5days.com:5001/api";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  // timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem(storageKey.token)}`,
  },
});

axiosClient.interceptors.request.use(
  async (config) => {
    // Do something before request is sent
    // const token = await getFireBaseToken();
    const token = localStorage.getItem(storageKey.token);
    if (token) {
      //@ts-ignore
      config.headers.Authorization = `Bearer ${token}`;
      // console.log(token)
      localStorage.setItem(storageKey.token, token);
    }

    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    if (response && response.data) {
      return response.data;
    }
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response?.status >= 400 && !ignoreApi.includes(error?.config?.url)) {
      const msgError = error.response.data.error;
      store.dispatch(show({ type: "notify", msg: msgError, isShow: true, title: 'Lỗi' }));
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
