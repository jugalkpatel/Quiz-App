import { ColumnContainer } from "../../styles/common.styles";
import {
  BarContainer,
  HistoryContainer,
  HistoryRecord,
  TextLabel,
  HistoryRecordItem,
  SuperText,
  PlayAgain,
  PlayIcon,
  PlayContainer,
  HistoryContent,
  HistoryTitle,
} from "./History.styles";

import { useAuth } from "../../contexts";
import { NotAvailable } from "../../components";

function History() {
  const { history } = useAuth();
  console.log({ history });
  return (
    <HistoryContainer>
      <HistoryTitle>History</HistoryTitle>
      <HistoryContent>
        {!history.length ? (
          <NotAvailable message="history yet not available!" />
        ) : (
          history.map(({ id, level, score, time }) => {
            return (
              <HistoryRecord key={id}>
                <ColumnContainer>
                  <SuperText>level</SuperText>
                  <TextLabel>{level}</TextLabel>
                </ColumnContainer>

                <BarContainer>
                  <HistoryRecordItem>
                    <SuperText>score</SuperText>
                    <TextLabel>{score}</TextLabel>
                  </HistoryRecordItem>
                </BarContainer>

                <BarContainer>
                  <HistoryRecordItem>
                    <SuperText>time</SuperText>
                    <TextLabel>{time} sec</TextLabel>
                  </HistoryRecordItem>
                </BarContainer>

                <PlayContainer>
                  <PlayAgain>
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
