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
import { dashboardData } from "../../utils/dashboardData";

function Lobby() {
  // we need to get data from dashboarddata from route because data changed based on route.
  const { pathname } = useLocation();
  const difficulty = pathname.split("/")[2];
  const { level, description, instructions } =
    dashboardData[difficulty as keyof DifficultyTypes];

  return (
    <ColumnContainer>
      <LobbyHeader>
        level {level}: {difficulty.toLowerCase()}
      </LobbyHeader>
      <LobbyDesc>{description}</LobbyDesc>
      <InstructionTitle>instructions</InstructionTitle>
      <InstructionList>
        {instructions?.length
          ? instructions.map((rule) => <Instruction>{rule}</Instruction>)
          : null}
      </InstructionList>
      <Play>start</Play>
    </ColumnContainer>
  );
}

export { Lobby };
