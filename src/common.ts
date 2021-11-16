import { NavigateFunction } from "react-router";

export type Theme = "dark" | "light";

export type ThemeTypes = {
  mode: Theme;
  setMode: () => void;
};

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

// Level Types
export const Levels = {
  Rookie: 1,
  Skillful: 2,
  Expert: 3,
} as const;

export type LevelTypes = keyof typeof Levels;

export type User = {
  id: string;
  token: string;
  name: string;
  level: LevelTypes | "";
  authenticated?: boolean;
};

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
  level: LevelTypes;
};

export type QuizType = {
  id: string;
  level: LevelTypes | "";
  questions: QuestionType[] | [];
  leaderBoard: SprintType[] | [];
};

// Gameplay

export type QuizDescTypes = {
  readonly [property in LevelTypes]: LevelInfoTypes;
};

export type GamePlayStateType = {
  questions: QuestionType[];
};

export type RecordAnswerType = {
  isVisited: boolean;
  userAnswer: number;
};

export type AttendedType = {
  [key: number]: RecordAnswerType;
};

export type QuestionStateType = {
  questionNumber: number;
  attended?: AttendedType;
};

export type GamePlayTypes = {
  questionNumber: number;
  points: number;
  negativePoints: number;
  isSubmitted: boolean;
  attended?: AttendedType;
};

// Level instructions
export type LevelInfoTypes = {
  levelNumber?: 1 | 2 | 3;
  image: string;
  description?: string;
  instructions?: string[];
};

// Auth Types

export type AuthTypes = {
  setAuthCredentials: React.Dispatch<React.SetStateAction<User>>;
  navigate: NavigateFunction;
};

export type AuthResponse = {
  success: boolean;
  message: string;
  user: User;
};

export type ServerError = {
  success: boolean;
  message: string;
};
