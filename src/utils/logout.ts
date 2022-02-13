import React from "react";
import { NavigateFunction } from "react-router-dom";

import { AUTH_ACTIONS } from "../hooks/useAuthData/useAuthData.hook";
import { ACTIONS } from "../helpers";

const logout = (
  dispatch: React.Dispatch<AUTH_ACTIONS>,
  navigate: NavigateFunction
) => {
  return () => {
    dispatch({ type: ACTIONS.RESET_STATE });
    navigate("/login");
    localStorage?.removeItem("liquiz");
  };
};

export { logout };
