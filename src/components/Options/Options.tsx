import { useTheme } from "styled-components";
import { Option, OptionContainer } from "./Options.styles";

import { QuestionType, RecordAnswerType } from "../../common";
import { ACTIONS } from "../../helpers";
import { ACTIONTYPE } from "../../hooks/useGamePlay/useGamePlay.hook";

const getCorrectAnswers = (answers: string[], options: string[]): number[] => {
  const correctAnswers: number[] = options.reduce(
    (prevValue: number[], currentValue, index) => {
      if (answers.includes(currentValue)) {
        prevValue.push(index);
      }
      return prevValue;
    },
    []
  );

  return correctAnswers;
};

const isOptionValid = (answers: number[], index: number): boolean => {
  return answers.includes(index) ? true : false;
};

export type OptionsProps = {
  questionNumber: number;
  question: QuestionType;
  dispatch: React.Dispatch<ACTIONTYPE>;
  attended: RecordAnswerType | null;
  isSubmitted: boolean;
};

function Options({
  questionNumber,
  question,
  dispatch,
  attended,
  isSubmitted,
}: OptionsProps) {
  const { options, answers } = question;
  const { isVisited, userAnswer }: RecordAnswerType = attended
    ? { isVisited: attended.isVisited, userAnswer: attended.userAnswer }
    : { isVisited: false, userAnswer: -1 };

  const theme = useTheme();
  const correctAnswers = getCorrectAnswers(answers, options);

  // TODO: Seperate out isOptionCorrect
  const isOptionCorrect = (currentOption: number) => {
    const styleObject: React.CSSProperties = {
      backgroundColor: "transparent",
      color: theme.tertiary,
    };

    if (isVisited && userAnswer === currentOption) {
      styleObject["backgroundColor"] = theme.tertiary;
      styleObject["color"] = theme.primary;
    }

    if(isSubmitted && isOptionValid(correctAnswers, currentOption)) {
      styleObject["backgroundColor"] = theme.valid;
      styleObject["color"] = theme.tertiary;
    }


    if (
      isVisited &&
      isSubmitted &&
      userAnswer === currentOption &&
      !isOptionValid(correctAnswers, currentOption)
    ) {
      styleObject["backgroundColor"] = theme.invalid;
      styleObject["color"] = theme.tertiary;
    }

    return styleObject;
  };

  return (
    <OptionContainer>
      {options.map((option, index) => {
        return (
          <Option
            key={option}
            disabled={isVisited || isSubmitted}
            onClick={() =>
              dispatch({
                type: ACTIONS.SUBMIT_ANSWER,
                payload: {
                  questionNumber,
                  userAnswer: index,
                  isCorrect: correctAnswers.includes(index),
                },
              })
            }
            style={isOptionCorrect(index)}
          >
            {option}
          </Option>
        );
      })}
    </OptionContainer>
  );
}

export { Options };
