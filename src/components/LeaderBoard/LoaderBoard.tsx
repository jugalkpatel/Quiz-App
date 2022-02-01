import { useLocation } from "react-router-dom";
import { useTheme } from "styled-components";

import {
  ColumnContainer,
  TextLabel,
  BarContainer,
  RecordItem,
  SuperText,
} from "../../styles/common.styles";
import {
  LeaderBoardContainer,
  LeaderBoardRecord,
  LeaderBoardLabel,
  NameContainer,
} from "./LeaderBoard.styles";

import { Spinner, NotAvailable } from "../../components";
import { useQuizData } from "../../hooks";
import { STATUS } from "../../helpers";
import { obtainLevel } from "../../utils";

function LeaderBoard() {
  const { pathname } = useLocation();
  const level = obtainLevel(pathname);
  const [state] = useQuizData("/quiz/leaderboard", level);
  const theme = useTheme();

  if (state.status === STATUS.LOADING || state.status === STATUS.IDLE) {
    return (
      <LeaderBoardContainer>
        <Spinner isLoading={true} size="20px" color={theme.tertiary} />
      </LeaderBoardContainer>
    );
  }

  if (
    state.status === STATUS.RESOLVED &&
    state.data &&
    "leaderBoard" in state.data
  ) {
    if (!state.data.leaderBoard.length) {
      return (
        <NotAvailable
          image={theme.leaderBoard}
          message="leaderboard is empty!"
        />
      );
    }

    console.log(state.data.leaderBoard);

    return (
      <ColumnContainer>
        {state.data.leaderBoard.map(({ id, user, score, time }, index) => (
          <LeaderBoardRecord key={id}>
            <LeaderBoardLabel>{index + 1}</LeaderBoardLabel>
            <NameContainer>
              <ColumnContainer>
                <LeaderBoardLabel>{user}</LeaderBoardLabel>
              </ColumnContainer>
            </NameContainer>

            <BarContainer>
              <RecordItem>
                <SuperText>score</SuperText>
                <TextLabel>{score} / 10</TextLabel>
              </RecordItem>
            </BarContainer>

            <BarContainer>
              <RecordItem>
                <SuperText>time</SuperText>
                <TextLabel>{time} sec</TextLabel>
              </RecordItem>
            </BarContainer>
          </LeaderBoardRecord>
        ))}
      </ColumnContainer>
    );
  }

  return <NotAvailable message={state.error || "something went wrong !"} />;
}

export { LeaderBoard };
