import { axiosInstance } from "../helpers";
const setupAuthHeader = (token: string) => {
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = token;
  }
  delete axiosInstance.defaults.headers.common["Authorization"];
};

export { setupAuthHeader };
