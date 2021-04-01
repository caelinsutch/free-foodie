import React from "react";
import {
  Flex,
  Text,
  VStack,
  Image,
  Spacer,
  Button,
  HStack,
  Box,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const About: React.FC = () => {
  return (
    <Flex
      width="100%"
      height="100vh"
      bgColor="#FF00BF"
      justifyContent="center"
      padding="8rem 15rem"
    >
      <VStack alignItems="flex-start">
        <Text fontFamily="Lovelo" fontSize="72px" color="#fff">
          WHAT WE DO
        </Text>
        <Text
          fontFamily="Lovelo-Line"
          fontSize="72px"
          color="#fff"
          position="absolute"
          transform="translate(-0.3rem)"
        >
          WHAT WE DO
        </Text>
        <Text
          fontFamily="Glacial Indifference"
          fontSize="30px"
          color="#fff"
          lineHeight="3rem"
        >
          Every year, around 1/3 of all food is wasted, yet 854 million people
          are considered undernourished worldwide. But the reality of today
          doesn’t have to be the reality of tomorrow.
          <br />
          <br />
          At Free Foodie, our mission is simple: create a community where anyone
          can understand, discuss, and most importantly, help tackle the problem
          of food waste. Whether through podcasting, “Instagram-ing”, or even
          “Tik Tok-ing” we just want to do everything we can to help make people
          aware of the dangers and consequences of food waste.
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
  );
};

export default About;
