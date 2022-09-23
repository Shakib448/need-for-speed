import React from "react";
import Link from "next/link";
import useYupValidationResolver from "@utils/validationResolver";
import { SignInValidation } from "@validation/SignIn.validation";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

type FormValues = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const resolver = useYupValidationResolver(SignInValidation);

  const LoginMutation = useMutation(
    async (formData: FormValues) => {
      const { data } = await axios.post("/api/login", formData);
      return data;
    },
    {
      onSuccess: (data) => {},
    }
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    try {
      await LoginMutation.mutateAsync(formData);
      reset();
    } catch (err: any) {
      toast.error(err.response?.data?.message);
    }
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <ToastContainer />
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white px-6 py-8 rounded shadow-md text-black w-full"
        >
          <h1 className="mb-8 text-3xl text-center">Sign in</h1>
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
            {...register("password")}
            placeholder="Password"
          />

          {errors.password?.message && (
            <p className="text-red-500 text-xs mb-2">
              {errors.password?.message}
            </p>
          )}

          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-[#38C071] text-white hover:bg-[#454B1B] focus:outline-none my-1"
          >
            Login
          </button>
        </form>

        <div className="text-grey-dark mt-6">
          Not have an account?
          <Link
            className="no-underline border-b border-blue text-blue"
            href="/"
          >
            Sign In
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default Login;
