import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

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
import { InputField } from "../../components";
import { loginSchema } from "../../validation";
import { handleAuthClick } from "../../helpers";

function Login() {
  const initialValues: LoginTypes = {
    email: "",
    password: "",
  };
  const { setAuthCredentials } = useAuth();
  const navigate = useNavigate();

  const handleSumit = (values: typeof initialValues) => {
    const url = "/auth/login";
    handleAuthClick({ values, setAuthCredentials, navigate, url });
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
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleSumit}
      >
        {() => (
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

            <SubmitButton type="submit">log in</SubmitButton>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
}

export { Login };
