import { QuizType, ServerError } from "../../common";
import { checkError } from "../../utils";
import axios from "axios";

export type QuizResponse = {
  success: boolean;
  quiz: QuizType;
};

export async function getQuiz(
  url: string,
  param: string
): Promise<QuizType | ServerError> {
  try {
    const quizData = await axios.get<QuizResponse>(url, {
      params: { quizType: param },
    });
    return quizData.data.quiz;
  } catch (error) {
    return checkError(error);
  }
}
