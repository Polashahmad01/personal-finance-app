import { useState } from "react";
import { Link } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

export default function RegisterForm() {
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

  return (
    <form className="bg-white w-7/12 p-8 rounded-lg">
      <h3 className="text-3xl font-semibold opacity-70 mb-6">
        Create an account
      </h3>
      <div className="flex flex-col gap-1 mb-4">
        <label htmlFor="name" className="opacity-70">
          Name
        </label>
        <input
          type="text"
          className="bg-[#F7F4EF] py-2 px-4 font-light text-sm rounded-lg border focus:outline-0 focus:border focus:border-[#8ba3e7]"
          id="name"
        />
      </div>
      <div className="flex flex-col gap-1 mb-4">
        <label htmlFor="email" className="opacity-70">
          Email
        </label>
        <input
          type="email"
          className="bg-[#F7F4EF] py-2 px-4 font-light text-sm rounded-lg border focus:outline-0 focus:border focus:border-[#8ba3e7]"
        />
      </div>
      <div className="flex flex-col gap-1 mb-4">
        <label htmlFor="password" className="opacity-70">
          Password
        </label>
        <div className="relative">
          <input
            type={passwordType}
            className="bg-[#F7F4EF] py-2 px-4 font-light text-sm rounded-lg border w-full focus:outline-0 focus:border focus:border-[#8ba3e7]"
          />
          <div onClick={passwordClickHandler}>
            {passwordType === "password" ? (
              <IoEyeOff
                size="20px"
                className="absolute top-[9px] right-4 cursor-pointer"
              />
            ) : (
              <IoEyeSharp
                size="20px"
                className="absolute top-[9px] right-4 cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 mb-6">
        <label htmlFor="confirmPassword" className="opacity-70">
          Confirm Password
        </label>
        <div className="relative">
          <input
            type={confirmPasswordType}
            className="bg-[#F7F4EF] py-2 px-4 font-light text-sm rounded-lg border w-full focus:outline-0 focus:border focus:border-[#8ba3e7]"
          />
          <div onClick={confirmPasswordClickHandler}>
            {confirmPasswordType === "password" ? (
              <IoEyeOff
                size="20px"
                className="absolute top-[9px] right-4 cursor-pointer"
              />
            ) : (
              <IoEyeSharp
                size="20px"
                className="absolute top-[9px] right-4 cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mb-4">
        <button className="bg-[#6a3ee5] text-white w-full py-2 rounded-lg transition-all hover:bg-opacity-80">
          Create Account
        </button>
      </div>
      <div className="flex items-center justify-center gap-2 opacity-70">
        <p>Already have an account?</p>
        <Link
          to="/auth/login"
          className="font-semibold underline transition-all hover:bg-opacity-70">
          Login
        </Link>
      </div>
    </form>
  );
}
