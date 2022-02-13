import React, { useContext } from "react";

import { AuthContext } from "../../contexts";
import { useAuthData } from "../../hooks";

const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useAuthData();
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("Context values should not be null");
  }

  return context;
};

export { useAuth, AuthProvider };
