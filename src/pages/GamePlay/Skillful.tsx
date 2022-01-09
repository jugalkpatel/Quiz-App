import { QuestionType } from "../../common";
import {
  GamePlayHeader,
  Question,
  Options,
  QuestionNav,
} from "../../components";
import { useGamePlay } from "../../hooks";
import {
  GamePlayContent,
  GamePlayWrapper,
  MaxWidthWrapper,
} from "./GamePlay.styles";

export type SkillfulProps = {
  questions: QuestionType[];
};

function Skillful({ questions }: SkillfulProps) {
  const { state, dispatch } = useGamePlay(questions);

  const attended =
    state?.attended && state.attended[state.questionNumber]
      ? state.attended[state.questionNumber]
      : null;
  return (
    <MaxWidthWrapper>
      <GamePlayWrapper>
        {/* <GamePlayHeader /> */}
        <GamePlayContent>
          {/* <Question
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
          </Question> */}
          <QuestionNav
            questionNumber={state.questionNumber}
            questions={questions}
            dispatch={dispatch}
          />
        </GamePlayContent>
      </GamePlayWrapper>
    </MaxWidthWrapper>
  );
}

export { Skillful };
