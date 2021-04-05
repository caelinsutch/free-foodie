import React from "react";
import { Button, HStack, Text } from "@chakra-ui/react";
import { AiOutlineDown } from "react-icons/ai";
import scrollTo from "gatsby-plugin-smoothscroll";

type ScrollButtonProps = {
  invisibleFlex?: string;
};

const ScrollButton: React.FC<ScrollButtonProps> = ({ invisibleFlex }) => {
  return (
    <Button
      onClick={() => scrollTo("#about-section")}
      bgColor="transparent"
      visibility={invisibleFlex ? "hidden" : "visible"}
    >
      <HStack spacing="0.5rem">
        <Text
          color="#fff"
          fontSize="28px"
          fontFamily="Glacial Indifference Bold"
        >
          Scroll
        </Text>
        <AiOutlineDown color="#fff" size="24px" fontWeight="bold" />
      </HStack>
    </Button>
  );
};

export default ScrollButton;
