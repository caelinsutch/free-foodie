import React from "react";
import { VStack } from "@chakra-ui/react";

// import { graphql, useStaticQuery } from "gatsby";
// import { getImage } from "gatsby-plugin-image";
// import { BgImage } from "gbimage-bridge";
import FreeFoodieIcon from "./FreeFoodieIcon";
import ScrollButton from "./ScrollButton";

type LandingProps = {
  fullpageApi: any;
};

const Landing: React.FC<LandingProps> = ({ fullpageApi }) => {
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
      className="section"
      width="100%"
      minHeight="100vh"
      bgColor="#00F4CF"
      justifyContent="space-between"
      alignItems="center"
      padding="2rem 0"
    >
      <ScrollButton invisibleFlex="true" fullpageApi={fullpageApi} />
      <FreeFoodieIcon />
      <ScrollButton
        data-sal="slide-up"
        data-sal-delay="100"
        data-sal-easing="ease"
        data-sal-duration="700"
        fullpageApi={fullpageApi}
      />
    </VStack>
    // </BgImage>
  );
};

export default Landing;
