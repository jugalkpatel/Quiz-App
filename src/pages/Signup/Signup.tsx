import { Formik, Form } from "formik";
import toast from "react-hot-toast";

import {
  SubmitButton,
  FormContainer,
  FormHeader,
  FormLabel,
  FormTitle,
  FormLink,
} from "../../styles/common.styles";

import { RegisterTypes } from "../../common";
import { InputField } from "../../components/";
import { register } from "../../services/";
import { registerSchema } from "../../validation/register.schema";
import { useAuth } from "../../contexts/";

function Signup() {
  const initialValues: RegisterTypes = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const { authenticated, setupAuth } = useAuth();
  console.log(authenticated);

  const handleSubmit = async (values: RegisterTypes) => {
    try {
      const data = await register(values);
      if (!("user" in data)) {
        throw new Error(data.message);
      }
      // Save JWT
      console.log(data.user);
      const { id, name, token, level } = data.user;
      setupAuth({ id, name, token, level });
    } catch (error) {
      const toastError = error as Error;
      toast.error(toastError.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <FormContainer>
      <FormHeader>
        <FormTitle>Sign Up</FormTitle>
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
        {({ values }) => (
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

            <SubmitButton type="submit">Submit</SubmitButton>

            {/* <pre>{JSON.stringify(values, null, 4)}</pre> */}
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
}

export { Signup };
