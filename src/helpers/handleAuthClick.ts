import React from "react";
import toast from "react-hot-toast";

import { Register, LoginTypes } from "../common";
import { AUTH_ACTIONS } from "../hooks/useAuthData/useAuthData.hook";
import { authenticate } from "../services";
import { ACTIONS } from "../helpers";

export type AuthClickParams = {
  values: Register | LoginTypes;
  url: string;
  dispatch: React.Dispatch<AUTH_ACTIONS>;
  redirect: () => void;
};

const handleAuthClick = async ({
  values,
  url,
  dispatch,
  redirect,
}: AuthClickParams): Promise<void> => {
  try {
    const data = await authenticate(url, values);

    if (!("user" in data)) {
      throw new Error(data.message);
    }

    const { id, name, token, level, history } = data.user;

    if (!id || !name || !token || !level || !history) {
      throw new Error("missing values in response");
    }

    dispatch({
      type: ACTIONS.SET_DATA,
      payload: {
        user: {
          id,
          history,
          level,
          name,
          token,
        },
      },
    });

    localStorage?.setItem(
      "liquiz",
      JSON.stringify({ id, name, token, level, history })
    );

    redirect();
  } catch (error) {
    const toastError = error as Error;
    toast.error(toastError.message, { position: "bottom-center" });
  }
};

export { handleAuthClick };
