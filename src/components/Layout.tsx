import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import "./styles/Layout.css";
import "@fontsource/pt-mono";
import { Helmet } from "react-helmet";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Free Foodie</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <main>{children}</main>
    </>
  );
};

export default Layout;
