import { useNavigate } from "react-router-dom";

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
import { FaPlay } from "react-icons/fa";

import { useAuth } from "../../contexts";

export type DifficultyCardProps = {
  level?: string;
  name: string;
  image: string;
};

function DifficultyCard({ level, name, image }: DifficultyCardProps) {
  const navigate = useNavigate();
  const { level: userLevel } = useAuth();
  return (
    <>
      <LevelCard>
        <CardImg src={image} />
        <ContentWrapper>
          {level && <LevelLabel>level {level}</LevelLabel>}
          <LevelName>{name}</LevelName>
          <PlayButton onClick={() => navigate(`/play/${name}`)}>
            <FaPlay />
          </PlayButton>
        </ContentWrapper>
        {level && userLevel !== name && (
          <LockOverlay>
            <LockIcon />
          </LockOverlay>
        )}
      </LevelCard>
    </>
  );
}

export { DifficultyCard };
