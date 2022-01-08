import { useLocation, Navigate } from "react-router-dom";

import { Levels, GamePlayStateType, QuestionType } from "../common";
import { Expert, Rookie, Skillful } from "../pages";
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

  if (path === "Skillful") {
    return <Skillful questions={questions} />;
  }
  if (path === "Expert") {
    return <Expert questions={questions} />;
  }

  return <Rookie questions={questions} />;
}

export { GamePlayRoute };
