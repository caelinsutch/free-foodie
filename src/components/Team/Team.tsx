import React from "react";
import { VStack, Text, Box, Flex } from "@chakra-ui/react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import ProfileCircle from "./ProfileCircle";
import styled from "styled-components";

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
      const image = getImage(item.node.img) as IGatsbyImageData;
      membersArray.push(
        <ProfileCircle
          image={image}
          name={item.node.name}
          description={item.node.description}
          alt={item.node.alt}
          key={index}
        />
      );
    });
    return membersArray;
  }

  function getMembersSmall(data: any) {
    const membersArray: any = [];
    data.allTeamdataJson.edges.forEach((item: any, index: any) => {
      const image = getImage(item.node.img) as IGatsbyImageData;
      membersArray.push(
        <Flex
          flexDirection={{ base: "row", md: "column" }}
          justifyContent="center"
          alignItems="flex-start"
          textAlign="start"
          width={{ base: "350px", md: "200px" }}
          key={index}
          paddingLeft={{ base: "1rem", md: "2.5rem" }}
          marginBottom={{ base: "1rem", md: "0rem" }}
        >
          <Flex
            boxShadow={{
              base: "-0.5rem -0.5rem #FF00BF",
              md: "-1rem -1rem #FF00BF",
            }}
            marginBottom="0.5rem"
            marginRight="1rem"
            height={{ base: "150px", md: "300px" }}
            width={{ base: "200px", md: "200px" }}
          >
            <ProfileImg image={image} alt={item.node.alt}></ProfileImg>
          </Flex>
          <VStack alignItems="flex-start" spacing="0rem">
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
              fontSize={{ base: "14px", md: "14px" }}
              color="#0c0c0c"
              width="75%"
            >
              {item.node.description}
            </Text>
          </VStack>
        </Flex>
      );
    });
    return membersArray;
  }

  const allProfiles = getMembers(data);

  return (
    <Flex
      flexDirection={{ base: "column", sm: "row" }}
      bgColor="#05E0E9"
      height="100vh"
      width="100%"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      padding="2rem 0"
      className="section"
    >
      <Text
        fontFamily="Lovelo"
        color="#fff"
        fontSize={{ base: "100px", md: "120px" }}
        // paddingBottom="2rem"
        data-sal="slide-left"
        data-sal-easing="ease"
        data-sal-duration="1500"
        paddingTop="1.5rem"
      >
        TEAM
      </Text>
      <VStack
        display={{ base: "flex", sm: "none" }}
        alignItems="flex-start"
        data-sal="fade"
        data-sal-easing="ease"
        data-sal-duration="1500"
        bgColor={{ base: "#fff", sm: "transparent" }}
        padding="1rem 1rem"
        paddingTop="2rem"
      >
        {getMembersSmall(data)}
      </VStack>
      <Box
        display={{ base: "none", sm: "block" }}
        position="absolute"
        transform="translateX(14rem) translateY(10rem)"
        data-sal="fade"
        data-sal-easing="ease"
        data-sal-duration="1500"
      >
        {allProfiles[0]}
      </Box>
      <Box
        display={{ base: "none", sm: "block" }}
        position="absolute"
        transform="translateX(-20rem) translateY(0rem)"
        data-sal="fade"
        data-sal-easing="ease"
        data-sal-duration="1500"
      >
        {allProfiles[1]}
      </Box>
      <Box
        display={{ base: "none", sm: "block" }}
        position="absolute"
        transform="translateX(16rem) translateY(-10rem)"
        data-sal="fade"
        data-sal-easing="ease"
        data-sal-duration="1500"
      >
        {allProfiles[2]}
      </Box>
      <Box
        display={{ base: "none", sm: "block" }}
        position="absolute"
        transform="translateX(-6rem) translateY(14rem)"
        data-sal="fade"
        data-sal-easing="ease"
        data-sal-duration="1500"
      >
        {allProfiles[2]}
      </Box>
      <Box
        display={{ base: "none", sm: "block" }}
        position="absolute"
        transform="translateX(-4rem) translateY(-14rem)"
        data-sal="fade"
        data-sal-easing="ease"
        data-sal-duration="1500"
      >
        {allProfiles[2]}
      </Box>
      {/* <Box
        bgColor={{ base: "transparent", sm: "#fff" }}
        width={{ base: "850px", md: "850px" }}
        height={{ base: "300", md: "375px" }}
        position="absolute"
        transform={{
          base: "translateY(40%) translateX(5%)",
          md: "translateY(40%) translateX(5%)",
        }}
      ></Box> */}
    </Flex>
  );
};

export default Team;

const ProfileImg = styled(GatsbyImage)`
  height: 150px;
  width: 100px;
`;
