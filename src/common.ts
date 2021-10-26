import { NavigateFunction } from "react-router";

// Register
export type RegisterTypes = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

// Login
export type LoginTypes = {
  email: string;
  password: string;
};

// Difficulty or Level Types
export type DifficultyTypes = {
  Rookie: string;
  Skillful: string;
  Expert: string;
};

// Gameplay
export type QuestionType = {
  id: string;
  statement: string;
  options: string[];
  answers: string[];
};

export type SprintType = {
  userName: string;
  points: number;
  time: string;
  level: keyof DifficultyTypes;
};

export type QuizType = {
  id: string;
  level: keyof DifficultyTypes | "";
  questions: QuestionType[] | [];
  leaderBoard: SprintType[] | [];
};

// User
export type User = {
  id: string;
  token: string;
  name: string;
  level: string;
  authenticated?: boolean;
};

// DashBoard
export type DashBoardTypes = DifficultyTypes & {
  Profile?: string;
};

// Level instructions
export type LevelInfoTypes = {
  level?: 1 | 2 | 3;
  image: string;
  description?: string;
  instructions?: string[];
};

export type GamePlayTypes = {
  readonly [property in keyof DashBoardTypes]: LevelInfoTypes;
};

// Auth Types

export type AuthTypes = {
  setAuthCredentials: React.Dispatch<React.SetStateAction<User>>;
  navigate: NavigateFunction;
};

export type AuthResponse = {
  success: boolean;
  message: string;
  user: {
    id: string;
    name: string;
    token: string;
    level: keyof DifficultyTypes;
  };
};

export type AuthError = {
  success: boolean;
  message: string;
};
