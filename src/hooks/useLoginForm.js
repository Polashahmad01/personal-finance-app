import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNotification } from "./useNotification";
import { loginMutation } from "../services/auth.service";
import { userLoginSchemaValidator } from "../utils/userSchemaValidation";

export default function useLoginForm() {
  const [passwordType, setPasswordType] = useState("password");
  const { notifySuccess, notifyError } = useNotification();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userLoginSchemaValidator),
    mode: "all",
  });

  const { mutate, isPending, data } = useMutation({
    mutationKey: ["user-login"],
    mutationFn: loginMutation,
  });

  const onSubmit = (formData) => {
    mutate(formData);
  };

  const passwordTypeHandler = () => {
    if (passwordType === "password") {
      setPasswordType(() => "text");
    } else {
      setPasswordType(() => "password");
    }
  };

  useEffect(() => {
    if (!data) {
      return;
    }
    const { success, statusCode, message } = data;
    if (success && statusCode === 200) {
      notifySuccess(message);
    } else if (!success && (statusCode === 401 || statusCode === 422)) {
      notifyError(message);
    }
  }, [data, notifyError, notifySuccess]);

  return {
    errors,
    isPending,
    passwordType,
    onSubmit,
    register,
    handleSubmit,
    passwordTypeHandler,
  };
}
