import { useState } from "react";
import { Form, Formik } from "formik";
import { useNavigate, useLocation } from "react-router-dom";
import { Location } from "history";

import {
  FormContainer,
  FormHeader,
  FormLabel,
  FormTitle,
  FormLink,
} from "../../styles/common.styles";

import { LoginTypes } from "../../common";
import { useAuth } from "../../contexts";
import { InputField, SubmitButton } from "../../components";
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

  // const expertLogin = (values: typeof initialValues) => {};

  const handleSubmit = async (values: typeof initialValues) => {
    const url = "/auth/login";
    const result = await handleAuthClick({
      values,
      setAuthCredentials,
      navigate,
      url,
      path: from,
    });
    return result;
  };

  console.log({ setLoginCredentials });

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

            <SubmitButton type="login" isSubmitting={isSubmitting} />
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
}

export { Login };
