import axios from "axios";

import { LoginTypes, RegisterTypes } from "../../common";

import { authenticate } from "./authenticate.service";

const { isAxiosError } = axios;
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedIsAxiosError = axios.isAxiosError as jest.MockedFunction<
  typeof isAxiosError
>;

describe("testing authentication service for login and register", () => {
  const exampleResponseData = {
    id: "123456789",
    name: "bob",
    token: "348sdf030434xdfs038943403",
    level: "Expert",
  };

  it("login user successfully", async () => {
    mockedAxios.post.mockResolvedValueOnce({
      data: {
        success: true,
        message: "Authenticated Successfully",
        user: exampleResponseData,
      },
    });

    const loginPayload: LoginTypes = {
      email: "bob@gmail.com",
      password: "foobar12345",
    };

    const response = await authenticate("/auth/login", loginPayload);

    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    expect(response).toEqual({
      success: true,
      message: "Authenticated Successfully",
      user: exampleResponseData,
    });
  });

  it("register user successfully", async () => {
    mockedAxios.post.mockResolvedValueOnce({
      data: {
        success: true,
        message: "Registered Successfully",
        user: exampleResponseData,
      },
    });

    const registerPayload: RegisterTypes = {
      email: "bob@gmail.com",
      name: "bob",
      password: "Foobar12345",
      confirmPassword: "Foobar12345",
    };

    const response = await authenticate("/auth/register", registerPayload);

    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    expect(response).toEqual({
      success: true,
      message: "Registered Successfully",
      user: exampleResponseData,
    });
  });

  it("normal login error", async () => {
    const exampleResponseError = {
      success: false,
      message: "something went wrong!",
    };

    mockedAxios.post.mockRejectedValueOnce(exampleResponseError);

    const loginPayload: LoginTypes = {
      email: "bob@gmail.com",
      password: "foobar12345",
    };
    const response = await authenticate("/auth/login", loginPayload);
    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    expect(response).toEqual(exampleResponseError);
  });

  it("axios login error", async () => {
    const exampleAxiosError = {
      success: false,
      message: "example message text",
    };

    const loginPayload: LoginTypes = {
      email: "bob@gmail.com",
      password: "foobar12345",
    };

    mockedAxios.post.mockRejectedValueOnce({
      response: { data: exampleAxiosError },
    });

    mockedIsAxiosError.mockImplementationOnce(() => true);
    const response = await authenticate("/auth/login", loginPayload);

    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    expect(mockedIsAxiosError).toHaveBeenCalled();
    expect(response).toEqual(exampleAxiosError);
  });
});
