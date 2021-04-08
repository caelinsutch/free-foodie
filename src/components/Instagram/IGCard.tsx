import React from "react";
import { Flex } from "@chakra-ui/react";
import styled from "styled-components";

const IGCard: React.FC = ({ children }) => {
  return (
    <Card
      width={{ base: "250px", sm: "400px" }}
      height={{ base: "250px", sm: "400px" }}
    >
      {children}
    </Card>
  );
};

export default IGCard;

const Card = styled(Flex)`
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  filter: opacity(70%);
  transition: 0.3s ease;

  &:hover {
    filter: opacity(100%);
  }
`;
