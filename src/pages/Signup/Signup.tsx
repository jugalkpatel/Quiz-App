import { useNavigate, useLocation } from "react-router-dom";
import { Location } from "history";
import { Formik, Form } from "formik";

import {
  SubmitButton,
  FormContainer,
  FormHeader,
  FormLabel,
  FormTitle,
  FormLink,
} from "../../styles/common.styles";

import { Register } from "../../common";
import { useAuth } from "../../contexts/";
import { InputField, Spinner } from "../../components/";
import { registerSchema } from "../../validation";
import { handleAuthClick } from "../../helpers";

function Signup() {
  const initialValues: Register = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const { dispatch } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { from: Location };
  const from = state ? state.from.pathname : "/home";

  const handleSubmit = async (values: Register) => {
    const url = "/auth/register";
    const redirect = () => navigate(from, { replace: true });
    await handleAuthClick({ values, url, dispatch, redirect });
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
        {({ isSubmitting }) => (
          <Form>
            <InputField
              label="name"
              id="name"
              type="text"
              value="name"
              placeholder="Enter Name"
            />

            <InputField
              label="email"
              id="email"
              type="text"
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

            <InputField
              label="password confirmation"
              id="confirm"
              type="password"
              value="confirmPassword"
              placeholder="Re Enter Password"
            />

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <Spinner
                  isLoading={isSubmitting}
                  size="5px"
                />
              ) : (
                "register"
              )}
            </SubmitButton>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
}

export { Signup };
