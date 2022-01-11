import { QuestionNavigation, NumberLabel } from "./QuestionNav.styles";

import { LevelTypes, QuestionType } from "../../common";
import { ACTIONTYPE } from "../../hooks/useGamePlay/useGamePlay.hook";
import { ACTIONS } from "../../helpers";

export type QuestionNavProps = {
  level: LevelTypes;
  isSubmitted: boolean;
  questionNumber: number;
  questions: QuestionType[];
  dispatch: React.Dispatch<ACTIONTYPE>;
};

function QuestionNav({
  level,
  isSubmitted,
  questionNumber,
  questions,
  dispatch,
}: QuestionNavProps) {
  const handleClick = (index: number) => {
    return level !== "Rookie" && !isSubmitted
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
