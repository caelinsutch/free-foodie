import React from "react";
import { VStack, HStack, Button, Text, Input } from "@chakra-ui/react";

type DonationDetailsProps = {
  nextPage: () => void;
};

const DonationDetails: React.FC<DonationDetailsProps> = ({ nextPage }) => {
  return (
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
          <Text fontFamily="Glacial Indifference" color="#fff" fontSize="40px">
            £5
          </Text>
        </Button>
        <Button
          height="100px"
          width="100px"
          bgColor="#FBE074"
          borderRadius="0px"
        >
          <Text fontFamily="Glacial Indifference" color="#fff" fontSize="40px">
            £10
          </Text>
        </Button>
        <Button
          height="100px"
          width="100px"
          bgColor="#FBE074"
          borderRadius="0px"
        >
          <Text fontFamily="Glacial Indifference" color="#fff" fontSize="40px">
            £xx
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
        fontFamily="Pt Mono"
        borderWidth="3px"
        borderColor="#FBE074"
        borderRadius={0}
        bgColor="transparent"
        padding="1.5rem 1rem"
        onClick={() => nextPage()}
      >
        <Text color="#FBE074" fontSize="30px">
          Next
        </Text>
      </Button>
    </VStack>
  );
};

export default DonationDetails;
