import React from "react";
import { Flex, HStack, VStack, Text, Box } from "@chakra-ui/react";
import { useStaticQuery, graphql } from "gatsby";
// import Img from "gatsby-image"

const Team = () => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allTeamdataJson {
        edges {
          node {
            name
            description
          }
        }
      }
    }
  `);

  function getMembers(data) {
    const membersArray = [];
    data.allTeamdataJson.edges.forEach((item, index) => {
      membersArray.push(
        <VStack alignItems="flex-start" textAlign="start" width="250px">
          <Box
            bgColor="#0c0c0c"
            boxShadow="-1rem -1rem #FF00BF"
            width="245px"
            height="350px"
          ></Box>
          <Text
            fontFamily="Lovelo"
            fontSize="30px"
            color="#FF00BF"
            textShadow="-0.1rem -0.1rem RGBA(255,0,191,0.20)"
          >
            {item.node.name}
          </Text>
          <Text
            fontFamily="Glacial Indifference"
            fontSize="14px"
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
    >
      <HStack zIndex={100} paddingTop="5rem">
        <Text fontFamily="Lovelo" fontSize="150px" color="#fff" opacity="0.2">
          TEAMTEAM
        </Text>
        <Text fontFamily="Lovelo" fontSize="150px" color="#fff">
          TEAM
        </Text>
        <Text fontFamily="Lovelo" fontSize="150px" color="#fff" opacity="0.2">
          TEAMTEAM
        </Text>
      </HStack>
      <HStack
        alignItems="flex-start"
        spacing="2rem"
        zIndex="1000"
        paddingBottom="10rem"
      >
        {getMembers(data)}
      </HStack>
      <Box
        bgColor="white"
        width="1000px"
        height="500px"
        position="absolute"
        transform="translateY(30%)"
      ></Box>
    </VStack>
  );
};

export default Team;
