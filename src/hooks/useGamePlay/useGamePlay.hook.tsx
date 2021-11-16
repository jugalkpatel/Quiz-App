import { useReducer } from "react";

import { GamePlayTypes, QuestionType } from "../../common";
import { gameplayReducer } from "./gameplayReducer";
import { ACTIONS } from "../../helpers";

export type ACTIONTYPE =
  | { type: typeof ACTIONS.NEXT_QUESTION }
  | { type: typeof ACTIONS.PREV_QUESTION }
  | { type: typeof ACTIONS.REDIRECT_TO; payload: { to: number } }
  | {
      type: typeof ACTIONS.SUBMIT_ANSWER;
      payload: {
        questionNumber: number;
        userAnswer: number;
        isCorrect: boolean;
      };
    }
  | { type: typeof ACTIONS.FINISH_ATTEMPT };

function useGamePlay(questions: QuestionType[]) {
  const initialState: GamePlayTypes = {
    questionNumber: 0,
    points: 0,
    negativePoints: 0,
    isSubmitted: false,
  };
  const reducer = gameplayReducer(questions);
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log({ state });
  return { state, dispatch };
}

export { useGamePlay };
