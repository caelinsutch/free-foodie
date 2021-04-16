import React from "react";
import { VStack, Text } from "@chakra-ui/react";

const SuccessPage: React.FC = () => {
  return (
    <VStack
      borderRadius="0"
      borderWidth="10px"
      borderColor="#ECCB45"
      bgColor="#fff"
      spacing="1rem"
      padding={{ base: "1rem 1rem", sm: "3rem 3rem" }}
    >
      <svg
        width="65"
        height="49"
        viewBox="0 0 65 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3 24.5L21.5 43L61.5 3" stroke="#FFEB9A" strokeWidth="8" />
      </svg>

      <Text
        fontFamily="Pt Mono"
        color="#FBE074"
        fontSize="30px"
        textAlign="center"
      >
        Donation Processed!
      </Text>
    </VStack>
  );
};

export default SuccessPage;
