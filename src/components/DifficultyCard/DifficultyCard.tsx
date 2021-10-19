import { useNavigate } from "react-router-dom";

import {
  LevelCard,
  PlayButton,
  LevelLabel,
  LevelName,
  ContentWrapper,
  CardImg,
} from "./difficultycard.styles";
import { FaPlay } from "react-icons/fa";

type DifficultyCardProps = {
  level?: string;
  name: string;
  image: string;
};

function DifficultyCard({ level, name, image }: DifficultyCardProps) {
  const navigate = useNavigate();
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
      </LevelCard>
    </>
  );
}

export { DifficultyCard };
