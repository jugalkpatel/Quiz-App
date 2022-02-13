import { useEffect, useReducer, useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import {
  GamePlayTypes,
  HistoryRecord,
  LevelTypes,
  QuestionType,
} from "../../common";
import { useAuth } from "../../contexts";
import { gameplayReducer } from "./gameplayReducer";
import { ACTIONS } from "../../helpers";

export type SprintResponse = {
  success: boolean;
  details: {
    isInLeaderBoard: boolean;
    updatedLevel: LevelTypes;
    history: HistoryRecord[];
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
  | { type: typeof ACTIONS.CELEBRATIONS }
  | { type: typeof ACTIONS.LEVEL_UP };

export type GamePlayProps = {
  questions: QuestionType[];
  level: LevelTypes;
  toModal: () => void;
};

function useGamePlay({ questions, level, toModal }: GamePlayProps) {
  const initialState: GamePlayTypes = {
    questionNumber: 0,
    points: 0,
    negativePoints: 0,
    totalTime: Date.now(),
    status: "PLAYING",
    isInLeaderBoard: true,
    isLevelUp: false,
  };
  const reducer = gameplayReducer(questions);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { dispatch: dispatchAuthData } = useAuth();
  const stableNavigate = useRef(toModal);

  useEffect(() => {
    if (state.status !== "SUBMITTING") {
      return;
    }

    const updateSprintData = async (): Promise<void> => {
      try {
        const response = await axios.post<SprintResponse>("/history/add", {
          level: level,
          score: state.points,
          time: state.totalTime,
        });

        const {
          details: { isInLeaderBoard, updatedLevel, history },
        } = response.data;

        if (isInLeaderBoard) {
          dispatch({ type: ACTIONS.CELEBRATIONS });
        }

        dispatchAuthData({ type: ACTIONS.SET_HISTORY, payload: { history } });

        if (updatedLevel !== level) {
          dispatchAuthData({ type: ACTIONS.SET_LEVEL, payload: { level: updatedLevel } });
          dispatch({ type: ACTIONS.LEVEL_UP });
        }

        stableNavigate.current();
      } catch (error) {
        toast.error("error while uploading gameplay data", {
          position: "bottom-center",
        });
      } finally {
        dispatch({ type: ACTIONS.FINISH_ATTEMPT });
      }
    };

    updateSprintData();
  }, [
    state.points,
    state.status,
    state.totalTime,
    level,
    dispatch,
    dispatchAuthData,
  ]);

  return [state, dispatch] as const;
}

export { useGamePlay };
