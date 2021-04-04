import { Flex, HStack, Text, VStack, Button, Input } from "@chakra-ui/react";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

const Donate: React.FC = () => {
  const { donateBgImage } = useStaticQuery(
    graphql`
      query {
        donateBgImage: file(relativePath: { eq: "DonateBg.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 2000
              quality: 100
              webpOptions: { quality: 100 }
            )
          }
        }
      }
    `
  );

  const image = getImage(donateBgImage);
  console.log(image);

  return (
    <BgImage image={image}>
      <Flex
        height="100vh"
        width="100%"
        justifyContent="center"
        alignItems="center"
      >
        <VStack>
          <Text
            fontFamily="Lovelo"
            fontSize={{ base: "90px", md: "120px" }}
            color="#fff"
          >
            DONATE
          </Text>
          <VStack
            borderRadius="0"
            borderWidth="10px"
            borderColor="#ECCB45"
            bgColor="#fff"
            spacing="1rem"
            padding={{ base: "1rem 1rem", sm: "3rem 3rem" }}
          >
            <HStack>
              <Button
                height="100px"
                width="100px"
                bgColor="#FBE074"
                borderRadius="0px"
              >
                <Text
                  fontFamily="Glacial Indifference"
                  color="#fff"
                  fontSize="40px"
                >
                  $5
                </Text>
              </Button>
              <Button
                height="100px"
                width="100px"
                bgColor="#FBE074"
                borderRadius="0px"
              >
                <Text
                  fontFamily="Glacial Indifference"
                  color="#fff"
                  fontSize="40px"
                >
                  $10
                </Text>
              </Button>
              <Button
                height="100px"
                width="100px"
                bgColor="#FBE074"
                borderRadius="0px"
              >
                <Text
                  fontFamily="Glacial Indifference"
                  color="#fff"
                  fontSize="40px"
                >
                  $xx
                </Text>
              </Button>
            </HStack>
            <Input
              placeholder="johnsmith@gmail.com"
              borderWidth="0px"
              size="md"
            />
            <Button
              borderWidth="3px"
              borderColor="#FBE074"
              borderRadius={0}
              bgColor="transparent"
              padding="1.5rem 1rem"
            >
              <Text color="#FBE074" fontSize="30px">
                Next
              </Text>
            </Button>
          </VStack>
        </VStack>
      </Flex>
    </BgImage>
  );
};

export default Donate;
