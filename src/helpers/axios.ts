import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: "http://localhost:4000",
};

const axiosInstance: AxiosInstance = axios.create(config);

export { axiosInstance };
