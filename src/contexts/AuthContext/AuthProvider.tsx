import React, { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import { User } from "../../common";
import { AuthContext } from "./AuthContext";
import { setupAuth } from "../../utils";

const AuthProvider: React.FC = ({ children }) => {
  const initialAuthState: User = {
    authenticated: false,
    token: "",
    name: "",
    id: "",
    level: "",
  };

  // used useState because i'm getting all data from api at same time
  const [authCredentials, setAuthCredentials] = useState<User>(() => {
    try {
      const data = localStorage?.getItem("liquiz") || null;

      if (!data) {
        return initialAuthState;
      }

      const { id, name, level, token }: User = JSON.parse(data);

      if (id && name && level && token) {
        return { authenticated: true, id, name, level, token };
      }

      return initialAuthState;
    } catch (error) {
      const toastError = error as Error;
      toast.error(toastError.message || "error while accessing localstorage!", {
        position: "bottom-center",
      });
      return initialAuthState;
    }
  });
  const navigate = useNavigate();
  const setAuthConfig = useRef(setupAuth({ setAuthCredentials, navigate }));

  useEffect(() => {
    if (authCredentials?.authenticated) {
      setAuthConfig.current(authCredentials);
    }
  }, [authCredentials]);

  return (
    <AuthContext.Provider value={{ ...authCredentials, setAuthCredentials }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
