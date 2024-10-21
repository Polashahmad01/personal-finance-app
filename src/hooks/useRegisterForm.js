import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerMutation } from "../services/auth.service";
import { userRegisterSchemaValidator } from "../utils/userSchemaValidation";

export default function useRegisterForm() {
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userRegisterSchemaValidator),
    mode: "all",
  });

  const { mutate, data, isPending } = useMutation({
    mutationKey: ["register-user"],
    mutationFn: registerMutation,
  });

  const onSubmit = (formData) => {
    console.log(formData);
  };

  const passwordClickHandler = () => {
    if (passwordType === "password") {
      setPasswordType(() => "text");
    } else {
      setPasswordType(() => "password");
    }
  };

  const confirmPasswordClickHandler = () => {
    if (confirmPasswordType === "password") {
      setConfirmPasswordType(() => "text");
    } else {
      setConfirmPasswordType(() => "password");
    }
  };

  return {
    errors,
    register,
    passwordType,
    confirmPasswordType,
    onSubmit,
    handleSubmit,
    passwordClickHandler,
    confirmPasswordClickHandler,
  };
}
