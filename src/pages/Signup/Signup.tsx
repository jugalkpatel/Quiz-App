import { Formik, Form } from "formik";
import { useNavigate, useLocation } from "react-router-dom";
import { Location } from "history";

import {
  SubmitButton,
  FormContainer,
  FormHeader,
  FormLabel,
  FormTitle,
  FormLink,
} from "../../styles/common.styles";

import { RegisterTypes } from "../../common";
import { useAuth } from "../../contexts/";
import { InputField } from "../../components/";
import { registerSchema } from "../../validation";
import { handleAuthClick } from "../../helpers";

function Signup() {
  const initialValues: RegisterTypes = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const { setAuthCredentials } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { from: Location };
  const from = state ? state.from.pathname : "/";

  const handleSubmit = (values: typeof initialValues) => {
    const url = "/auth/register";
    handleAuthClick({ values, setAuthCredentials, navigate, url, path: from });
  };

  return (
    <FormContainer>
      <FormHeader>
        <FormTitle>sign up</FormTitle>
        <FormLabel>
          alredy registered?
          <FormLink to="/login">log in</FormLink>
        </FormLabel>
      </FormHeader>

      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <InputField
              label="Name"
              id="name"
              type="text"
              value="name"
              placeholder="Enter Name"
            />

            <InputField
              label="Email"
              id="email"
              type="text"
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

            <InputField
              label="Password Confirmation"
              id="confirm"
              type="password"
              value="confirmPassword"
              placeholder="Re Enter Password"
            />

            <SubmitButton type="submit">sign in</SubmitButton>

            {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
}

export { Signup };
