import { Flex, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

import DonationDetails from "./DonationDetails";
import PaymentDetails from "./PaymentDetails";
import SuccessPage from "./SuccessPage";

const Donate: React.FC = () => {
  const [page, setPage] = useState(0);

  const nextPage = () => {
    setPage((page) => page + 1);
  };

  const formSwitch = () => {
    switch (page) {
      case 0:
        return <DonationDetails nextPage={nextPage} />;
      case 1:
        return <PaymentDetails nextPage={nextPage} />;
      case 2:
        return <SuccessPage />;
      default:
        return <div> Error, please reload page. </div>;
    }
  };

  return (
    <Flex
      height="100vh"
      width="100%"
      bgColor="#FFEB9A"
      justifyContent="center"
      alignItems="center"
      className="section"
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
        {formSwitch()}
      </VStack>
    </Flex>
  );
};

export default Donate;
