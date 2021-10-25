import toast from "react-hot-toast";

import { RegisterTypes, AuthTypes, LoginTypes, User } from "../common";
import { authenticate } from "../services";

export type SubmitTypes = AuthTypes & {
  url: string;
  path: string;
  values: RegisterTypes | LoginTypes;
};

const handleAuthClick = async ({
  values,
  setAuthCredentials,
  navigate,
  url,
  path,
}: SubmitTypes) => {
  try {
    const data = await authenticate(url, values);

    if (!("user" in data)) {
      throw new Error(data.message);
    }

    const { id, name, token, level } = data.user;

    if (!id || !name || !token || !level) {
      throw new Error("missing values in response");
    }

    setAuthCredentials((prevState: User) => {
      return { ...prevState, authenticated: true, id, name, token, level };
    });

    localStorage?.setItem("liquiz", JSON.stringify({ id, name, token, level }));

    navigate(path, { replace: true });

    return data;
  } catch (error) {
    const toastError = error as Error;
    toast.error(toastError.message, { position: "bottom-center" });
    return error;
  }
};

export { handleAuthClick };
