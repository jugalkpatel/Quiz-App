import { QuestionType } from "../../common";
import {
  GamePlayHeader,
  Question,
  QuestionNav,
  Options,
} from "../../components";
import { ACTIONS } from "../../helpers";
import { useGamePlay } from "../../hooks";
import {
  FinishButton,
  GamePlayContent,
  GamePlayWrapper,
  MaxWidthWrapper,
} from "../GamePlay/GamePlay.styles";

export type RookieProps = {
  questions: QuestionType[];
};

function Rookie({ questions }: RookieProps) {
  const { state, dispatch } = useGamePlay(questions);

  const attended =
    state?.attended && state.attended[state.questionNumber]
      ? state.attended[state.questionNumber]
      : null;

  return (
    <MaxWidthWrapper>
      <GamePlayWrapper>
        <GamePlayHeader />
        <GamePlayContent>
          <Question
            statement={questions[state.questionNumber].statement}
            questionNumber={state.questionNumber}
            dispatch={dispatch}
          >
            <Options
              question={questions[state.questionNumber]}
              questionNumber={state.questionNumber}
              dispatch={dispatch}
              attended={attended}
              isSubmitted={state.isSubmitted}
            />
          </Question>
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
