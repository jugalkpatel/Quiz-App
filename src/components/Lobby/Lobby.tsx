import { useLocation, useNavigate } from "react-router-dom";

import { ColumnContainer } from "../../styles/common.styles";
import {
  LobbyHeader,
  LobbyDesc,
  Instruction,
  InstructionTitle,
  InstructionList,
  Play,
} from "./Lobby.styles";

import { LevelTypes } from "../../common";
import { useQuiz } from "../../contexts";
import { Spinner } from "../../components";
import { dashboardData } from "../../utils";

function Lobby() {
  const { state } = useLocation();
  const level = state as LevelTypes;

  const { levelNumber, description, instructions } = dashboardData[level];

  const { questions, isLoading, error } = useQuiz();
  const navigate = useNavigate();

  const disable = isLoading || (error as unknown as boolean);
  return (
    <ColumnContainer>
      <LobbyHeader>
        level {levelNumber}: {level.toLowerCase()}
      </LobbyHeader>
      <LobbyDesc>{description}</LobbyDesc>
      <InstructionTitle>instructions</InstructionTitle>
      <InstructionList>
        {instructions?.length
          ? instructions.map((rule) => (
              <Instruction key={rule}>{rule}</Instruction>
            ))
          : null}
      </InstructionList>
      <Play
        disabled={disable}
        onClick={() =>
          navigate(`/play/${level}/quiz`, { state: { questions } })
        }
      >
        {isLoading ? <Spinner isLoading={isLoading} size="5px" /> : "start"}
      </Play>
    </ColumnContainer>
  );
}

export { Lobby };
