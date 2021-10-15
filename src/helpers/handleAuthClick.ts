import toast from "react-hot-toast";

import { RegisterTypes, AuthTypes, LoginTypes } from "../common";
import { setupAuth } from "../utils/setupAuth";
import { authenticate } from "../services/authenticate/authenticate.service";

export type SubmitTypes = AuthTypes & {
  url: string;
  values: RegisterTypes | LoginTypes;
};

const handleAuthClick = async ({
  values,
  setAuthCredentials,
  navigate,
  url,
}: SubmitTypes) => {
  try {
    const setAuthConfig = setupAuth({ setAuthCredentials, navigate });
    const data = await authenticate(url, values);
    if (!("user" in data)) {
      throw new Error(data.message);
    }
    console.log(data.user);
    const { id, name, token, level } = data.user;
    setAuthConfig({ id, name, token, level });
  } catch (error) {
    const toastError = error as Error;
    toast.error(toastError.message, { position: "bottom-center" });
  }
};

export { handleAuthClick };
