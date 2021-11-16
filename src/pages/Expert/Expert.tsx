import { QuestionType } from "../../common";
import { GamePlayHeader } from "../../components";
import { useGamePlay } from "../../hooks";
import {
  GamePlayContent,
  GamePlayWrapper,
  MaxWidthWrapper,
} from "../GamePlay/GamePlay.styles";

export type ExpertProps = {
  questions: QuestionType[];
};

function Expert({ questions }: ExpertProps) {
  const { state, dispatch } = useGamePlay(questions);
  console.log({ state, dispatch });
  return (
    <MaxWidthWrapper>
      <h1>Hello, I'm Expert</h1>
      <GamePlayWrapper>
        <GamePlayHeader />
        <GamePlayContent></GamePlayContent>
      </GamePlayWrapper>
    </MaxWidthWrapper>
  );
}

export { Expert };
