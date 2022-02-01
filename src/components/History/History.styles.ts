import styled from "styled-components";
import { IoMdPlay } from "react-icons/io";
import {
  BigText,
  ColumnContainer,
  PrimaryButton,
  primaryFont,
  RowContainer,
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
  PlayAgain,
  PlayIcon,
  PlayContainer,
  HistoryContent,
  HistoryTitle,
};
