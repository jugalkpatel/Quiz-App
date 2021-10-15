import { createContext } from "react";

import { User } from "../common";

export type AuthContextTypes = User & {
  setAuthCredentials: React.Dispatch<React.SetStateAction<User>>;
};

const AuthContext = createContext<AuthContextTypes>({
  authenticated: false,
  id: "",
  token: "",
  name: "",
  level: "",
  setAuthCredentials: () => null,
});

export { AuthContext };
