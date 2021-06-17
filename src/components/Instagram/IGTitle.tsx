import React from "react";
import { VStack, Text, Link } from "@chakra-ui/react";

const IGTitle: React.FC = () => {
  return (
    <>
      <VStack
        borderRadius="20px"
        width={{ base: "250px", sm: "400px" }}
        height={{ base: "250px", sm: "400px" }}
        fontFamily="Lovelo"
        color="#00F4CF"
        fontSize={{ base: "30px", sm: "60px" }}
        justifyContent="center"
        data-sal="slide-left"
        data-sal-delay="100"
        data-sal-easing="ease"
        data-sal-duration="1000"
      >
        <Text>INSTAGRAM</Text>
        <Text
          fontFamily="Lovelo-Line"
          position="absolute"
          transform="translateY(-1rem)"
        >
          INSTAGRAM
        </Text>
        <Link
          bgColor="transparent"
          borderWidth="3px"
          borderColor="#00F4CF"
          borderRadius="10px"
          padding="0 1rem"
          paddingTop="0.5rem"
          href="https://www.instagram.com/freefoodieuk/"
        >
          <Text fontFamily="Lovelo" fontSize={{ base: "14px", sm: "24px" }}>
            FOLLOW US
          </Text>
        </Link>
      </VStack>
    </>
  );
};

export default IGTitle;
