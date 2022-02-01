import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";

import { ColumnContainer } from "../../styles/common.styles";
import {
  LobbyHeader,
  LobbyDesc,
  Instruction,
  InstructionTitle,
  InstructionList,
  Play,
} from "./Lobby.styles";

import { Spinner } from "../../components";
import { useQuizData } from "../../hooks";
import { STATUS } from "../../helpers";
import { dashboardData, obtainLevel } from "../../utils";

function Lobby() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const level = obtainLevel(pathname);
  const [state] = useQuizData("/quiz", level);
  const { levelNumber, description, instructions } = dashboardData[level];

  const isLoading = state.status === STATUS.LOADING ? true : false;
  const disable = isLoading || state.status === STATUS.REJECTED;
  const questions =
    state.data && "questions" in state.data ? state.data.questions : [];
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
          navigate(`/play/${level}/quiz`, {
            state: { questions },
          })
        }
      >
        {isLoading ? (
          <Spinner isLoading={isLoading} size="5px" color={theme.primary} />
        ) : (
          "start"
        )}
      </Play>
    </ColumnContainer>
  );
}

export { Lobby };
