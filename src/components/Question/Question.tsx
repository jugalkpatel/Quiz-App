import { IoMdArrowBack } from "react-icons/io";
import {
  QuestionContainer,
  QuestionNumberLabel,
  QuestionStatementLabel,
  QuestionFooter,
  NextButton,
  BackButton,
} from "./Question.styles";

import { ACTIONS } from "../../helpers";
import { ACTIONTYPE } from "../../hooks/useGamePlay/useGamePlay.hook";


export type QUESTION_ACTIONTYPE =
  | { type: typeof ACTIONS.NEXT_QUESTION }
  | { type: typeof ACTIONS.PREV_QUESTION };

export type QuestionProps = {
  children: React.ReactNode;
  statement: string;
  questionNumber: number;
  dispatch: React.Dispatch<ACTIONTYPE>;
};

function Question({
  children,
  statement,
  dispatch,
  questionNumber,
}: QuestionProps) {
  return (
      <QuestionContainer>
        <QuestionNumberLabel>
          Question {questionNumber + 1} of 10
        </QuestionNumberLabel>

        <QuestionStatementLabel>{statement}</QuestionStatementLabel>
        {children}
        <QuestionFooter>
          <BackButton onClick={() => dispatch({ type: ACTIONS.PREV_QUESTION })}>
            <IoMdArrowBack />
          </BackButton>
          <NextButton onClick={() => dispatch({ type: ACTIONS.NEXT_QUESTION })}>
            Next
          </NextButton>
        </QuestionFooter>
      </QuestionContainer>
  );
}

export { Question };
