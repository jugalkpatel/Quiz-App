import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthTypes } from "../common";
import { logout, setupAuthExceptionHandler } from "../utils";
import { setupAuthHeaderForServiceCalls } from "../helpers/axios";

export type SetupAuthTypes = {
  id: string;
  name: string;
  token: string;
};

export type AuthContextTypes = {
  authenticated: boolean;
  token: string;
  name: string;
  setAuth: React.Dispatch<React.SetStateAction<AuthTypes>>;
  setupAuth: (params: SetupAuthTypes) => void;
};

const AuthContext = createContext<AuthContextTypes>({
  authenticated: false,
  token: "",
  name: "",
  setAuth: () => null,
  setupAuth: () => true,
});

const AuthProvider: React.FC = ({ children }) => {
  const initialAuthState: AuthTypes = {
    authenticated: false,
    token: "",
    name: "",
    id: "",
  };

  const [auth, setAuth] = useState<AuthTypes>(initialAuthState);
  const navigate = useNavigate();
  const logoutUser = logout(setAuth, navigate);

  console.log({ auth });

  const setupAuth = ({ id, name, token }: SetupAuthTypes) => {
    console.log(id, name, token);
    if (id && name && token) {
      setupAuthHeaderForServiceCalls(token);
      setupAuthExceptionHandler(logoutUser);
      setAuth((prevState: AuthTypes) => {
        return { ...prevState, authenticated: true, token, name, id };
      });
    }
  };

  return (
    <AuthContext.Provider value={{ ...auth, setAuth, setupAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
