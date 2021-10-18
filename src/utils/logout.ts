import React from "react";
import { NavigateFunction } from "react-router";
import { User } from "../common";
const logout = (
  setAuth: React.Dispatch<React.SetStateAction<User>>,
  navigate: NavigateFunction
) => {
  return () => {
    setAuth({ authenticated: false, token: "", name: "", id: "", level: "" });
    navigate("/login");
    localStorage?.removeItem("liquiz");
  };
};

export { logout };
