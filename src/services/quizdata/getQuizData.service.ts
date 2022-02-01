import axios, { AxiosError, CancelTokenSource } from "axios";

import { LevelTypes, LeaderBoard, QuizType, ServerError } from "../../common";

export type LeaderBoardResponse = LeaderBoard & {
  success: boolean;
  level: LevelTypes;
};

export type QuizResponse = {
  success: boolean;
  quiz: QuizType;
};

export type QuizDataResponse = {
  success: boolean;
};

// returns error, leaderboard, quiz
async function getQuizData(
  level: LevelTypes,
  url: string,
  tokenSource: CancelTokenSource
): Promise<QuizType | LeaderBoard | ServerError> {
  try {
    const response = await axios.get<LeaderBoardResponse | QuizResponse>(url, {
      params: { level },
      cancelToken: tokenSource.token,
    });

    if ("quiz" in response.data) {
      const { quiz } = response.data;
      return quiz;
    }

    if ("leaderBoard" in response.data && level === response.data.level) {
      const { leaderBoard } = response.data;
      return { leaderBoard };
    }

    throw new Error();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<ServerError>;

      if (serverError && serverError?.response) {
        return serverError.response.data;
      }
    }

    return {
      success: false,
      message: "oops something went wrong please refresh !",
    };
  }
}

export { getQuizData };
