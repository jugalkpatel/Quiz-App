import beginner from "../assets/beginner.svg";
import intermediate from "../assets/intermediate.svg";
import expert from "../assets/expert.svg";
import profile from "../assets/profile.svg";

import { GamePlayTypes } from "../common";

const dashboardData: GamePlayTypes = {
  Rookie: {
    level: 1,
    image: beginner,
    description:
      "this quiz has been designed to test your knowledge about the basic functions and concepts of Linux.",
    instructions: [
      "no timelimit",
      "there are total 10 questions",
      "1 point for every right answer.",
      "exit from quiz results in 0 points in total",
    ],
  },
  Skillful: {
    level: 2,
    image: intermediate,
    description:
      "this quiz has been designed to test your knowledge about important and helpful commands and programs often executed by intermediate Linux users. ",
    instructions: [""],
  },
  Expert: {
    level: 3,
    image: expert,
    description:
      "this quiz is designed to test your knowledge about  Linux Systems installs, configurations, and maintains assigned server operating system(s).",
    instructions: [""],
  },
  Profile: {
    image: profile,
  },
};

export { dashboardData };
