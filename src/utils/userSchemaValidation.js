import * as Yup from "yup";

export const userRegisterSchemaValidator = Yup.object().shape({
  name: Yup.string().required("Name is requred!"),
  email: Yup.string()
    .required("Email is required!")
    .email("Invalid email address!"),
  password: Yup.string()
    .required("Password is required!")
    .min(6, "Password must be at list 6 characters!"),
  confirmPassword: Yup.string()
    .required("Confirm password is required!")
    .oneOf([Yup.ref("password"), null], "Passwords must match!"),
});
