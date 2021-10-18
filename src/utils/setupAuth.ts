import { User, AuthTypes } from "../common";
import { logout, setupAuthExceptionHandler } from ".";
import { setupAuthHeader } from "../utils";

const setupAuth = ({
  setAuthCredentials,
  navigate,
}: AuthTypes): ((params: User) => void) => {
  const logoutUser = logout(setAuthCredentials, navigate);
  return ({ id, name, token, level }: User) => {
    if (id && name && token && level) {
      setupAuthHeader(token);
      setupAuthExceptionHandler(logoutUser);
    } else {
      logoutUser();
    }
  };
};

export { setupAuth };
