import beginner from "../assets/beginner.svg";
import intermediate from "../assets/intermediate.svg";
import expert from "../assets/expert.svg";

import { QuizDescTypes } from "../common";

const dashboardData: QuizDescTypes = {
  Rookie: {
    levelNumber: 1,
    image: beginner,
    description:
      "this quiz has been designed to test your knowledge about the basic functions and concepts of Linux.",
    instructions: [
      "no timelimit",
      "there are total 10 questions",
      "1 point for every right answer",
      "exit from quiz results in zero points in total",
      "once you select option it can't be modified"
    ],
  },
  Skillful: {
    levelNumber: 2,
    image: intermediate,
    description:
      "this quiz has been designed to test your knowledge about important and helpful commands and programs often executed by intermediate Linux users. ",
    instructions: [
      "30 seconds to answer each question",
      "there are total 10 questions 1 point for every right answer",
      "exit from quiz results in zero points in total",
    ],
  },
  Expert: {
    levelNumber: 3,
    image: expert,
    description:
      "this quiz is designed to test your knowledge about  Linux Systems installs, configurations, and maintains assigned server operating system(s).",
    instructions: [
      "30 seconds to answer each question",
      "there are total 10 quetsions 1 pint for every right answer",
      "negative marking - 1 point deducted from total for each wrong answer",
      "exit from quiz results in zero points in total",
    ],
  },
};

export { dashboardData };
