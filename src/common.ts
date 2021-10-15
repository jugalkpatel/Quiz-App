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

export type AuthTypes = {
  setAuthCredentials: React.Dispatch<React.SetStateAction<User>>;
  navigate: NavigateFunction;
};

export type AuthResponse = {
  success: boolean;
  message: string;
  user: { id: string; name: string; token: string; level: string };
};

export type AuthError = {
  success: boolean;
  message: string;
};

export type User = {
  id: string;
  token: string;
  name: string;
  level: string;
  authenticated?: boolean;
};
