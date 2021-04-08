import React from "react";
import { VStack, Text, Box, Flex } from "@chakra-ui/react";
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
        <Flex
          flexDirection={{ base: "row", md: "column" }}
          justifyContent="center"
          alignItems="flex-start"
          textAlign="start"
          width={{ base: "350px", md: "200px" }}
          key={index}
          marginRight={{ base: "0rem", md: "2.5rem" }}
          // marginBottom={{ base: "1rem", md: "0rem" }}
        >
          <Flex
            boxShadow={{
              base: "-0.5rem -0.5rem #FF00BF",
              md: "-1rem -1rem #FF00BF",
            }}
            marginBottom="0.5rem"
            marginRight="0.5rem"
            height={{ base: "150px", md: "300px" }}
            width={{ base: "200px", md: "200px" }}
          >
            <GatsbyImage image={image} alt={item.node.alt}></GatsbyImage>
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
              fontSize={{ base: "12px", md: "14px" }}
              color="#0c0c0c"
            >
              {item.node.description}
            </Text>
          </VStack>
        </Flex>
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
      className="section"
    >
      <Text
        fontFamily="Lovelo"
        color="#fff"
        fontSize={{ base: "100px", md: "120px" }}
        paddingBottom="2rem"
        data-sal="slide-left"
        // data-sal-delay="500"
        data-sal-easing="ease"
        data-sal-duration="1500"
      >
        TEAM
      </Text>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        alignItems="flex-start"
        zIndex="1000"
        data-sal="fade"
        data-sal-easing="ease"
        data-sal-duration="1500"
        bgColor={{ base: "#fff", sm: "transparent" }}
        padding="2rem 2rem"
      >
        {getMembers(data)}
      </Flex>
      <Box
        bgColor={{ base: "transparent", sm: "#fff" }}
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
