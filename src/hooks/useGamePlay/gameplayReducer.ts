import { GamePlayTypes, QuestionType } from "../../common";
import { ACTIONS } from "../../helpers";
import { ACTIONTYPE } from "./useGamePlay.hook";

function gameplayReducer(questions: QuestionType[]) {
  return (state: GamePlayTypes, action: ACTIONTYPE): GamePlayTypes => {
    switch (action.type) {
      case ACTIONS.NEXT_QUESTION:
        return {
          ...state,
          questionNumber:
            state.questionNumber < questions.length - 1
              ? state.questionNumber + 1
              : state.questionNumber,
        };
      case ACTIONS.PREV_QUESTION:
        return {
          ...state,
          questionNumber:
            state.questionNumber > 0
              ? state.questionNumber - 1
              : state.questionNumber,
        };
      case ACTIONS.REDIRECT_TO:
        const { to } = action.payload;
        return {
          ...state,
          questionNumber:
            to < 0 || to > questions.length - 1 ? state.questionNumber : to,
        };
      case ACTIONS.SUBMIT_ANSWER:
        const { questionNumber, userAnswerIndex, isCorrect } = action.payload;
        return {
          ...state,
          points: isCorrect ? state.points + 1 : state.points,
          questionNumber:
            state.questionNumber < questions.length - 1
              ? state.questionNumber + 1
              : state.questionNumber,
          negativePoints: !isCorrect
            ? state.negativePoints + 1
            : state.negativePoints,
          attended: {
            ...state.attended,
            [questionNumber]: { isVisited: true, userAnswerIndex },
          },
        };
      case ACTIONS.SUBMIT_ATTEMPT:
        return {
          ...state,
          status: "SUBMITTING",
          totalTime: Math.round((Date.now() - state.totalTime) / 100) / 10,
        };
      case ACTIONS.FINISH_ATTEMPT:
        return { ...state, status: "FINISHED" };
      case ACTIONS.CELEBRATIONS:
        return { ...state, isInLeaderBoard: true };
      case ACTIONS.LEVEL_UP:
        return { ...state, isLevelUp: true };
      default:
        return state;
    }
  };
}

export { gameplayReducer };
