import { Flex, HStack, Text, VStack, Button, Input } from "@chakra-ui/react";
import React from "react";

const Donate: React.FC = () => {
  return (
    <Flex
      height="100vh"
      width="100%"
      bgColor="#FFEB9A"
      justifyContent="center"
      alignItems="center"
    >
      <VStack>
        <Text
          fontFamily="Lovelo"
          fontSize={{ base: "90px", md: "120px" }}
          color="#fff"
          data-sal="slide-right"
          data-sal-easing="ease"
          data-sal-duration="1500"
        >
          DONATE
        </Text>
        <VStack
          borderRadius="0"
          borderWidth="10px"
          borderColor="#ECCB45"
          bgColor="#fff"
          spacing="1rem"
          padding={{ base: "1rem 1rem", sm: "3rem 3rem" }}
          data-sal="slide-left"
          data-sal-easing="ease"
          data-sal-duration="1500"
        >
          <HStack>
            <Button
              height="100px"
              width="100px"
              bgColor="#FBE074"
              borderRadius="0px"
            >
              <Text
                fontFamily="Glacial Indifference"
                color="#fff"
                fontSize="40px"
              >
                $5
              </Text>
            </Button>
            <Button
              height="100px"
              width="100px"
              bgColor="#FBE074"
              borderRadius="0px"
            >
              <Text
                fontFamily="Glacial Indifference"
                color="#fff"
                fontSize="40px"
              >
                $10
              </Text>
            </Button>
            <Button
              height="100px"
              width="100px"
              bgColor="#FBE074"
              borderRadius="0px"
            >
              <Text
                fontFamily="Glacial Indifference"
                color="#fff"
                fontSize="40px"
              >
                $xx
              </Text>
            </Button>
          </HStack>
          <Input
            placeholder="johnsmith@gmail.com"
            fontFamily="Pt Mono"
            borderWidth="0px"
            size="md"
          />
          <Button
            borderWidth="3px"
            borderColor="#FBE074"
            borderRadius={0}
            bgColor="transparent"
            padding="1.5rem 1rem"
          >
            <Text color="#FBE074" fontSize="30px">
              Next
            </Text>
          </Button>
        </VStack>
      </VStack>
    </Flex>
  );
};

export default Donate;
