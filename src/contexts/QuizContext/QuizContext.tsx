import { createContext } from "react";

import { QuizType } from "../../common";

export type QuizContextType = QuizType & {
  setQuiz: React.Dispatch<React.SetStateAction<QuizType>>;
};

const initialQuizValues: QuizContextType = {
  id: "",
  level: "",
  questions: [],
  leaderBoard: [],
  setQuiz: () => null,
};

const QuizContext = createContext(initialQuizValues);

export { QuizContext };
