import axios, { AxiosError } from "axios";

import {
  Register,
  LoginTypes,
  ServerError,
  AuthResponse,
} from "../../common";

export async function authenticate(
  url: string,
  payload: Register | LoginTypes
): Promise<AuthResponse | ServerError> {
  try {
    const response = await axios.post<AuthResponse>(url, payload);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error as AxiosError<ServerError>;

      if (serverError && serverError?.response) {
        return serverError.response.data;
      }
    }

    return { success: false, message: "something went wrong!" } as ServerError;
  }
}
