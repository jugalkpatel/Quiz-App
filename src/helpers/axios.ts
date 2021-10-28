import axios, { AxiosInstance } from "axios";

// const config: AxiosRequestConfig = {
//   baseURL: "http://localhost:4000",
// };

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:4000",
});

export { axiosInstance };
