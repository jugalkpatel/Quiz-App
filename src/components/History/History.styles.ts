import styled from "styled-components";
import { IoMdPlay } from "react-icons/io";
import {
  BigText,
  ColumnContainer,
  PrimaryButton,
  primaryFont,
  RowContainer,
  SubText,
  WidthContainer,
} from "../../styles/common.styles";

const HistoryContainer = styled(WidthContainer)`
  font-family: ${primaryFont};
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
`;

const HistoryTitle = styled(BigText)`
  padding: 0 0.5rem;
`;

const HistoryRecord = styled.article`
  display: grid;
  grid-template-columns: 2fr 1fr 1.7fr;
  background-color: ${({ theme }) => theme.secondary};
  padding: 0.5rem 1rem;
  align-items: center;
  border-radius: 0.3rem;
  margin: 0.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr 1fr 0.3fr;
  }
`;

const HistoryContent = styled(ColumnContainer)`
  margin-top: 0.5rem;
`;

const BarContainer = styled(RowContainer)`
  border-left: 1px solid ${({ theme }) => theme.border};
  justify-content: center;
  align-items: center;
`;

const HistoryRecordItem = styled(ColumnContainer)`
  align-items: center;
`;

const TextLabel = styled.p`
  color: ${({ theme }) => theme.tertiary};
  font-size: 1.3rem;
`;

const SuperText = styled(SubText)`
  font-size: 0.9rem;
`;

const PlayIcon = styled(IoMdPlay)`
  color: ${({ theme }) => theme.primary};
  font-size: 1rem;
`;

const PlayAgain = styled(PrimaryButton)`
  border-radius: 1rem;
  justify-self: end;
`;

const PlayContainer = styled(RowContainer)`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
  }
`;

export {
  HistoryContainer,
  HistoryRecord,
  TextLabel,
  BarContainer,
  HistoryRecordItem,
  SuperText,
  PlayAgain,
  PlayIcon,
  PlayContainer,
  HistoryContent,
  HistoryTitle,
};
