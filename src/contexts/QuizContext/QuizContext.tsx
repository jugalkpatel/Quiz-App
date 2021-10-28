import { createContext } from "react";

import { QuizType } from "../../common";

export type QuizContextType = QuizType & {
  isLoading: boolean;
  error: string;
  setQuiz: React.Dispatch<React.SetStateAction<QuizType>>;
};

const initialQuizValues: QuizContextType = {
  id: "",
  level: "",
  questions: [],
  leaderBoard: [],
  isLoading: false,
  error: "",
  setQuiz: () => null,
};

const QuizContext = createContext(initialQuizValues);

export { QuizContext };
