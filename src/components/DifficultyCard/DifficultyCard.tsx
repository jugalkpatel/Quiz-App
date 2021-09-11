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
  level: string;
  levelName: string;
  image: string;
};

function DifficultyCard({ level, levelName, image }: DifficultyCardProps) {
  return (
    <>
      <LevelCard>
        <CardImg src={image} />
        <ContentWrapper>
          <LevelLabel>level {level}</LevelLabel>
          <LevelName>{levelName}</LevelName>
          <PlayButton>
            <FaPlay />
          </PlayButton>
        </ContentWrapper>
      </LevelCard>
    </>
  );
}

export { DifficultyCard };
