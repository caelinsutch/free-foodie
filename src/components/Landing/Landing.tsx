import React from "react";
import { VStack } from "@chakra-ui/react";

// import { graphql, useStaticQuery } from "gatsby";
// import { getImage } from "gatsby-plugin-image";
// import { BgImage } from "gbimage-bridge";
import FreeFoodieIcon from "./FreeFoodieIcon";
import ScrollButton from "./ScrollButton";

const Landing: React.FC = () => {
  // const { landingBgImage } = useStaticQuery(
  //   graphql`
  //     query {
  //       landingBgImage: file(relativePath: { eq: "LandingBg.png" }) {
  //         childImageSharp {
  //           gatsbyImageData(
  //             width: 3000
  //             quality: 100
  //             webpOptions: { quality: 100 }
  //           )
  //         }
  //       }
  //     }
  //   `
  // );

  // const image = getImage(landingBgImage);

  return (
    // <BgImage image={image}>
    <VStack
      width="100%"
      minHeight="100vh"
      bgColor="#00F4CF"
      justifyContent="space-between"
      padding="2rem 0"
    >
      <ScrollButton invisibleFlex="true" />
      <FreeFoodieIcon />
      <ScrollButton
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-easing="ease"
        data-sal-duration="700"
      />
    </VStack>
    // </BgImage>
  );
};

export default Landing;
