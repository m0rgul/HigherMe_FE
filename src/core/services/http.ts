import axios, { ResponseType } from "axios";
import humps from "humps";
import { isPlainObject, isArray } from "lodash-es";

const baseURL = import.meta.env.VITE_API_URL;

const transformResponse = (data: any): any =>
  isPlainObject(data) || isArray(data) ? humps.camelizeKeys(data) : data;

const defaultHttpSettings = {
  responseType: "json" as ResponseType,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
  withCredentials: true,
  transformResponse: (axios.defaults.transformResponse as any[]).concat(
    transformResponse
  ),
};

const HTTP = axios.create({
  ...defaultHttpSettings,
  baseURL,
});

HTTP.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 403) {
      // store.dispatch(userActions.setIsAuthenticated(false));
    }

    return Promise.reject(error);
  }
);

export default HTTP;
