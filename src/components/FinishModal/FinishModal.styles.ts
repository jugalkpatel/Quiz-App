import styled from "styled-components";
import { IoIosArrowBack, IoMdHome } from "react-icons/io";

import {
  primaryFont,
  PrimaryButton,
  RowContainer,
  ColumnContainer,
} from "../../styles/common.styles";

const FinishModalContainer = styled.div`
  font-family: ${primaryFont};
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.tertiary};
  width: 70vw;
  max-height: 55vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: max-content;
  padding: 1rem;
  gap: 0.5rem;
  border-radius: 0.7rem;

  @media (min-width: 568px) {
    max-width: 55vw;
  }

  @media (min-width: 768px) {
    max-width: 45vw;
  }

  @media (min-width: 991px) {
    max-width: 35vw;
    max-height: 80vh;
  }

  @media (min-width: 1200px) {
    max-width: 30vw;
  }
`;

const Buttons = styled(RowContainer)`
  justify-content: space-between;
  grid-column: 1 / -1;
`;

const HomeIcon = styled(IoMdHome)`
  color: ${({ theme }) => theme.tertiary};
  font-size: 1.5rem;
`;

const ModalNavButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.tertiary};
  border-color: transparent;
  cursor: pointer;
  border-radius: 50%;
  padding: 0.3rem;
`;

const BackIcon = styled(IoIosArrowBack)`
  color: ${({ theme }) => theme.tertiary};
  font-size: 1.5rem;
`;

const Level = styled.section`
  grid-column: 1 / -1;
  text-align: center;
`;

const LevelLabel = styled.h2`
  color: ${({ theme }) => theme.tertiary};
  display: inline;
`;

const LevelStatusText = styled.h1`
  color: ${({ theme }) => theme.tertiary};
  font-size: 1.7rem;
`;

const ShowLabel = styled.label`
  color: ${({ theme }) => theme.tertiary};
  align-self: center;
  font-size: 1.3rem;
  margin-left: 0.3rem;
`;

const Stats = styled.article`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  padding: 1rem 3rem;
  align-content: center;
  justify-self: center;
`;

const StatsItem = styled(ColumnContainer)`
  align-items: center;
  margin-bottom: 0.5rem;
`;

const ScoreLabel = styled.h1`
  color: ${({ theme }) => theme.tertiary};
  font-size: 2rem;
  text-align: center;
`;

const ScoreLabelTitle = styled.label`
  text-align: center;
`;

const Review = styled(PrimaryButton)`
  grid-column: 1 / 2;
  height: 2.5rem;
`;

const PlayAgain = styled(PrimaryButton)`
  grid-column: -1 / -2;
  height: 2.5rem;
`;

const NextLevel = styled(PrimaryButton)`
  grid-column: 1 / -1;
  height: 2.5rem;
`;

export {
  FinishModalContainer,
  ModalNavButton,
  BackIcon,
  Level,
  LevelLabel,
  LevelStatusText,
  Stats,
  StatsItem,
  ScoreLabel,
  ShowLabel,
  ScoreLabelTitle,
  Review,
  PlayAgain,
  NextLevel,
  Buttons,
  HomeIcon,
};
