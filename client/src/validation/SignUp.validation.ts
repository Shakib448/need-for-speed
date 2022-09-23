import * as yup from "yup";

export const SignUpValidation = yup
  .object({
    name: yup.string().label("Name").required(),
    email: yup.string().email().required().label("Email"),
    password: yup
      .string()
      .required()
      .label("Password")
      .min(8, "Password must be at least 8 characters"),

    confirmPassword: yup
      .string()
      .required()
      .label("Confirm Password")
      .oneOf([yup.ref("password"), null], "Password is not matched!"),
  })
  .required();
