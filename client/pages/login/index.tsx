import Layout from "@common/Layout";
import { ReactElement } from "react";
import type { NextPageWithLayout } from "@app";
import Login from "@components/Login";

const SignIn: NextPageWithLayout = () => {
  return <Login />;
};

SignIn.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default SignIn;
