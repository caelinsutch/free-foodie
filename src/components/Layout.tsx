import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import "./styles/Layout.css";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
    </>
  );
};

export default Layout;
