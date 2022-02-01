import { useNavigate } from "react-router-dom";

import { ColumnContainer } from "../../styles/common.styles";
import {
  HistoryContainer,
  HistoryRecord,
  PlayAgain,
  PlayIcon,
  PlayContainer,
  HistoryContent,
  HistoryTitle,
} from "./History.styles";
import {
  BarContainer,
  TextLabel,
  SuperText,
  RecordItem,
} from "../../styles/common.styles";

import { useAuth } from "../../contexts";
import { NotAvailable } from "../../components";

function History() {
  const { history } = useAuth();
  const navigate = useNavigate();
  return (
    <HistoryContainer>
      <HistoryTitle>History</HistoryTitle>
      <HistoryContent>
        {!history.length ? (
          <NotAvailable message="history yet not available!" />
        ) : (
          history.reverse().map(({ id, level, score, time }) => {
            return (
              <HistoryRecord key={id}>
                <ColumnContainer>
                  <SuperText>level</SuperText>
                  <TextLabel>{level}</TextLabel>
                </ColumnContainer>

                <BarContainer>
                  <RecordItem>
                    <SuperText>score</SuperText>
                    <TextLabel>{score}</TextLabel>
                  </RecordItem>
                </BarContainer>

                <BarContainer>
                  <RecordItem>
                    <SuperText>time</SuperText>
                    <TextLabel>{time} sec</TextLabel>
                  </RecordItem>
                </BarContainer>

                <PlayContainer>
                  <PlayAgain onClick={() => navigate(`/play/${level}`)}>
                    <PlayIcon />
                  </PlayAgain>
                </PlayContainer>
              </HistoryRecord>
            );
          })
        )}
      </HistoryContent>
    </HistoryContainer>
  );
}

export { History };
