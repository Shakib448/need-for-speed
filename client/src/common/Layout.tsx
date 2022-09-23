import React from "react";

interface LayoutTs {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutTs) => {
  return <main>{children}</main>;
};

export default Layout;
