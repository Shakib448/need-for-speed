import React from "react";
import Link from "next/link";

const Login: React.FC = () => {
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign in</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />

          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-[#38C071] text-white hover:bg-[#454B1B] focus:outline-none my-1"
          >
            Login
          </button>
        </div>

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
