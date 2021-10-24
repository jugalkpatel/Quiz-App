import {
  GamePlayContent,
  GamePlayWrapper,
  MaxWidthWrapper,
} from "./GamePlay.styles";

import { GamePlayHeader, QuestionNav, Question } from "../../components/";

function GamePlay() {
  return (
    <>
      <MaxWidthWrapper>
        <GamePlayWrapper>
          <GamePlayHeader />
          <GamePlayContent>
            <Question />
            <QuestionNav />
          </GamePlayContent>
        </GamePlayWrapper>
      </MaxWidthWrapper>
    </>
  );
}

export { GamePlay };
