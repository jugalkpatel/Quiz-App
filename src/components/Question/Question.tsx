import { IoMdArrowBack } from "react-icons/io";
import {
  QuestionContainer,
  QuestionNumberLabel,
  QuestionStatementLabel,
  QuestionFooter,
  NextButton,
  BackButton,
} from "./Question.styles";

import { GamePlayTypes, LevelTypes, QuestionType } from "../../common";
import { Options } from "../../components";
import { ACTIONTYPE } from "../../hooks/useGamePlay/useGamePlay.hook";
import { ACTIONS } from "../../helpers";

export type QUESTION_ACTIONTYPE =
  | { type: typeof ACTIONS.NEXT_QUESTION }
  | { type: typeof ACTIONS.PREV_QUESTION };

export type QuestionProps = {
  level: LevelTypes;
  gameState: GamePlayTypes;
  questions: QuestionType[];
  dispatch: React.Dispatch<ACTIONTYPE>;
};

function Question({ level, gameState, questions, dispatch }: QuestionProps) {
  const { questionNumber, attended, status } = gameState;
  const question = questions[questionNumber];
  const isQuestionAttempted =
    attended && attended[questionNumber] ? attended[questionNumber] : null;

  return (
    <QuestionContainer>
      <QuestionNumberLabel>
        Question {questionNumber + 1} of 10
      </QuestionNumberLabel>

      <QuestionStatementLabel>{question.statement}</QuestionStatementLabel>

      <Options
        dispatch={dispatch}
        question={question}
        questionNumber={questionNumber}
        attended={isQuestionAttempted}
        status={status}
      />

      {level === "Rookie" || status !== "PLAYING" ? (
        <QuestionFooter>
          <BackButton onClick={() => dispatch({ type: ACTIONS.PREV_QUESTION })}>
            <IoMdArrowBack />
          </BackButton>

          <NextButton onClick={() => dispatch({ type: ACTIONS.NEXT_QUESTION })}>
            Next
          </NextButton>
        </QuestionFooter>
      ) : null}
    </QuestionContainer>
  );
}

export { Question };
