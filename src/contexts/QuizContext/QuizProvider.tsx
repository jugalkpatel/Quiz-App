import React, { useState, useContext, useEffect } from "react";
import toast from "react-hot-toast";

import { QuizContext } from "./QuizContext";

import { QuizType } from "../../common";
import { useAuth } from "..";
import { getQuiz } from "../../services";

async function getQuizData(
  level: string,
  setQuiz: React.Dispatch<React.SetStateAction<QuizType>>,
  setError: React.Dispatch<React.SetStateAction<string>>
) {
  try {
    const quiz = await getQuiz("/quiz", level);

    if ("questions" in quiz) {
      const { id, questions, level, leaderBoard } = quiz;

      if (!id || !questions.length || !level) {
        throw new Error("error occured while fetching quiz!");
      }

      setQuiz({ id, questions, level, leaderBoard });
    } else {
      const msg = "Quiz unavailable! Please refresh.";
      setError(msg);
      toast.error(msg, {
        position: "bottom-center",
      });
    }
  } catch (error) {
    const err = error as Error;
    setError(err.message);
    toast.error(err.message, { position: "bottom-center" });
  }
}

const QuizProvider: React.FC = ({ children }) => {
  const { level } = useAuth();

  const initialQuizState: QuizType = {
    id: "",
    questions: [],
    leaderBoard: [],
    level: "",
  };

  const [quiz, setQuiz] = useState<QuizType>(initialQuizState);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      setLoading(true);
      await getQuizData(level, setQuiz, setError);
      setLoading(false);
    })();
  }, [level]);

  console.log({ quiz });

  return (
    <QuizContext.Provider value={{ ...quiz, isLoading, error, setQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};

const useQuiz = () => useContext(QuizContext);

export { QuizProvider, useQuiz };
