import { QuestionNavigation, NumberLabel } from "./question-nav.styles";
function QuestionNav() {
  const questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <QuestionNavigation>
      {questions.map((number: number, index: number) => (
        <NumberLabel key={index}>{number}</NumberLabel>
      ))}
    </QuestionNavigation>
  );
}

export { QuestionNav };
