import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNotification } from "./useNotification";
import { registerMutation } from "../services/auth.service";
import { userRegisterSchemaValidator } from "../utils/userSchemaValidation";

export default function useRegisterForm() {
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const { notifySuccess, notifyError } = useNotification();

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
    mutate(formData);
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

  useEffect(() => {
    if (!data) {
      return;
    }

    const { success, statusCode, message } = data;

    if (success && statusCode === 201) {
      notifySuccess(message);
    } else if (!success && (statusCode === 400 || statusCode === 422)) {
      notifyError(message);
    }
  }, [data, notifyError, notifySuccess]);

  return {
    errors,
    isPending,
    passwordType,
    confirmPasswordType,
    register,
    onSubmit,
    handleSubmit,
    passwordClickHandler,
    confirmPasswordClickHandler,
  };
}
