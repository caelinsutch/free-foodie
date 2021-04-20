import React from "react";
import { VStack, Button, Text } from "@chakra-ui/react";

const Subscription: React.FC = () => {
  return (
    <VStack
      borderRadius="0"
      borderWidth="10px"
      borderColor="#ECCB45"
      bgColor="#fff"
      spacing={{ base: "1rem", md: "2rem" }}
      padding={{ base: "1rem 1rem", md: "3rem 3rem" }}
      data-sal="slide-left"
      data-sal-easing="ease"
      data-sal-duration="1500"
      width={{ base: "20rem", md: "30rem" }}
      height={{ base: "15rem", md: "25rem" }}
      justifyContent="center"
    >
      <Text
        fontFamily="Glacial Indifference"
        fontSize={{ base: "sm", md: "md" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>
      <Button
        fontFamily="Pt Mono"
        borderWidth="3px"
        borderColor="#FBE074"
        borderRadius={0}
        bgColor="transparent"
        padding={{ base: "0.5rem 0.5rem", md: "1.5rem 1rem" }}
      >
        <Text color="#FBE074" fontSize={{ base: "sm", md: "md" }}>
          Subscribe
        </Text>
      </Button>
    </VStack>
  );
};

export default Subscription;
