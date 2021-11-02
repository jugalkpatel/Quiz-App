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

import { useQuiz } from "../../contexts";
import { Spinner } from "..";
import { dashboardData } from "../../utils/dashboardData";
import { obtainLevel } from "../../utils";

function Lobby() {
  const { pathname } = useLocation();
  const level = obtainLevel(pathname);

  const { levelNumber, description, instructions } = dashboardData[level];

  const { isLoading, error, questions } = useQuiz();
  const navigate = useNavigate();

  console.log({ questions });

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
          navigate(`/play/${level}/questions`, { state: { questions } })
        }
      >
        {isLoading ? <Spinner isLoading={isLoading} size="5px" /> : "start"}
      </Play>
    </ColumnContainer>
  );
}

export { Lobby };
