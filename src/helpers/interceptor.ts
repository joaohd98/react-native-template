import axios, {AxiosRequestConfig} from "axios";
import {store} from "../redux/configure-store";

export const ConfigureInterceptor = () => {
  axios.interceptors.request.use((config: AxiosRequestConfig) => {
    if (!config.url!.endsWith("token")) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${store.getState().loginScreenReducer.token}`,
      };
    }

    return config;
  });
};
