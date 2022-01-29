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

import { Levels, LevelTypes, CardType } from "../../common";
import { useAuth } from "../../contexts";

export type DifficultyCardProps = {
  levelNumber?: 1 | 2 | 3;
  image: string;
  level: LevelTypes;
};

function DifficultyCard({ levelNumber, level, image, name, route }: CardType) {
  const navigate = useNavigate();
  const { level: userLevel } = useAuth();

  const isLock =
    userLevel && level && Levels[level] > Levels[userLevel] ? true : false;

  return (
    <>
      <LevelCard>
        <CardImg src={image} />
        <ContentWrapper>
          {level && <LevelLabel>level {levelNumber}</LevelLabel>}
          <LevelName>{name}</LevelName>
          <PlayButton onClick={() => navigate(route)}>
            <FaPlay />
          </PlayButton>
        </ContentWrapper>
        {isLock ? (
          <LockOverlay>
            <LockIcon />
          </LockOverlay>
        ) : null}
      </LevelCard>
    </>
  );
}

export { DifficultyCard };
