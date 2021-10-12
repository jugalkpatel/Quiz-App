import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: "http://localhost:4000",
};

const axiosInstance: AxiosInstance = axios.create(config);

const setupAuthHeaderForServiceCalls = (token: string) => {
  if (token) {
    axiosInstance.defaults.headers.common["authorization"] = token;
    console.log("Authorization set successfully");
  }
  delete axiosInstance.defaults.headers.common["Authorization"];
};

export { axiosInstance, setupAuthHeaderForServiceCalls };
