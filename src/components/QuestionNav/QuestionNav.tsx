import { QuestionNavigation, NumberLabel } from "./QuestionNav.styles";

import { GAME_STATUS, LevelTypes, QuestionType } from "../../common";
import { ACTIONTYPE } from "../../hooks/useGamePlay/useGamePlay.hook";
import { ACTIONS } from "../../helpers";

export type QuestionNavProps = {
  level: LevelTypes;
  status: GAME_STATUS;
  questionNumber: number;
  questions: QuestionType[];
  dispatch: React.Dispatch<ACTIONTYPE>;
};

function QuestionNav({
  level,
  status,
  questionNumber,
  questions,
  dispatch,
}: QuestionNavProps) {
  const handleClick = (index: number) => {
    return level !== "Rookie" && status === "PLAYING"
      ? null
      : dispatch({ type: ACTIONS.REDIRECT_TO, payload: { to: index } });
  };

  return (
    <QuestionNavigation>
      {questions.map(({ id }, index) => (
        <NumberLabel
          key={id}
          onClick={() => handleClick(index)}
          enableHighlight={index === questionNumber ? true : false}
        >
          {index + 1}
        </NumberLabel>
      ))}
    </QuestionNavigation>
  );
}

export { QuestionNav };
