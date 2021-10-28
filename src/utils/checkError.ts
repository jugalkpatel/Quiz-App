import axios, { AxiosError } from "axios";
import { ServerError } from "../common";

function checkError(error: any): ServerError {
  if (axios.isAxiosError(error)) {
    console.log("error is an axios error");

    const serverError = error as AxiosError<ServerError>;

    if (serverError && serverError?.response) {
      return serverError.response.data;
    }
  }

  return { success: false, message: "something went wrong!" } as ServerError;
}

export { checkError };
