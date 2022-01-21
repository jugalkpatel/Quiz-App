import { useEffect, useState } from "react";

import {
  GamePlayHeaderContainer,
  TimeIcon,
  TimeLabel,
  ScoreLabel,
  ScoreIcon,
  CommonWrapper,
} from "./GamePlayHeader.styles";

import { LevelTypes } from "../../common";
import { ACTIONTYPE } from "../../hooks/useGamePlay/useGamePlay.hook";
import { ACTIONS } from "../../helpers";

export type GamePlayHeaderProps = {
  children: JSX.Element;
  isSubmitted: boolean;
  level: LevelTypes;
  questionNumber: number;
  dispatch: React.Dispatch<ACTIONTYPE>;
};

function GamePlayHeader({
  children,
  isSubmitted,
  level,
  questionNumber,
  dispatch,
}: GamePlayHeaderProps) {
  const [time, setTime] = useState(30);

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
      {children}

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
