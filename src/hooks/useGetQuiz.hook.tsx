import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

import { QuizType, ServerError } from "../common";

export type QuizResponse = {
  success: boolean;
  quiz: QuizType;
};

function useGetQuiz(requestedLevel: string) {
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
    const cancelTokenSource = axios.CancelToken.source();
    setLoading(true);

    const getQuizData = async () => {
      try {
        const quizRequest = await axios.get<QuizResponse>("/quiz", {
          params: { quizType: requestedLevel },
          cancelToken: cancelTokenSource.token,
        });

        const {
          data: { quiz: requestedQuiz },
        } = quizRequest;

        const { id, questions, level, leaderBoard } = requestedQuiz;

        if (id && questions.length && level) {
          setQuiz({ id, questions, level, leaderBoard });
        } else {
          const error = new Error("Quiz unavailable! Please refresh");
          error.name = "Unavailable";
          throw error;
        }
      } catch (error: any) {
        // TODO: better error handling here
        if (error instanceof Error && error.name === "Unavailable") {
          toast.error(error.message, {
            position: "bottom-center",
          });
        }

        if (axios.isAxiosError(error)) {
          console.log("caught an axios error");
          const serverError = error as AxiosError<ServerError>;

          if (serverError && serverError?.response) {
            toast.error(serverError.response.data.message, {
              position: "bottom-center",
            });
          }
        }
      } finally {
        setLoading(false);
      }
    };

    getQuizData();

    return () => {
      setError("");
      cancelTokenSource.cancel();
    };
  }, [requestedLevel]);

  return { quiz, isLoading, error };
}

export { useGetQuiz };
