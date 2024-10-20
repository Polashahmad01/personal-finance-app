import { useState } from "react";

export default function useRegisterForm() {
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  const passwordClickHandler = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  const confirmPasswordClickHandler = () => {
    if (confirmPasswordType === "password") {
      setConfirmPasswordType("text");
    } else {
      setConfirmPasswordType("password");
    }
  };

  return {
    passwordType,
    confirmPasswordType,
    passwordClickHandler,
    confirmPasswordClickHandler,
  };
}
