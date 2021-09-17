import {
  QuestionContainer,
  QuestionNumberLabel,
  QuestionStatementLabel,
  OptionContainer,
  Option,
  QuestionFooter,
  NextButton,
  BackButton,
} from "./question.styles";

import { IoMdArrowBack } from "react-icons/io";

function Question() {
  const question_number = 6;
  return (
    <QuestionContainer>
      <QuestionNumberLabel>
        Question {question_number} of 10
      </QuestionNumberLabel>

      <QuestionStatementLabel>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aut non
        in enim soluta dolore impedit facilis nihi distinctio velit!
      </QuestionStatementLabel>

      <OptionContainer>
        <Option>Lorem ipsum dolor sit amet</Option>
        <Option>Lorem ipsum dolor sit amet</Option>
        <Option>Lorem ipsum dolor sit amet</Option>
        <Option>Lorem ipsum dolor sit amet</Option>
      </OptionContainer>

      <QuestionFooter>
        <BackButton>
          <IoMdArrowBack />
        </BackButton>
        <NextButton>Next</NextButton>
      </QuestionFooter>
    </QuestionContainer>
  );
}

export { Question };
