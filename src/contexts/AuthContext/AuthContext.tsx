import { createContext } from "react";

import { User } from "../../common";

export type AuthContextTypes = User & {
  setAuthCredentials: React.Dispatch<React.SetStateAction<User>>;
};

// const initialAuthContextValues: AuthContextTypes = {
//   authenticated: false,
//   id: "",
//   token: "",
//   name: "",
//   level: "",
//   setAuthCredentials: () => null,
// };

const AuthContext = createContext<AuthContextTypes | null>(null);

export { AuthContext };
