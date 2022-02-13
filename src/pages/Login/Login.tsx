import { useNavigate, useLocation } from "react-router-dom";
import { Location } from "history";
import { Form, Formik } from "formik";

import {
  FormContainer,
  FormHeader,
  FormLabel,
  FormTitle,
  FormLink,
  SubmitButton,
  GuestButton,
} from "../../styles/common.styles";

import { LoginTypes } from "../../common";
import { useAuth } from "../../contexts";
import { InputField, Spinner } from "../../components";
import { loginSchema } from "../../validation";
import { handleAuthClick } from "../../helpers";

const GUEST_EMAIL = process.env.REACT_APP_GUEST_EMAIL as string;
const GUEST_PASS = process.env.REACT_APP_GUEST_PASS as string;

function Login() {
  const initialValues: LoginTypes = {
    email: "",
    password: "",
  };

  const { dispatch } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { from: Location };
  const from = state ? state.from.pathname : "/home";

  const handleSubmit = async (values: LoginTypes) => {
    const url = "/auth/login";

    const redirect = () => navigate(from, { replace: true });

    await handleAuthClick({
      values,
      url,
      dispatch,
      redirect,
    });
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
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting, setValues }) => (
          <Form>
            <InputField
              label="email"
              id="email"
              type="email"
              value="email"
              placeholder="Enter Email"
            />

            <InputField
              label="password"
              id="password"
              type="password"
              value="password"
              placeholder="Enter Password"
            />

            <SubmitButton disabled={isSubmitting}>
              {isSubmitting ? (
                <Spinner isLoading={isSubmitting} size="5px" />
              ) : (
                "login"
              )}
            </SubmitButton>

            <GuestButton
              disabled={isSubmitting}
              onClick={() =>
                setValues({
                  email: GUEST_EMAIL,
                  password: GUEST_PASS,
                })
              }
            >
              enter as expert
            </GuestButton>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
}

export { Login };
