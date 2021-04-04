import React from "react";

import Layout from "../components/Layout";
import Landing from "../components/Landing";
import About from "../components/About";
import Team from "../components/Team";
import Donate from "../components/Donate";
// import ScrollableContainer from "react-full-page-scroll";

const HomePage: React.FC = () => {
  return (
    <Layout>
      {/* <ScrollableContainer animationTime={1000}> */}
      <Landing />
      <About />
      <Team />
      <Donate />
      {/* </ScrollableContainer> */}
    </Layout>
  );
};

export default HomePage;
