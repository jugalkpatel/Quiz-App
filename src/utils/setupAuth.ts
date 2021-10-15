import { User, AuthTypes } from "../common";
import { logout, setupAuthExceptionHandler } from ".";
import { setupAuthHeaderForServiceCalls } from "../helpers";

const setupAuth = ({
  setAuthCredentials,
  navigate,
}: AuthTypes): ((params: User) => void) => {
  const logoutUser = logout(setAuthCredentials, navigate);
  return ({ id, name, token, level }: User) => {
    if (id && name && token && level) {
      setupAuthHeaderForServiceCalls(token);
      setupAuthExceptionHandler(logoutUser);
      setAuthCredentials((prevState: User) => {
        return { ...prevState, authenticated: true, id, name, token, level };
      });
      localStorage?.setItem(
        "liquiz",
        JSON.stringify({ id, name, token, level })
      );
      navigate("/");
    }
  };
};

export { setupAuth };
