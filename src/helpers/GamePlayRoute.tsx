import { State } from "history";
import { useLocation, Navigate } from "react-router-dom";

import { Levels, GamePlayStateType } from "../common";
import { obtainLevel } from "../utils";

function checkState(state: State): boolean {
  if (!state) return false;

  if (!("questions" in state)) return false;

  const { questions } = state as GamePlayStateType;

  if (!questions.length) return false;

  return true;
}

function GamePlayRoute({ children }: { children: JSX.Element }) {
  const { pathname, state } = useLocation();
  const path = obtainLevel(pathname);

  if (!path || !Levels[path] || !checkState(state)) {
    return <Navigate to="/" />;
  }

  return children;
}

export { GamePlayRoute };
