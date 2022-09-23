import useYupValidationResolver from "@utils/validationResolver";
import { SignUpValidation } from "@validation/SignUp.validation";
import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register: React.FC = () => {
  const resolver = useYupValidationResolver(SignUpValidation);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      console.log("data", data);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white px-6 py-8 rounded shadow-md text-black w-full"
        >
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            {...register("name")}
            placeholder="Full Name"
          />
          {errors.name?.message && (
            <p className="text-red-500 text-xs mb-2">{errors.name?.message}</p>
          )}
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            {...register("email")}
            placeholder="Email"
          />
          {errors.email?.message && (
            <p className="text-red-500 text-xs mb-2">{errors.email?.message}</p>
          )}

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password?.message && (
            <p className="text-red-500 text-xs mb-2">
              {errors.password?.message}
            </p>
          )}
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            {...register("confirmPassword")}
            placeholder="Confirm Password"
          />
          {errors.confirmPassword?.message && (
            <p className="text-red-500 text-xs mb-2">
              {errors.confirmPassword?.message}
            </p>
          )}

          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-[#38C071] text-white hover:bg-[#454B1B] focus:outline-none my-1"
          >
            Create Account
          </button>
        </form>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <Link
            className="no-underline border-b border-blue text-blue"
            href="/login"
          >
            Log in
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default Register;
