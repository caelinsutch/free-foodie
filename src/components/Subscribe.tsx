import React from "react";
import { VStack, Flex } from "@chakra-ui/react";

const Subscribe: React.FC = () => {
  return (
    <Flex
      height="100vh"
      width="100%"
      bgColor="#FFEB9A"
      justifyContent="center"
      alignItems="center"
      className="section"
    >
      <VStack
        borderRadius="0"
        borderWidth="10px"
        borderColor="#ECCB45"
        bgColor="#fff"
        spacing={{ base: "1rem", md: "2rem" }}
        data-sal="slide-left"
        data-sal-easing="ease"
        data-sal-duration="1500"
        width={{ base: "20rem", md: "30rem" }}
        height="400px"
        justifyContent="center"
      >
        <iframe
          className="mj-w-res-iframe"
          frameBorder="0"
          scrolling="no"
          style={{
            overflow: "none",
          }}
          height="500px"
          width="300px"
          src="https://app.mailjet.com/widget/iframe/6Q0X/Jxp"
        />

        <script
          type="text/javascript"
          src="https://app.mailjet.com/statics/js/iframeResizer.min.js"
        />
      </VStack>
    </Flex>
  );
};

export default Subscribe;
