import {
  FinishButton,
  GamePlayContent,
  GamePlayWrapper,
  MaxWidthWrapper,
} from "./GamePlay.styles";

import { QuestionType } from "../../common";
import { GamePlayHeader, Question, QuestionNav } from "../../components";
import { useGamePlay } from "../../hooks";
import { ACTIONS } from "../../helpers";

export type RookieProps = {
  questions: QuestionType[];
};

function Rookie({ questions }: RookieProps) {
  const { state, dispatch } = useGamePlay(questions);
  return (
    <MaxWidthWrapper>
      <GamePlayWrapper>
        <GamePlayContent>
          <GamePlayHeader
            questionNumber={state.questionNumber}
            dispatch={dispatch}
          />

          <Question details={state} questions={questions} dispatch={dispatch} />

          <QuestionNav
            questionNumber={state.questionNumber}
            questions={questions}
            dispatch={dispatch}
          />

          <FinishButton
            onClick={() => dispatch({ type: ACTIONS.FINISH_ATTEMPT })}
          >
            finish attempt
          </FinishButton>
        </GamePlayContent>
      </GamePlayWrapper>
    </MaxWidthWrapper>
  );
}

export { Rookie };
