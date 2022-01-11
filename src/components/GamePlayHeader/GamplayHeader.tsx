import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import {
  GamePlayHeaderContainer,
  QuitButton,
  TimeIcon,
  TimeLabel,
  ScoreLabel,
  ScoreIcon,
  QuitIcon,
  CommonWrapper,
} from "./GamePlayHeader.styles";

import { LevelTypes } from "../../common";
import { ACTIONTYPE } from "../../hooks/useGamePlay/useGamePlay.hook";
import { ACTIONS } from "../../helpers";

export type GamePlayHeaderProps = {
  isSubmitted: boolean;
  level: LevelTypes;
  questionNumber: number;
  dispatch: React.Dispatch<ACTIONTYPE>;
};

function GamePlayHeader({
  isSubmitted,
  level,
  questionNumber,
  dispatch,
}: GamePlayHeaderProps) {
  const [time, setTime] = useState(30);
  const navigate = useNavigate();

  useEffect(() => {
    if (level === "Rookie" || isSubmitted) {
      return;
    }

    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      dispatch({
        type: ACTIONS.SUBMIT_ANSWER,
        payload: { questionNumber, userAnswerIndex: -1, isCorrect: false },
      });
    }, 30000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      setTime(30);
    };
  }, [questionNumber, dispatch, level, isSubmitted]);

  return (
    <GamePlayHeaderContainer>
      <QuitButton onClick={() => navigate(-1)}>
        <QuitIcon />
      </QuitButton>

      {level !== "Rookie" && (
        <CommonWrapper>
          <TimeIcon />
          <TimeLabel>{time}</TimeLabel>
        </CommonWrapper>
      )}

      <CommonWrapper>
        <ScoreIcon />
        <ScoreLabel>10</ScoreLabel>
      </CommonWrapper>
    </GamePlayHeaderContainer>
  );
}

export { GamePlayHeader };
