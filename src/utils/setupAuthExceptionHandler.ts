import axios, { AxiosError, AxiosResponse } from "axios";
import { axiosInstance } from "../helpers";
const setupAuthExceptionHandler = (logout: () => void) => {
  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError | Error) => {
      if (axios.isAxiosError(error)) {
        if (error?.response?.status === 401) {
          logout();
        }
      }
    }
  );
};
export { setupAuthExceptionHandler };
