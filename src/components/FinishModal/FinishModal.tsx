import { useLocation, useNavigate } from "react-router";
// import Confetti from "react-confetti";

import { ModalBackContainer, RowContainer } from "../../styles/common.styles";
import {
  FinishModalContainer,
  BackIcon,
  ModalNavButton,
  Level,
  LevelLabel,
  LevelStatusText,
  Stats,
  ScoreLabel,
  ShowLabel,
  ScoreLabelTitle,
  Review,
  PlayAgain,
  NextLevel,
  Buttons,
  HomeIcon,
  StatsItem,
} from "./FinishModal.styles";

import { GamePlayStateType, GamePlayTypes, Levels } from "../../common";
import { useSprint } from "../../pages";
import { obtainLevel } from "../../utils";

export type FinishModalTypes = GamePlayStateType & {
  sprint: GamePlayTypes;
};

function FinishModal() {
  const location = useLocation();
  const pathname = location.pathname;

  const level = obtainLevel(pathname);
  const navigate = useNavigate();
  const { isLevelUp, points, totalTime, isInLeaderBoard } = useSprint();

  const handleNextLevelClick = () => {
    const levels = Object.keys(Levels);
    const levelIndex = levels.indexOf(level);
    if (isLevelUp) {
      if (levelIndex < 2) {
        navigate(`/play/${levels[levelIndex + 1]}`);
      } else {
        navigate(`/play/${levels[0]}`);
      }
    }
  };

  return (
    <>
      <ModalBackContainer>
        <FinishModalContainer>
          <Level>
            <Buttons>
              <ModalNavButton onClick={() => navigate(-1)}>
                <BackIcon />
              </ModalNavButton>
              <ModalNavButton onClick={() => navigate("/home")}>
                <HomeIcon />
              </ModalNavButton>
            </Buttons>
            <label>level</label> <LevelLabel>{level}</LevelLabel>
            <LevelStatusText>
              {isLevelUp ? "completed" : "better luck next time!"}
            </LevelStatusText>
          </Level>

          <Stats>
            <StatsItem>
              <ScoreLabelTitle>your score</ScoreLabelTitle>
              <ScoreLabel>{points} / 10</ScoreLabel>
            </StatsItem>

            <StatsItem>
              <ScoreLabelTitle>time</ScoreLabelTitle>
              <RowContainer>
                <ScoreLabel>{totalTime}</ScoreLabel>
                <ShowLabel>sec</ShowLabel>
              </RowContainer>
            </StatsItem>
          </Stats>

          <Review onClick={() => navigate(-1)}>review</Review>
          <PlayAgain onClick={() => navigate(`/play/${level}`)}>
            play again
          </PlayAgain>
          {isLevelUp ? (
            <NextLevel onClick={handleNextLevelClick}>next level</NextLevel>
          ) : null}
        </FinishModalContainer>
      </ModalBackContainer>
      {/* {isInLeaderBoard && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )} */}
    </>
  );
}

export { FinishModal };
