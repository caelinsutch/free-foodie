import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import Layout from "../components/Layout";
import Landing from "../components/Landing";
import About from "../components/About";
import Team from "../components/Team";
import Donate from "../components/Donate";
import Instagram from "../components/Instagram/Instagram";
// import ScrollableContainer from "react-full-page-scroll";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <ReactFullpage
        scrollingSpeed={1000}
        verticalCentered={false}
        navigation={true}
        render={({ fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <Landing fullpageApi={fullpageApi} />
              <About />
              <Instagram />
              <Team />
              <Donate />
            </ReactFullpage.Wrapper>
          );
        }}
      ></ReactFullpage>
    </Layout>
  );
};

export default HomePage;
