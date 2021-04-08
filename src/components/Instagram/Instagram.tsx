import React from "react";
import { VStack, HStack, Flex, Text, Link } from "@chakra-ui/layout";
import { StaticImage } from "gatsby-plugin-image";
import IGCard from "./IGCard";
import IGTitle from "./IGTitle";

const Instagram: React.FC = () => {
  return (
    <Flex
      width="100%"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      className="section"
    >
      <HStack spacing={{ base: "1rem", sm: "2rem" }}>
        <VStack
          spacing={{ base: "1rem", sm: "2rem" }}
          transform="translateY(-5%)"
          position="relative"
          zIndex={100}
        >
          <Link href="https://www.instagram.com/p/CNNSkLmDf1r/">
            <IGCard>
              <StaticImage
                src="../../images/InstagramPosts/freefoodieuk22.jpg"
                alt="Instagram Post"
                placeholder="blurred"
              ></StaticImage>
            </IGCard>
          </Link>
          <Link href="https://www.instagram.com/p/CNNSkLmDf1r/">
            <IGCard>
              <StaticImage
                src="../../images/InstagramPosts/freefoodieuk21.jpg"
                alt="Instagram Post"
                placeholder="blurred"
              ></StaticImage>
            </IGCard>
          </Link>
          <Link href="https://www.instagram.com/p/CNNSkLmDf1r/">
            <IGCard>
              <StaticImage
                src="../../images/InstagramPosts/freefoodieuk20.jpg"
                alt="Instagram Post"
                placeholder="blurred"
              ></StaticImage>
            </IGCard>
          </Link>
        </VStack>
        <VStack spacing={{ base: "1rem", sm: "2rem" }}>
          <Link href="https://www.instagram.com/p/CNNSkLmDf1r/">
            <IGCard>
              <StaticImage
                src="../../images/InstagramPosts/freefoodieuk19.jpg"
                alt="Instagram Post"
                placeholder="blurred"
              ></StaticImage>
            </IGCard>
          </Link>
          <IGTitle />
          <Link href="https://www.instagram.com/p/CNNSkLmDf1r/">
            <IGCard>
              <StaticImage
                src="../../images/InstagramPosts/freefoodieuk18.jpg"
                alt="Instagram Post"
                placeholder="blurred"
              ></StaticImage>
            </IGCard>
          </Link>
        </VStack>
        <VStack
          spacing={{ base: "1rem", sm: "2rem" }}
          transform="translateY(-5%)"
          position="relative"
          zIndex={100}
        >
          <Link href="https://www.instagram.com/p/CNNSkLmDf1r/">
            <IGCard>
              <StaticImage
                src="../../images/InstagramPosts/freefoodieuk17.jpg"
                alt="Instagram Post"
                placeholder="blurred"
              ></StaticImage>
            </IGCard>
          </Link>
          <Link href="https://www.instagram.com/p/CNNSkLmDf1r/">
            <IGCard>
              <StaticImage
                src="../../images/InstagramPosts/freefoodieuk16.jpg"
                alt="Instagram Post"
                placeholder="blurred"
              ></StaticImage>
            </IGCard>
          </Link>
          <Link href="https://www.instagram.com/p/CNNSkLmDf1r/">
            <IGCard>
              <StaticImage
                src="../../images/InstagramPosts/freefoodieuk15.jpg"
                alt="Instagram Post"
                placeholder="blurred"
              ></StaticImage>
            </IGCard>
          </Link>
        </VStack>
      </HStack>
      <Text
        fontFamily="Lovelo"
        fontWeight="bold"
        color="#00F4CF"
        fontSize="18vh"
        transform="rotate(90deg) translateY(42rem)"
        position="absolute"
        opacity="0.2"
      >
        INSTAGRAM
      </Text>
    </Flex>
  );
};

export default Instagram;
