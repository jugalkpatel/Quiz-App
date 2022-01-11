import {
  FinishButton,
  GamePlayContent,
  GamePlayWrapper,
  MaxWidthWrapper,
} from "./GamePlay.styles";

import { LevelTypes, QuestionType } from "../../common";
import { GamePlayHeader, Question, QuestionNav } from "../../components";
import { useGamePlay } from "../../hooks";
import { ACTIONS } from "../../helpers";
import { useEffect } from "react";

export type GamePlayProps = {
  level: LevelTypes;
  questions: QuestionType[];
};

function GamePlay({ level, questions }: GamePlayProps) {
  const { state, dispatch } = useGamePlay(questions);

  useEffect(() => {
    if (state.negativePoints > 0 && level === "Expert") {
      dispatch({ type: ACTIONS.FINISH_ATTEMPT });
    }
  }, [state.negativePoints, level, dispatch]);

  return (
    <MaxWidthWrapper>
      <GamePlayWrapper>
        <GamePlayContent>
          <GamePlayHeader
            isSubmitted={state.isSubmitted}
            level={level}
            questionNumber={state.questionNumber}
            dispatch={dispatch}
          />

          <Question
            level={level}
            gameState={state}
            questions={questions}
            dispatch={dispatch}
          />

          <QuestionNav
            level={level}
            isSubmitted={state.isSubmitted}
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

export { GamePlay };
