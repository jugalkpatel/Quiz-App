import { useNavigate } from "react-router-dom";

import { FaPlay } from "react-icons/fa";
import {
  LevelCard,
  PlayButton,
  LevelLabel,
  LevelName,
  ContentWrapper,
  CardImg,
  LockOverlay,
  LockIcon,
} from "./Difficultycard.styles";

import { Levels, LevelTypes } from "../../common";
import { useAuth } from "../../contexts";

export type DifficultyCardProps = {
  levelNumber?: 1 | 2 | 3;
  image: string;
  level: LevelTypes;
};

function DifficultyCard({ levelNumber, level, image }: DifficultyCardProps) {
  const navigate = useNavigate();
  const { level: userLevel } = useAuth();
  const isUnlock =
    !userLevel || Levels[level] > Levels[userLevel] ? false : true;

  return (
    <>
      <LevelCard>
        <CardImg src={image} />
        <ContentWrapper>
          {level && <LevelLabel>level {levelNumber}</LevelLabel>}
          <LevelName>{level}</LevelName>
          <PlayButton onClick={() => navigate(`/play/${level}`)}>
            <FaPlay />
          </PlayButton>
        </ContentWrapper>
        {!isUnlock ? (
          <LockOverlay>
            <LockIcon />
          </LockOverlay>
        ) : null}
      </LevelCard>
    </>
  );
}

export { DifficultyCard };
