import React from "react";
import { Text, VStack } from "@chakra-ui/layout";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

type ProfileCircleProps = {
  name: string;
  description: string;
  image: IGatsbyImageData;
  alt: string;
};

const ProfileCircle: React.FC<ProfileCircleProps> = ({
  name,
  description,
  image,
  alt,
}) => {
  return (
    <Profile width="225px" height="225px" borderRadius="50%" overflow="hidden">
      <Background image={image} alt={alt}></Background>
      <VStack position="absolute">
        <Text
          fontFamily="Lovelo"
          fontSize={{ base: "16px", md: "20px" }}
          color="#FF00BF"
          textShadow="-0.1rem -0.1rem RGBA(255,0,191,0.20)"
        >
          {name}
        </Text>
        <Text
          fontFamily="Glacial Indifference"
          fontSize={{ base: "12px", md: "14px" }}
          color="#0c0c0c"
          padding="0rem 1rem"
          textAlign="center"
        >
          {description}
        </Text>
      </VStack>
    </Profile>
  );
};

export default ProfileCircle;

const Background = styled(GatsbyImage)`
  position: relative;
  width: 225px;
  height: 225px;
  border-radius: 50%;
  transition: opacity 0.25s;
  z-index: 100;
  &:hover {
    opacity: 0.1;
  }
`;

const Profile = styled(VStack)`
  justify-content: center;
  align-items: center;
  &:hover {
  }
`;
