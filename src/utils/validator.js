import * as yup from "yup";

export const formRegistrationSchema = yup.object().shape({
  email: yup.string().email(),
  password: yup
    .string()
    .required()
    .min(4, "Password length should be at least 4 characters")
    .max(12, "Password cannot exceed more than 12 characters"),
  cpassword: yup
    .string()
    .required("Confirm Password is required")
    .min(4, "Password length should be at least 4 characters")
    .max(12, "Password cannot exceed more than 12 characters")
    .oneOf([yup.ref("password")], "Passwords do not match"),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const itemSchema = yup.object().shape({
  name: yup.string().required(),
  year: yup.number().required(),
  color: yup.string().required(),
  pantone_value: yup.string().required(),
});
