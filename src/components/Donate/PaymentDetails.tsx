import React from "react";
import { VStack, HStack, Button, Text, Input } from "@chakra-ui/react";
import styled from "styled-components";

type PaymentDetailsProps = {
  nextPage: () => void;
};

const PaymentDetails: React.FC<PaymentDetailsProps> = ({ nextPage }) => {
  return (
    <VStack
      borderRadius="0"
      borderWidth="10px"
      borderColor="#ECCB45"
      bgColor="#fff"
      spacing="1rem"
      padding={{ base: "0.5rem 0.5rem", sm: "2rem 2rem" }}
      width={{ base: "20rem", md: "30rem" }}
      height={{ base: "20rem", md: "25rem" }}
      justifyContent="center"
      alignItems="center"
    >
      <VStack alignItems="flex-start">
        <DonateText size={{ base: "sm", md: "md" }}>Credit Card</DonateText>
        <DonateInput
          placeholder="XXXX XXXX XXXX XXXX"
          fontFamily="Pt Mono"
          borderWidth="0px"
          size={{ base: "sm", md: "md" }}
          paddingLeft="1rem"
        />
        <HStack>
          <VStack alignItems="flex-start">
            <DonateText size={{ base: "sm", md: "md" }}>Expiration</DonateText>
            <DonateInput
              placeholder="XX/XX"
              fontFamily="Pt Mono"
              borderWidth="0px"
              size={{ base: "sm", md: "md" }}
              paddingLeft="1rem"
            />
          </VStack>
          <VStack alignItems="flex-start">
            <DonateText size={{ base: "sm", md: "md" }}>CVV</DonateText>
            <DonateInput
              placeholder="XXX"
              fontFamily="Pt Mono"
              borderWidth="0px"
              size={{ base: "sm", md: "md" }}
              paddingLeft="1rem"
            />
          </VStack>
        </HStack>

        <DonateText size={{ base: "sm", md: "md" }}>Address</DonateText>
        <DonateInput
          placeholder="Address"
          fontFamily="Pt Mono"
          borderWidth="0px"
          size={{ base: "sm", md: "md" }}
          paddingLeft="1rem"
        />
      </VStack>
      <Button
        fontFamily="Pt Mono"
        borderWidth="3px"
        borderColor="#FBE074"
        borderRadius={0}
        bgColor="transparent"
        padding={{ base: "0.5rem 0.5rem", md: "1.5rem 1rem" }}
        onClick={() => nextPage()}
      >
        <Text color="#FBE074" fontSize={{ base: "22px", md: "30px" }}>
          Submit
        </Text>
      </Button>
    </VStack>
  );
};

export default PaymentDetails;

const DonateText = styled(Text)`
  font-family: "Pt Mono";
  font-size: "20px";
  color: "#0c0c0c";
  text-align: "flex-start";
  padding-left: 1rem;
`;

const DonateInput = styled(Input)`
  font-family: "Pt Mono";
  border-width: "0px";
  font-size: "md";
  padding-left: "1rem";
`;
