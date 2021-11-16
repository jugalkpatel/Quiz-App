import { QuestionNavigation, NumberLabel } from "./QuestionNav.styles";
import { QuestionType } from "../../common";
import { ACTIONS } from "../../helpers";
import { ACTIONTYPE } from "../../hooks/useGamePlay/useGamePlay.hook";

export type QuestionNavProps = {
  questionNumber: number;
  questions: QuestionType[];
  dispatch: React.Dispatch<ACTIONTYPE>;
};

// TODO: Highlight Question Number based on current Question
function QuestionNav({
  questionNumber,
  questions,
  dispatch,
}: QuestionNavProps) {
  return (
    <QuestionNavigation>
      {questions.map(({ id }, index) => (
        <NumberLabel
          key={id}
          onClick={() =>
            dispatch({ type: ACTIONS.REDIRECT_TO, payload: { to: index } })
          }
          enableHighlight={index === questionNumber ? true : false}
        >
          {index + 1}
        </NumberLabel>
      ))}
    </QuestionNavigation>
  );
}

export { QuestionNav };
