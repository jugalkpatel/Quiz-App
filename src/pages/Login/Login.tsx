import { useState } from "react";
import { Form, Formik } from "formik";
import { useNavigate, useLocation } from "react-router-dom";
import { Location } from "history";
import { useTheme } from "styled-components";

import {
  FormContainer,
  FormHeader,
  FormLabel,
  FormTitle,
  FormLink,
  SubmitButton,
} from "../../styles/common.styles";

import { LoginTypes } from "../../common";
import { useAuth } from "../../contexts";
import { InputField, Spinner } from "../../components";
import { loginSchema } from "../../validation";
import { handleAuthClick } from "../../helpers";

function Login() {
  const initialValues: LoginTypes = {
    email: "",
    password: "",
  };

  // const savedValues: LoginTypes = {
  //   email: "expert@co.mail",
  //   password: "Expert1234",
  // };

  const [loginCredentials, setLoginCredentials] =
    useState<LoginTypes>(initialValues);

  const { setAuthCredentials } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { from: Location };
  const from = state ? state.from.pathname : "/";
  const theme = useTheme();

  // const expertLogin = (values: typeof initialValues) => {};

  const handleSubmit = async (values: typeof initialValues) => {
    const url = "/auth/login";
    // TODO: Add types to result
    const result = await handleAuthClick({
      values,
      setAuthCredentials,
      navigate,
      url,
      path: from,
    });
    return result;
  };

  return (
    <FormContainer>
      <FormHeader>
        <FormTitle>log in</FormTitle>
        <FormLabel>
          Not registered?
          <FormLink to="/signup">sign up</FormLink>
        </FormLabel>
      </FormHeader>

      <Formik
        initialValues={loginCredentials}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting, handleSubmit }) => (
          <Form>
            <InputField
              label="email"
              id="email"
              type="email"
              value="email"
              placeholder="Enter Email"
            />

            <InputField
              label="Password"
              id="password"
              type="password"
              value="password"
              placeholder="Enter Password"
            />

            <SubmitButton disabled={isSubmitting}>
              {isSubmitting ? (
                <Spinner
                  isLoading={isSubmitting}
                  size="5px"
                  color={theme.primary}
                />
              ) : (
                "login"
              )}
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
}

export { Login };
