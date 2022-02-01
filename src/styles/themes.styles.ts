import { DefaultTheme } from "styled-components";
import light_leaderboard from "../assets/light_leaderboard.svg";
import dark_leaderboard from "../assets/dark_leaderboard.svg";

export const lightTheme: DefaultTheme = {
  primary: "#FEFEFE",
  secondary: "#F7F7F8",
  tertiary: "#000000",
  border: "#D4D8E8",
  label: "#727272",
  valid: "#078D2C",
  invalid: "#CD1111",
  leaderBoard: light_leaderboard,
};

export const darkTheme: DefaultTheme = {
  primary: "#181818",
  secondary: "#242526",
  tertiary: "#E4E6EB",
  border: "#B3B3B3",
  label: "#AAAAAA",
  valid: "#078D2C",
  invalid: "#CD1111",
  leaderBoard: dark_leaderboard,
};
