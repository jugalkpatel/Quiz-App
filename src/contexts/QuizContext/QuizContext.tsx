import { createContext } from "react";

import { QuizType } from "../../common";

export type QuizContextType = QuizType & {
  isLoading: boolean;
  error: string;
};

const QuizContext = createContext<QuizContextType | null>(null);

export { QuizContext };
