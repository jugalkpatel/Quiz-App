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

function GamePlayHeader() {
  return (
    <GamePlayHeaderContainer>
      <QuitButton>
        <QuitIcon />
      </QuitButton>

      <CommonWrapper>
        <TimeIcon />
        <TimeLabel>10</TimeLabel>
      </CommonWrapper>

      <CommonWrapper>
        <ScoreIcon />
        <ScoreLabel>10</ScoreLabel>
      </CommonWrapper>
    </GamePlayHeaderContainer>
  );
}

export { GamePlayHeader };
