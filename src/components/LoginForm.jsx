import { Link } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import useLoginForm from "../hooks/useLoginForm";

export default function LoginForm() {
  const {
    errors,
    isPending,
    passwordType,
    onSubmit,
    register,
    handleSubmit,
    passwordTypeHandler,
  } = useLoginForm();

  return (
    <form
      className="bg-white p-8 rounded-lg mx-4 mb-4 lg:mx-0 lg:w-7/12"
      onSubmit={handleSubmit(onSubmit)}>
      <h3 className="text-3xl font-semibold opacity-70 mb-6">
        Login to your account
      </h3>
      <div className="flex flex-col gap-1 mb-4">
        <label htmlFor="email" className="opacity-70">
          Email
        </label>
        <input
          type="email"
          className="bg-[#F7F4EF] py-2 px-4 font-light text-sm rounded-lg border focus:outline-0 focus:border focus:border-[#8ba3e7]"
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-red-700 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1 mb-4">
        <label htmlFor="password" className="opacity-70">
          Password
        </label>
        <div className="relative">
          <input
            type={passwordType}
            className="bg-[#F7F4EF] py-2 px-4 font-light text-sm rounded-lg border w-full focus:outline-0 focus:border focus:border-[#8ba3e7]"
            {...register("password")}
          />
          {errors.password && (
            <p className="mt-1 text-red-700 text-sm">
              {errors.password.message}
            </p>
          )}
          <div onClick={passwordTypeHandler}>
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
      <div className="flex justify-center items-center mb-4">
        <button
          disabled={isPending}
          className="bg-[#6a3ee5] text-white w-full py-2 rounded-lg transition-all hover:bg-opacity-80">
          Login
        </button>
      </div>
      <div className="flex items-center justify-center gap-2 opacity-70">
        <p>Don&apos;t have an account?</p>
        <Link
          to="/auth/register"
          className="font-semibold underline transition-all hover:bg-opacity-70">
          Register
        </Link>
      </div>
    </form>
  );
}
