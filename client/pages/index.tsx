import Layout from "@common/Layout";
import Register from "@components/Register";
import { ReactElement } from "react";
import type { NextPageWithLayout } from "@app";

const SignUp: NextPageWithLayout = () => {
  return <Register />;
};

SignUp.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default SignUp;
