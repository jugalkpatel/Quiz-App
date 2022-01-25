import { useCallback, useEffect, useReducer } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import { GamePlayTypes, LevelTypes, QuestionType } from "../../common";
import { gameplayReducer } from "./gameplayReducer";
import { ACTIONS } from "../../helpers";
import { useAuth } from "../../contexts";

export type SprintResponse = {
  success: boolean;
  details: {
    isInLeaderBoard: boolean;
    updatedLevel: LevelTypes;
  };
};

export type ACTIONTYPE =
  | { type: typeof ACTIONS.NEXT_QUESTION }
  | { type: typeof ACTIONS.PREV_QUESTION }
  | { type: typeof ACTIONS.REDIRECT_TO; payload: { to: number } }
  | {
      type: typeof ACTIONS.SUBMIT_ANSWER;
      payload: {
        questionNumber: number;
        userAnswerIndex: number;
        isCorrect: boolean;
      };
    }
  | { type: typeof ACTIONS.FINISH_ATTEMPT }
  | { type: typeof ACTIONS.SUBMIT_ATTEMPT }
  | { type: typeof ACTIONS.CELEBRATIONS };

function useGamePlay(questions: QuestionType[], level: LevelTypes) {
  const initialState: GamePlayTypes = {
    questionNumber: 0,
    points: 0,
    negativePoints: 0,
    totalTime: Date.now(),
    status: "PLAYING",
    isInLeaderBoard: false,
  };
  const reducer = gameplayReducer(questions);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { setAuthCredentials } = useAuth();

  const updateSprintData = useCallback(async () => {
    try {
      const response = await axios.post<SprintResponse>("/istory/add", {
        level: level,
        score: state.points,
        time: state.totalTime,
      });

      const {
        details: { isInLeaderBoard, updatedLevel },
      } = response.data;

      if (isInLeaderBoard) {
        dispatch({ type: ACTIONS.CELEBRATIONS });
      }

      if (updatedLevel !== level) {
        setAuthCredentials((prevState) => ({
          ...prevState,
          level: updatedLevel,
        }));
      }
    } catch (error) {
      toast.error("error while uploading gameplay data", {
        position: "bottom-center",
      });
      console.log("error");
    } finally {
      dispatch({ type: ACTIONS.FINISH_ATTEMPT });
    }
  }, [state.points, state.totalTime, level, setAuthCredentials]);

  useEffect(() => {
    if (state.status === "SUBMITTING") {
      updateSprintData();
    }
  }, [state.status, updateSprintData]);

  console.log({ level });

  console.log({ state });
  return { state, dispatch };
}

export { useGamePlay };
