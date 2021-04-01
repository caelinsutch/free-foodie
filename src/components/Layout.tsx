import React from "react";
import "./styles/Layout.css";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;
