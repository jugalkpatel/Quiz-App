import axios, { AxiosError } from "axios";

import {
  RegisterTypes,
  LoginTypes,
  AuthError,
  AuthResponse,
} from "../../common";
import { axiosInstance } from "../../helpers/";

export async function authenticate(
  url: string,
  payload: RegisterTypes | LoginTypes
): Promise<AuthResponse | AuthError> {
  try {
    const response = await axiosInstance.post<AuthResponse>(url, payload);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<AuthError>;

      if (serverError && serverError?.response) {
        return serverError.response.data;
      }
    }

    return { success: false, message: "something went wrong!" } as AuthError;
  }
}
