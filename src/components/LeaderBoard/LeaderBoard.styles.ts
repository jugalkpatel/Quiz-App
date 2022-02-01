import styled from "styled-components";
import {
  BarContainer,
  ColumnContainer,
  TextLabel,
} from "../../styles/common.styles";

const LeaderBoardContainer = styled(ColumnContainer)`
  min-height: 50vh;
  color: ${({ theme }) => theme.tertiary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeaderBoardRecord = styled.article`
  display: grid;
  grid-template-columns: 0.5fr 1fr repeat(2, 1fr);
  grid-template-rows: 1fr;
  align-items: center;
  color: ${({ theme }) => theme.tertiary};
  background-color: ${({ theme }) => theme.primary};
  padding: 0.5rem;
  border-radius: 0.3rem;
  margin: 0.5rem 0;

  @media (min-width: 768px) {
    grid-template-columns: 0.3fr 2fr repeat(2, 1fr);
    padding: 0.7rem;
  }
`;

const LeaderBoardLabel = styled(TextLabel)`
  padding: 0.5rem 0;
  text-align: center;
  font-size: 1.5rem;
`;

const NameContainer = styled(BarContainer)`
  justify-content: flex-start;
  padding: 0 1rem;
`;

export {
  LeaderBoardContainer,
  LeaderBoardRecord,
  LeaderBoardLabel,
  NameContainer,
};
