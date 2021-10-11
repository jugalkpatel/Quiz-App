import React, { createContext, useContext, useState } from "react";

export type AuthTypes = {
  authenticated: boolean;
  token: string;
  name: string;
};

export type AuthContextTypes = {
  authenticated: boolean;
  token: string;
  name: string;
  setAuth: React.Dispatch<React.SetStateAction<AuthTypes>>;
};

const AuthContext = createContext<AuthContextTypes>({
  authenticated: false,
  token: "",
  name: "",
  setAuth: () => null,
});

const AuthProvider: React.FC = ({ children }) => {
  const initialAuthState: AuthTypes = {
    authenticated: false,
    token: "",
    name: "",
  };

  const [auth, setAuth] = useState<AuthTypes>(initialAuthState);

  return (
    <AuthContext.Provider value={{ ...auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
