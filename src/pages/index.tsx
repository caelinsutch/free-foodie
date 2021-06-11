import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import Layout from "../components/Layout";
import Landing from "../components/Landing";
import About from "../components/About";
import Team from "../components/Team";
import Instagram from "../components/Instagram/Instagram";
import Subscribe from "../components/Subscribe";

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
              <Subscribe />
            </ReactFullpage.Wrapper>
          );
        }}
      ></ReactFullpage>
    </Layout>
  );
};

export default HomePage;
