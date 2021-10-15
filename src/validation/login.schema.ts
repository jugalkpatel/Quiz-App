import { string, object } from "yup";

const loginSchema = object({
  email: string().email().required("email is required").lowercase(),
  password: string()
    .trim()
    .required("password is required")
    .min(6, "password must be six chracters long.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
      "password must contains atleast one uppercase letter, one lowercase letter and one number."
    ),
});

export { loginSchema };
