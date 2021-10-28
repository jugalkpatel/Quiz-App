import axios from "axios";
const setupAuthHeader = (token: string) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  }
  delete axios.defaults.headers.common["Authorization"];
};

export { setupAuthHeader };
