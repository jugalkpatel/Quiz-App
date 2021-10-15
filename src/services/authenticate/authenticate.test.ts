import axios from "axios";
import { register } from "..";

import { axiosInstance } from "../../helpers/axios";

jest.mock("../../helpers/axios");

const mockedAxios = axiosInstance as jest.Mocked<typeof axiosInstance>;
const mockedIsAxiosError = jest.spyOn(axios, "isAxiosError");

describe("register", () => {
  it("should register successfully", async () => {
    mockedAxios.post.mockResolvedValue({
      data: {
        success: true,
        message: "registered successfully",
        user: {
          id: "123456789",
          name: "jugal patel",
        },
      },
    });

    const user = await register({
      name: "Jugal Patel",
      email: "ptjimmy99@gmail.com",
      password: "Abcd1234",
      confirmPassword: "Abcd1234",
    });

    expect(user).toEqual({
      success: true,
      message: "registered successfully",
      user: {
        id: "123456789",
        name: "jugal patel",
      },
    });
    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
  });

  it("should fail at registration with axios error", async () => {
    mockedAxios.post.mockRejectedValueOnce({
      response: {
        data: {
          success: false,
          message: "some random message",
        },
      },
    });

    mockedIsAxiosError.mockImplementationOnce((_) => true);

    jest.fn().mockImplementation((_) => true);

    const user = await register({
      name: "Jugal Patel",
      email: "ptjimmy99@gmail.com",
      password: "Abcd1234",
      confirmPassword: "Abcd1234",
    });

    expect(user).toEqual({
      success: false,
      message: "some random message",
    });
    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    expect(mockedIsAxiosError).toHaveBeenCalledTimes(1);
  });

  it("should fail at registration with default error message", async () => {
    mockedAxios.post.mockRejectedValueOnce({
      success: false,
      message: "something went wrong!",
    });

    const user = await register({
      name: "jugal patel",
      email: "ptjimmy99@gmail.com",
      password: "abcd1234",
      confirmPassword: "abcd1234",
    });

    expect(user).toEqual({ success: false, message: "something went wrong!" });
    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    expect(mockedIsAxiosError).toHaveBeenCalledTimes(1);
  });
});

export {};
