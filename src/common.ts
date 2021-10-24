import { NavigateFunction } from "react-router";

export type RegisterTypes = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginTypes = {
  email: string;
  password: string;
};

export type User = {
  id: string;
  token: string;
  name: string;
  level: string;
  authenticated?: boolean;
};

export type DifficultyTypes = {
  Rookie: string;
  Skillful: string;
  Expert: string;
};

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

export type DashBoardTypes = DifficultyTypes & {
  Profile?: string;
};

export type LevelInfoTypes = {
  level?: 1 | 2 | 3;
  image: string;
  description?: string;
  instructions?: string[];
};

export type GamePlayTypes = {
  readonly [property in keyof DashBoardTypes]: LevelInfoTypes;
};
