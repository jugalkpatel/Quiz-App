import beginner from "../assets/beginner.svg";
import intermediate from "../assets/intermediate.svg";
import expert from "../assets/expert.svg";
import profile from "../assets/profile.svg";

export type DashBoardTypes = {
  level?: string;
  name: string;
  image: string;
};

const dashboardData: DashBoardTypes[] = [
  {
    level: "1",
    name: "Rookie",
    image: beginner,
  },
  {
    level: "2",
    name: "Skillful",
    image: intermediate,
  },
  {
    level: "3",
    name: "Expert",
    image: expert,
  },
  {
    name: "Profile",
    image: profile,
  },
];

export { dashboardData };
