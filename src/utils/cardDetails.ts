import beginner from "../assets/beginner.svg";
import intermediate from "../assets/intermediate.svg";
import expert from "../assets/expert.svg";
import history from "../assets/history.svg";

import { CardType, Levels } from "../common";

const levels = Object.keys(Levels);

const cardDetails: CardType[] = [
  {
    name: "Rookie",
    route: `/play/${levels[0]}`,
    image: beginner,
    level: "Rookie",
    levelNumber: 1,
  },
  {
    name: "Skillful",
    route: `/play/${levels[1]}`,
    image: intermediate,
    level: "Skillful",
    levelNumber: 2,
  },
  {
    name: "Expert",
    route: `/play/${levels[2]}`,
    image: expert,
    level: "Expert",
    levelNumber: 3,
  },
  {
    name: "History",
    route: "/history",
    image: history,
  },
];

export { cardDetails };
