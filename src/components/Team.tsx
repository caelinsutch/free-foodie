import React from "react";
import { HStack, VStack, Text, Box, Flex } from "@chakra-ui/react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Team: React.FC = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allTeamdataJson {
        edges {
          node {
            name
            description
            img {
              childImageSharp {
                gatsbyImageData(
                  width: 200
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

  // console.log(data);

  function getMembers(data: any) {
    const membersArray: any = [];
    data.allTeamdataJson.edges.forEach((item: any, index: any) => {
      const image = getImage(item.node.img);
      console.log(image);
      membersArray.push(
        <VStack
          justifyContent="center"
          alignItems="flex-start"
          textAlign="start"
          width={{ base: "150px", md: "200px" }}
          key={index}
        >
          <Flex
            boxShadow={{
              base: "-0.5rem -0.5rem #FF00BF",
              md: "-1rem -1rem #FF00BF",
            }}
          >
            <GatsbyImage image={image} alt={item.node.alt}></GatsbyImage>
          </Flex>
          <Text
            fontFamily="Lovelo"
            fontSize={{ base: "20px", md: "24px" }}
            color="#FF00BF"
            textShadow="-0.1rem -0.1rem RGBA(255,0,191,0.20)"
          >
            {item.node.name}
          </Text>
          <Text
            fontFamily="Glacial Indifference"
            fontSize={{ base: "12px", md: "14px" }}
            color="#0c0c0c"
          >
            {item.node.description}
          </Text>
        </VStack>
      );
    });
    return membersArray;
  }

  return (
    <VStack
      bgColor="#05E0E9"
      height="100vh"
      width="100%"
      justifyContent="center"
      overflow="hidden"
      padding="2rem 0"
    >
      <HStack
        zIndex={100}
        // paddingTop="5rem"
        justifyContent="center"
        alignItems="center"
        fontSize={{ base: "100px", md: "120px" }}
        paddingBottom="2rem"
      >
        <Text fontFamily="Lovelo" color="#fff" opacity="0.2">
          TEAMTEAM
        </Text>
        <Text fontFamily="Lovelo" color="#fff">
          TEAM
        </Text>
        <Text
          fontFamily="Lovelo"
          color="#fff"
          opacity="0.2"
          // whiteSpace="nowrap"
          overflow="hidden"
        >
          TEAMTEAM
        </Text>
      </HStack>
      <HStack
        alignItems="flex-start"
        spacing={{ base: "1.5rem", md: "2.5rem" }}
        zIndex="1000"
        // paddingBottom="10rem"
      >
        {getMembers(data)}
      </HStack>
      <Box
        bgColor="white"
        width={{ base: "850px", md: "850px" }}
        height={{ base: "300", md: "375px" }}
        position="absolute"
        transform={{
          base: "translateY(40%) translateX(5%)",
          md: "translateY(40%) translateX(5%)",
        }}
      ></Box>
    </VStack>
  );
};

export default Team;
