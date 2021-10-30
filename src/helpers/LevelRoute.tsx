import { Navigate, useLocation } from "react-router";

import { Levels } from "../common";
import { useAuth } from "../contexts";
import { obtainLevel } from "../utils";

function LevelRoute({ children }: { children: JSX.Element }) {
  const { level: userLevel } = useAuth();
  const { pathname } = useLocation();
  const requestedLevel = obtainLevel(pathname);

  if (!userLevel) {
    return <Navigate to="/" />;
  }

  if (Levels[requestedLevel] > Levels[userLevel]) {
    return <Navigate to="/" />;
  }

  return children;
}

export { LevelRoute };
