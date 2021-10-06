import { string, object, ref } from "yup";

const registerSchema = object({
  name: string()
    .trim()
    .required("name is required.")
    .min(3, "name must be between 3 to 20 charaters")
    .max(20)
    .lowercase(),
  email: string().email().required("email is required.").lowercase(),
  password: string()
    .trim()
    .required("password is required.")
    .min(6, "password must be six characters long.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
      "password must contains atleast one uppercase letter, one lowercase letter and one number."
    ),
  confirmPassword: string()
    .required("confirm password is required.")
    .oneOf([ref("password")], "please make sure your passwords match."),
});

export { registerSchema };
