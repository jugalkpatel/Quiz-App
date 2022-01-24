import { useTheme } from "styled-components";

import { Option, OptionContainer } from "./Options.styles";

import { GAME_STATUS, QuestionType, RecordAnswerType } from "../../common";
import { ACTIONTYPE } from "../../hooks/useGamePlay/useGamePlay.hook";
import { ACTIONS } from "../../helpers";

//extract correct answers index
const getCorrectAnswersIndex = (
  answers: string[],
  options: string[]
): number[] => {
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

const isAnswerCorrect = (answers: number[], index: number): boolean => {
  return answers.includes(index) ? true : false;
};

export type OptionsProps = {
  questionNumber: number;
  question: QuestionType;
  dispatch: React.Dispatch<ACTIONTYPE>;
  attended: RecordAnswerType | null;
  status: GAME_STATUS;
};

function Options({
  questionNumber,
  question,
  dispatch,
  attended,
  status,
}: OptionsProps) {
  const { options, answers } = question;
  const { isVisited, userAnswerIndex }: RecordAnswerType = attended
    ? {
        isVisited: attended.isVisited,
        userAnswerIndex: attended.userAnswerIndex,
      }
    : { isVisited: false, userAnswerIndex: -1 };
  const theme = useTheme();
  const correctAnswers = getCorrectAnswersIndex(answers, options);
  const isSubmitted = status !== "PLAYING" ? true : false;

  // TODO: Seperate out isOptionCorrect
  // params can be: currentOption, theme obj,
  const isOptionCorrect = (currentOption: number) => {
    const styleObject: React.CSSProperties = {
      backgroundColor: "transparent",
      color: theme.tertiary,
    };

    // when ans is given and userAnswer equal to current option index
    if (isVisited && userAnswerIndex === currentOption) {
      styleObject["backgroundColor"] = theme.tertiary;
      styleObject["color"] = theme.primary;
    }

    // when attempt is finish and current option is right
    if (isSubmitted && isAnswerCorrect(correctAnswers, currentOption)) {
      styleObject["backgroundColor"] = theme.valid;
      styleObject["color"] = theme.tertiary;
    }

    // when question is visited
    // attempt is finished
    // current option is selected by user
    // current option is wrong
    if (
      isVisited &&
      isSubmitted &&
      userAnswerIndex === currentOption &&
      !isAnswerCorrect(correctAnswers, currentOption)
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
                  userAnswerIndex: index,
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
