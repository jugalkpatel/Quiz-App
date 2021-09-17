import styled from "styled-components";
import { questionFont } from "../../styles/common.styles";

import { FaCheck } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";

const GamePlayHeaderContainer = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${questionFont};
  color: ${({ theme }) => theme.tertiary};
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.primary};
  border-radius: 10px;
  margin-bottom: 1rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`;

const QuitButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 0.5rem;
  height: fit-content;
  width: fit-content;
  background-color: transparent;
  margin: 0;
  border: 0;
  color: ${({ theme }) => theme.tertiary};
`;

const TimeLabel = styled.span`
  display: block;
  padding: 0.5rem;
`;

const ScoreIcon = styled(FaCheck)`
  font-size: 1.5rem;
`;

const TimeIcon = styled(MdWatchLater)`
  font-size: 1.5rem;
`;

const QuitIcon = styled(AiFillCloseCircle)`
  font-size: 1.5rem;
`;

const CommonWrapper = styled.section`
  display: flex;
  align-items: center;
`;

const ScoreLabel = styled.span`
  display: block;
  padding: 0.5rem;
`;

const NumberLabel = styled.span`
  display: block;
  color: ${({ theme }) => theme.tertiary};
  padding: 0 2rem;
`;

export {
  GamePlayHeaderContainer,
  QuitButton,
  TimeLabel,
  ScoreIcon,
  TimeIcon,
  QuitIcon,
  CommonWrapper,
  ScoreLabel,
  NumberLabel,
};
