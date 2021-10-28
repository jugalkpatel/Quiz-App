import axios, { AxiosError, AxiosResponse } from "axios";
const setupAuthExceptionHandler = (logout: () => void) => {
  axios.interceptors.response.use(
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
