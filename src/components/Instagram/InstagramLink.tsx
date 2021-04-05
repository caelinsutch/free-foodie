import React from "react";
import { Box, Link } from "@chakra-ui/layout";
import { StaticImage } from "gatsby-plugin-image";

type InstagramLinkProps = {
  link: string;
  img: string;
};

const InstagramLink: React.FC<InstagramLinkProps> = ({ link, img }) => {
  console.log(img);
  return (
    <Link href={link}>
      <Box borderRadius="20px" width="400px" height="400px" bgColor="#0c0c0c">
        <StaticImage src={img} alt={img} placeholder="blurred"></StaticImage>
      </Box>
    </Link>
  );
};

export default InstagramLink;
