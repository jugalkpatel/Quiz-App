import { createContext } from "react";

import { AuthState } from "../../common";
import { AUTH_ACTIONS } from "../../hooks/useAuthData/useAuthData.hook";

export type AuthContextTypes = AuthState & {
  dispatch: React.Dispatch<AUTH_ACTIONS>;
};

const AuthContext = createContext<AuthContextTypes | null>(null);

export { AuthContext };
