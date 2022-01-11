import { useLocation, Navigate } from "react-router-dom";

import { Levels, GamePlayStateType, QuestionType } from "../common";
import { GamePlay } from "../pages";
import { obtainLevel } from "../utils";

function checkState(state: GamePlayStateType): QuestionType[] | [] {
  if (!state) return [];

  if (!("questions" in state)) return [];

  const { questions } = state as GamePlayStateType;

  if (!questions.length) return [];

  return questions;
}

function GamePlayRoute() {
  const location = useLocation();

  const pathname = location.pathname;
  const state = location.state as GamePlayStateType;

  const path = obtainLevel(pathname);

  const questions = checkState(state);

  if (!path || !Levels[path] || !questions.length) {
    return <Navigate to="/" />;
  }

  return <GamePlay level={path} questions={questions} />;
}

export { GamePlayRoute };
