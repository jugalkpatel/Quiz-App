import beginner from "../assets/beginner.svg";
import intermediate from "../assets/intermediate.svg";
import expert from "../assets/expert.svg";
import history from "../assets/history.svg";

import { CardType } from "../common";

const cardDetails: CardType[] = [
  {
    name: "Rookie",
    route: "/play/Rookie",
    image: beginner,
    level: "Rookie",
    levelNumber: 1,
  },
  {
    name: "Skillful",
    route: "/play/skillful",
    image: intermediate,
    level: "Skillful",
    levelNumber: 2,
  },
  {
    name: "Expert",
    route: "/play/expert",
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
