import React, { useContext } from "react";
import { useLocation } from "react-router-dom";

import { QuizContext } from "./QuizContext";

import { useGetQuiz } from "../../hooks";
import { obtainLevel } from "../../utils";

const QuizProvider: React.FC = ({ children }) => {
  const { pathname } = useLocation();
  const requestedLevel = obtainLevel(pathname);

  const { quiz, isLoading, error } = useGetQuiz(requestedLevel);
  return (
    <QuizContext.Provider value={{ ...quiz, isLoading, error }}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { QuizProvider, useQuiz };
