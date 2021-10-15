import { createContext } from "react";

import { AuthTypes } from "../common";
import { SetupAuthTypes } from "./AuthProvider";

export type AuthContextTypes = {
  authenticated: boolean;
  token: string;
  name: string;
  level: string;
  setAuthCredentials: React.Dispatch<React.SetStateAction<AuthTypes>>;
  setupAuth: (params: SetupAuthTypes) => void;
};

const AuthContext = createContext<AuthContextTypes>({
  authenticated: false,
  token: "",
  name: "",
  level: "",
  setAuthCredentials: () => null,
  setupAuth: () => true,
});

export { AuthContext };
