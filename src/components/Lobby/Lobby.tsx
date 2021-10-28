import { useLocation } from "react-router-dom";

import { ColumnContainer } from "../../styles/common.styles";
import {
  LobbyHeader,
  LobbyDesc,
  Instruction,
  InstructionTitle,
  InstructionList,
  Play,
} from "./Lobby.styles";

import { DifficultyTypes } from "../../common";
import { useQuiz } from "../../contexts";
import { Spinner } from "..";
import { dashboardData } from "../../utils/dashboardData";

function Lobby() {
  const { pathname } = useLocation();
  const difficulty = pathname.split("/")[2];
  const { level, description, instructions } =
    dashboardData[difficulty as keyof DifficultyTypes];

  const { isLoading, error, questions } = useQuiz();

  console.log({ questions });

  const disable = isLoading || (error as unknown as boolean);
  return (
    <ColumnContainer>
      <LobbyHeader>
        level {level}: {difficulty.toLowerCase()}
      </LobbyHeader>
      <LobbyDesc>{description}</LobbyDesc>
      <InstructionTitle>instructions</InstructionTitle>
      <InstructionList>
        {instructions?.length
          ? instructions.map((rule, index) => (
              <Instruction key={index}>{rule}</Instruction>
            ))
          : null}
      </InstructionList>
      <Play
        disabled={disable}
        onClick={() => console.log("play button clicked")}
      >
        {isLoading ? <Spinner isLoading={isLoading} size="5px" /> : "start"}
      </Play>
    </ColumnContainer>
  );
}

export { Lobby };
