import React from "react";
import { VStack, HStack, Flex, Text, Link } from "@chakra-ui/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import IGCard from "./IGCard";
import IGTitle from "./IGTitle";

const Instagram: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstagramContent(limit: 8) {
        edges {
          node {
            permalink
            localImage {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  `);

  function getIGInfo(data: any) {
    const IGInfo: any[] = [];
    data.allInstagramContent.edges.forEach((item: any) => {
      const image = getImage(item.node.localImage);
      const link = item.node.permalink;
      IGInfo.push([image, link]);
    });
    return IGInfo;
  }

  const info = getIGInfo(data);

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
          <Link href={info[0][1]}>
            <IGCard>
              <GatsbyImage
                image={info[0][0]}
                alt="Instagram Post"
              ></GatsbyImage>
            </IGCard>
          </Link>
          <Link href={info[1][1]}>
            <IGCard>
              <GatsbyImage
                image={info[1][0]}
                alt="Instagram Post"
              ></GatsbyImage>
            </IGCard>
          </Link>
          <Link href={info[2][1]}>
            <IGCard>
              <GatsbyImage
                image={info[2][0]}
                alt="Instagram Post"
              ></GatsbyImage>
            </IGCard>
          </Link>
        </VStack>
        <VStack spacing={{ base: "1rem", sm: "2rem" }}>
          <Link href={info[3][1]}>
            <IGCard>
              <GatsbyImage
                image={info[3][0]}
                alt="Instagram Post"
              ></GatsbyImage>
            </IGCard>
          </Link>
          <IGTitle />
          <Link href={info[4][1]}>
            <IGCard>
              <GatsbyImage
                image={info[4][0]}
                alt="Instagram Post"
              ></GatsbyImage>
            </IGCard>
          </Link>
        </VStack>
        <VStack
          spacing={{ base: "1rem", sm: "2rem" }}
          transform="translateY(-5%)"
          position="relative"
          zIndex={100}
        >
          <Link href={info[5][1]}>
            <IGCard>
              <GatsbyImage
                image={info[5][0]}
                alt="Instagram Post"
              ></GatsbyImage>
            </IGCard>
          </Link>
          <Link href={info[6][1]}>
            <IGCard>
              <GatsbyImage
                image={info[6][0]}
                alt="Instagram Post"
              ></GatsbyImage>
            </IGCard>
          </Link>
          <Link href={info[7][1]}>
            <IGCard>
              <GatsbyImage
                image={info[7][0]}
                alt="Instagram Post"
              ></GatsbyImage>
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
