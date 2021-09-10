import {
  LevelCard,
  PlayButton,
  LevelLabel,
  LevelName,
  ContentWrapper,
} from "./difficultycard.styles";

import { FaPlay } from "react-icons/fa";

type DifficultyCardProps = {
  level: 1 | 2 | 3;
  levelName: string;
};

function DifficultyCard({ level, levelName }: DifficultyCardProps) {
  return (
    <>
      <LevelCard>
        <ContentWrapper>
          <PlayButton>
            <FaPlay />
          </PlayButton>
          <LevelLabel>level {level}</LevelLabel>
          <LevelName>{levelName}</LevelName>
        </ContentWrapper>
      </LevelCard>
    </>
  );
}

export { DifficultyCard };
