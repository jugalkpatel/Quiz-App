import { createContext } from "react";

import { QuizType } from "../../common";

export type QuizContextType = QuizType & {
  isLoading: boolean;
  error: string;
};

const initialQuizValues: QuizContextType = {
  id: "",
  level: "",
  questions: [],
  leaderBoard: [],
  isLoading: false,
  error: "",
};

const QuizContext = createContext(initialQuizValues);

export { QuizContext };
