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
      padding={{ base: "1rem 1rem", sm: "3rem 3rem" }}
    >
      <VStack alignItems="flex-start">
        <DonateText>Credit Card</DonateText>
        <DonateInput
          placeholder="XXXX XXXX XXXX XXXX"
          fontFamily="Pt Mono"
          borderWidth="0px"
          size="md"
          paddingLeft="1rem"
        />
        <HStack>
          <VStack alignItems="flex-start">
            <DonateText>Expiration</DonateText>
            <DonateInput
              placeholder="XX/XX"
              fontFamily="Pt Mono"
              borderWidth="0px"
              size="md"
            />
          </VStack>
          <VStack alignItems="flex-start">
            <DonateText>CVV</DonateText>
            <DonateInput
              placeholder="XXX"
              fontFamily="Pt Mono"
              borderWidth="0px"
              size="md"
            />
          </VStack>
        </HStack>

        <DonateText>Address</DonateText>
        <DonateInput
          placeholder="Address"
          fontFamily="Pt Mono"
          borderWidth="0px"
          size="md"
        />
      </VStack>
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
