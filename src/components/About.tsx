import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const About: React.FC = () => {
  return (
    <Flex
      id="about-section"
      width="100%"
      height="100vh"
      bgColor="#FF00BF"
      justifyContent="center"
      alignItems="center"
      padding={{ base: "0 1.5rem", md: "0rem 5rem", lg: "0rem 10rem" }}
      className="section"
    >
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        fontSize={{ base: "80px", md: "120px", xl: "140px" }}
        color="#fff"
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-easing="ease"
        data-sal-duration="700"
      >
        <Text
          fontFamily="Lovelo"
          width={{ base: "100%", md: "500px" }}
          lineHeight={{ base: "6rem", md: "10rem" }}
          paddingRight={{ base: "none", md: "2.5rem" }}
          // overflowWrap="normal"
          textShadow="-0.3rem -0.3rem #FF00BF, -0.4rem -0.4rem #fff"
        >
          WHAT WE DO
        </Text>
        <Text
          fontFamily="Glacial Indifference"
          fontSize={{
            base: "14px",
            sm: "16px",
            md: "18px",
            lg: "18px",
            xl: "20px",
            "2xl": "20px",
          }}
          lineHeight={{ base: "1.5rem", lg: "2rem" }}
        >
          At Free Foodie, our mission is simple: spread the word about food
          waste. Whether through our podcast series, our YouTube channel, our
          Instagram page or even our Tik Tok page, we want to create a community
          where anyone can understand, discuss, and most importantly, help
          tackle the problem of food waste.
          <br />
          <br />
          At the end of the day, Free Foodie is just a bunch of students who
          love food and want the whole world to love it as much as we do! And
          while we know that to create a meaningful impact takes A LOT of time,
          effort, and patience, we believe that with the right mentality
          ANYTHING is possible.
          <br />
          <br />
          So, enough rambling! Come join the Free Foodie family!
        </Text>
      </Flex>
    </Flex>
  );
};

export default About;
