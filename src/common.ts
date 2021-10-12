export type RegisterTypes = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type RegisterResponse = {
  success: boolean;
  message: string;
  user: { id: string; name: string; token: string };
};

export type ServerError = {
  success: boolean;
  message: string;
};

export type AuthTypes = {
  authenticated: boolean;
  id: string;
  token: string;
  name: string;
};
