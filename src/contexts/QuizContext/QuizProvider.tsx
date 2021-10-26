import React, { useState, useContext } from "react";

import { QuizContext } from "./QuizContext";

import { QuizType } from "../../common";

const QuizProvider: React.FC = ({ children }) => {
  const initialQuizState: QuizType = {
    id: "",
    questions: [],
    leaderBoard: [],
    level: "",
  };

  const [quiz, setQuiz] = useState<QuizType>(initialQuizState);

  return (
    <QuizContext.Provider value={{ ...quiz, setQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { QuizProvider, useQuiz };
