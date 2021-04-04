import React from "react";
import { Flex, Text, VStack } from "@chakra-ui/react";

import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

const About: React.FC = () => {
  const { aboutBgImage } = useStaticQuery(
    graphql`
      query {
        aboutBgImage: file(relativePath: { eq: "AboutBg.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 3000
              quality: 100
              webpOptions: { quality: 100 }
            )
          }
        }
      }
    `
  );

  const image = getImage(aboutBgImage);

  return (
    <BgImage image={image}>
      <Flex
        width="100%"
        height="100vh"
        justifyContent="center"
        alignItems="center"
        padding={{ base: "4rem 2rem", lg: "4rem 4rem", xl: "4rem 6rem" }}
      >
        <VStack
          alignItems="flex-start"
          fontSize={{ base: "50px", lg: "60px", xl: "70px" }}
          color="#fff"
        >
          <Text fontFamily="Lovelo">WHAT WE DO</Text>
          <Text
            fontFamily="Lovelo-Line"
            position="absolute"
            transform="translate(-0.3rem)"
          >
            WHAT WE DO
          </Text>
          <Text
            fontFamily="Glacial Indifference"
            fontSize={{
              base: "14px",
              sm: "14px",
              md: "18px",
              lg: "20px",
              xl: "24px",
              "2xl": "28px",
            }}
            fontWeight="bold"
            lineHeight={{ base: "2rem", lg: "2.5rem" }}
          >
            Every year, around 1/3 of all food is wasted, yet 854 million people
            are considered undernourished worldwide. But the reality of today
            doesn’t have to be the reality of tomorrow.
            <br />
            <br />
            At Free Foodie, our mission is simple: create a community where
            anyone can understand, discuss, and most importantly, help tackle
            the problem of food waste. Whether through podcasting,
            “Instagram-ing”, or even “Tik Tok-ing” we just want to do everything
            we can to help make people aware of the dangers and consequences of
            food waste.
            <br />
            <br />
            And while we know that to create a meaningful impact takes A LOT of
            time, effort, and patience, we believe that with the right mentality
            ANYTHING is possible.
            <br />
            <br />
            So, come join the Free Foodie family!
          </Text>
        </VStack>
      </Flex>
    </BgImage>
  );
};

export default About;
