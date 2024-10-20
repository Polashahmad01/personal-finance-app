import { useState } from "react";

export default function useLoginForm() {
  const [passwordType, setPasswordType] = useState("password");

  const passwordTypeHandler = () => {
    if (passwordType === "password") {
      setPasswordType(() => "text");
    } else {
      setPasswordType(() => "password");
    }
  };

  return {
    passwordType,
    passwordTypeHandler,
  };
}
