import React from "react";
import { NavigateFunction } from "react-router";
import { AuthTypes } from "../common";
const logout = (
  setAuth: React.Dispatch<React.SetStateAction<AuthTypes>>,
  navigate: NavigateFunction
) => {
  return () => {
    setAuth({ authenticated: false, token: "", name: "", id: "", level: "" });
    navigate("/login");
  };
};

export { logout };
