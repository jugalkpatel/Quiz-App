import axios, { AxiosError } from "axios";

import { axiosInstance } from "../../helpers/axios";
import { RegisterTypes, ServerError, RegisterResponse } from "../../common";

export async function register(
  payload: RegisterTypes
): Promise<RegisterResponse | ServerError> {
  try {
    const response = await axiosInstance.post<RegisterResponse>(
      "/auth/register",
      payload
    );

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
