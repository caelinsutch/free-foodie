import React from "react";
import { VStack, HStack, Flex, Box, Text, Link } from "@chakra-ui/layout";
// import InstagramLink from "./InstagramLink";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

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
      <HStack spacing="2rem">
        <VStack
          spacing="2rem"
          transform="translateY(-5%)"
          position="relative"
          zIndex={100}
        >
          <Link href="https://www.instagram.com/p/CNNSkLmDf1r/">
            <InstagramLink>
              <StaticImage
                src="../../images/InstagramPosts/freefoodieuk22.jpg"
                alt="Instagram Post"
                placeholder="blurred"
              ></StaticImage>
            </InstagramLink>
          </Link>
          <Link href="https://www.instagram.com/p/CNNSkLmDf1r/">
            <InstagramLink>
              <StaticImage
                src="../../images/InstagramPosts/freefoodieuk21.jpg"
                alt="Instagram Post"
                placeholder="blurred"
              ></StaticImage>
            </InstagramLink>
          </Link>
          <Link href="https://www.instagram.com/p/CNNSkLmDf1r/">
            <InstagramLink>
              <StaticImage
                src="../../images/InstagramPosts/freefoodieuk20.jpg"
                alt="Instagram Post"
                placeholder="blurred"
              ></StaticImage>
            </InstagramLink>
          </Link>
        </VStack>
        <VStack spacing="2rem">
          <Link href="https://www.instagram.com/p/CNNSkLmDf1r/">
            <InstagramLink>
              <StaticImage
                src="../../images/InstagramPosts/freefoodieuk19.jpg"
                alt="Instagram Post"
                placeholder="blurred"
              ></StaticImage>
            </InstagramLink>
          </Link>
          <VStack
            // bgColor="#0c0c0c"
            borderRadius="20px"
            width="400px"
            height="400px"
            fontFamily="Lovelo"
            color="#00F4CF"
            fontSize="60px"
            justifyContent="center"
            data-sal="slide-left"
            data-sal-delay="100"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <Text>INSTAGRAM</Text>
            <Text
              fontFamily="Lovelo-Line"
              position="absolute"
              transform="translateY(-1rem)"
            >
              INSTAGRAM
            </Text>
            <Link
              bgColor="transparent"
              borderWidth="3px"
              borderColor="#00F4CF"
              borderRadius="10px"
              padding="0 1rem"
              paddingTop="0.5rem"
              href="https://www.instagram.com/freefoodieuk/"
            >
              <Text fontFamily="Lovelo" fontSize="24px">
                FOLLOW US
              </Text>
            </Link>
          </VStack>
          <Box
            position="absolute"
            transform="translateY(22rem) translatex(12rem)"
            zIndex={1}
          >
            <svg
              width="120"
              height="70"
              viewBox="0 0 378 195"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M135.765 116.506C135.765 119.501 133.319 121.722 130.426 121.846C127.54 121.976 125.086 119.305 125.086 116.506V107.563C125.086 104.568 127.529 102.354 130.426 102.223C133.314 102.095 135.765 104.77 135.765 107.563V116.506ZM127.577 32.1198C127.577 35.1082 125.128 37.3289 122.237 37.4594C119.349 37.5899 116.895 34.9125 116.895 32.1198V23.1699C116.895 20.1749 119.338 17.9608 122.237 17.8303C125.123 17.6998 127.577 20.3772 127.577 23.1699V32.1198ZM301.55 32.1198C301.55 35.1082 299.094 37.3289 296.199 37.4594C293.32 37.5899 290.864 34.9125 290.864 32.1198V23.1699C290.864 20.1749 293.304 17.9608 296.199 17.8303C299.081 17.6998 301.55 20.3772 301.55 23.1699V32.1198ZM79.9951 56.4816C79.9951 59.4721 77.5461 61.6928 74.649 61.8211C71.7672 61.9516 69.3073 59.2742 69.3073 56.4816V47.5338C69.3073 44.5367 71.7585 42.3226 74.649 42.1942C77.5352 42.0637 79.9951 44.7411 79.9951 47.5338V56.4816ZM226.648 120.982C226.648 123.977 224.208 126.196 221.313 126.322C218.431 126.45 215.963 123.773 215.963 120.982V112.039C215.963 109.044 218.418 106.823 221.313 106.693C224.195 106.562 226.648 109.24 226.648 112.039V120.982ZM281.621 101.488C281.621 104.479 279.178 106.699 276.285 106.828C273.404 106.958 270.935 104.281 270.935 101.488V92.5402C270.935 89.5497 273.391 87.3312 276.285 87.2007C279.165 87.0702 281.621 89.7476 281.621 92.5402V101.488ZM248.111 54.5089C248.111 57.5038 245.658 59.7157 242.763 59.8484C239.881 59.9789 237.414 57.2994 237.414 54.5089V45.5589C237.414 42.5683 239.868 40.3499 242.763 40.2194C245.645 40.0889 248.111 42.7663 248.111 45.5589V54.5089ZM183.749 74.3706C183.749 77.3655 181.294 79.5862 178.401 79.7145C175.519 79.8407 173.064 77.1676 173.064 74.3706V65.425C173.064 62.4301 175.506 60.216 178.401 60.0877C181.294 59.9572 183.749 62.6345 183.749 65.425V74.3706ZM188.752 183.36C92.3445 183.36 13.5783 106.375 10.7508 10.6682H30.232C33.0551 95.6439 103.078 163.905 188.756 163.905C274.437 163.905 344.453 95.6439 347.283 10.6682H366.757C363.93 106.375 285.161 183.36 188.756 183.36H188.752ZM336.593 10.6682C333.776 89.7585 268.547 153.237 188.752 153.237C108.961 153.237 43.7254 89.7585 40.911 10.6682H336.593ZM0 0V5.333C0 109.381 84.6734 194.028 188.752 194.028C292.826 194.028 377.504 109.381 377.504 5.333V0H0Z"
                fill="#00F4CF"
              />
            </svg>
          </Box>
          <Box
            position="absolute"
            transform="translateY(45rem) translatex(-12rem)"
          >
            <svg
              width="120"
              height="120"
              viewBox="0 0 287 376"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M275.89 195.052C275.89 172.643 257.657 154.402 235.257 154.402C212.857 154.402 194.622 172.643 194.622 195.052C194.622 217.46 212.857 235.702 235.257 235.702C257.657 235.702 275.89 217.46 275.89 195.052ZM229.948 257.473C229.948 253.491 229.378 249.587 228.249 245.83C211.145 243.481 196.706 232.661 189.315 217.739C181.922 232.661 167.485 243.481 150.392 245.83C149.265 249.587 148.68 253.491 148.68 257.473C148.68 279.897 166.915 298.123 189.315 298.123C211.728 298.123 229.948 279.897 229.948 257.473ZM184.006 324.594C184.006 318.768 182.812 313.191 180.463 307.96C164.168 305.12 150.499 294.552 143.373 280.162C136.259 294.552 122.59 305.107 106.297 307.96C103.97 313.165 102.747 318.859 102.747 324.594C102.747 347.005 120.971 365.244 143.373 365.244C165.786 365.244 184.006 347.005 184.006 324.594ZM97.4383 298.123C119.843 298.123 138.064 279.897 138.064 257.473C138.064 253.491 137.495 249.587 136.366 245.83C119.221 243.468 104.753 232.596 97.3752 217.619C90.0673 232.674 75.6038 243.64 58.4347 246.057C57.3581 249.748 56.8078 253.584 56.8078 257.473C56.8078 279.897 75.034 298.123 97.4383 298.123ZM51.2464 235.954C73.6507 235.954 91.8747 217.713 91.8747 195.304C91.8747 172.895 73.6507 154.654 51.2464 154.654C28.8422 154.654 10.616 172.895 10.616 195.304C10.616 217.713 28.8422 235.954 51.2464 235.954ZM56.8078 129.031C56.8078 134.527 57.8714 139.812 59.9746 144.79C76.3716 147.618 90.1239 158.251 97.2469 172.734C104.389 158.025 118.37 147.22 135.026 144.471C137.042 139.586 138.064 134.407 138.064 129.031C138.064 106.618 119.843 88.385 97.4383 88.385C75.034 88.385 56.8078 106.618 56.8078 129.031ZM97.9559 77.7734C114.203 77.9408 128.66 85.7033 137.945 97.6764C138.808 82.4321 136.498 36.0228 78.44 23.2601C77.7766 34.1676 78.6618 59.4471 97.9559 77.7734ZM184.006 195.052C184.006 172.643 165.786 154.402 143.373 154.402C120.971 154.402 102.747 172.643 102.747 195.052C102.747 217.46 120.971 235.702 143.373 235.702C165.786 235.702 184.006 217.46 184.006 195.052ZM148.68 129.031C148.68 134.407 149.716 139.586 151.734 144.471C168.255 147.194 182.123 157.84 189.315 172.362C196.521 157.84 210.388 147.192 226.909 144.471C228.913 139.586 229.948 134.407 229.948 129.031C229.948 106.618 211.728 88.385 189.315 88.385C166.915 88.385 148.68 106.618 148.68 129.031ZM239.305 246.15C240.14 249.839 240.564 253.623 240.564 257.473C240.564 284.821 219.053 307.23 192.075 308.678C193.748 313.802 194.622 319.179 194.622 324.594C194.622 352.858 171.639 375.865 143.373 375.865C115.121 375.865 92.1314 352.858 92.1314 324.594C92.1314 319.179 93.0122 313.802 94.6761 308.678C67.7 307.23 46.1918 284.821 46.1918 257.473C46.1918 253.73 46.6007 250.026 47.3989 246.415C20.9318 244.436 0 222.28 0 195.304C0 167.969 21.4908 145.573 48.4581 144.112C46.9596 139.268 46.1918 134.222 46.1918 129.031C46.1918 105.097 62.6715 84.9464 84.8735 79.3306C62.23 52.1306 68.2546 17.5835 68.5548 15.9697L69.5074 10.815L74.6751 11.7067C118.816 19.3148 136.446 44.0941 143.465 63.5339C143.837 64.567 144.17 65.5871 144.5 66.6093C153.43 37.2517 171.824 11.163 201.325 0.351269C207.774 -2.01509 210.521 8.26378 204.151 10.6019C169.41 23.3384 152.754 61.3241 149.292 97.0653C158.7 85.3161 173.138 77.7647 189.315 77.7647C217.581 77.7647 240.564 100.763 240.564 129.031C240.564 134.144 239.822 139.109 238.376 143.888C265.195 145.508 286.508 167.836 286.508 195.052C286.508 221.962 265.672 244.08 239.305 246.15ZM97.4448 110.246C108.039 110.533 116.193 118.682 116.478 129.289C116.665 136.112 127.292 136.138 127.109 129.289C126.663 112.823 113.903 100.056 97.4448 99.61C90.6024 99.4273 90.6067 110.058 97.4448 110.246ZM189.426 110.246C200.029 110.533 208.176 118.682 208.47 129.289C208.655 136.112 219.284 136.138 219.099 129.289C218.647 112.823 205.882 100.056 189.426 99.61C182.592 99.4273 182.592 110.058 189.426 110.246ZM235.368 176.271C245.971 176.549 254.118 184.714 254.412 195.308C254.584 202.144 265.226 202.17 265.028 195.308C264.588 178.846 251.824 166.075 235.368 165.637C228.534 165.45 228.534 176.084 235.368 176.271ZM143.313 176.271C153.9 176.549 162.063 184.714 162.341 195.308C162.526 202.144 173.157 202.17 172.97 195.308C172.533 178.846 159.766 166.075 143.313 165.637C136.464 165.45 136.477 176.084 143.313 176.271ZM51.2508 176.271C44.4149 176.084 44.4084 165.45 51.2508 165.637C67.7109 166.075 80.4714 178.846 80.9173 195.308C81.0978 202.17 70.4731 202.144 70.2861 195.308C70.0011 184.714 61.8472 176.549 51.2508 176.271Z"
                fill="#00F4CF"
              />
            </svg>
          </Box>

          <Link href="https://www.instagram.com/p/CNNSkLmDf1r/">
            <InstagramLink>
              <StaticImage
                src="../../images/InstagramPosts/freefoodieuk18.jpg"
                alt="Instagram Post"
                placeholder="blurred"
              ></StaticImage>
            </InstagramLink>
          </Link>
        </VStack>
        <VStack
          spacing="2rem"
          transform="translateY(-5%)"
          position="relative"
          zIndex={100}
        >
          <Link href="https://www.instagram.com/p/CNNSkLmDf1r/">
            <InstagramLink>
              <StaticImage
                src="../../images/InstagramPosts/freefoodieuk17.jpg"
                alt="Instagram Post"
                placeholder="blurred"
              ></StaticImage>
            </InstagramLink>
          </Link>
          <Link href="https://www.instagram.com/p/CNNSkLmDf1r/">
            <InstagramLink>
              <StaticImage
                src="../../images/InstagramPosts/freefoodieuk16.jpg"
                alt="Instagram Post"
                placeholder="blurred"
              ></StaticImage>
            </InstagramLink>
          </Link>
          <Link href="https://www.instagram.com/p/CNNSkLmDf1r/">
            <InstagramLink>
              <StaticImage
                src="../../images/InstagramPosts/freefoodieuk15.jpg"
                alt="Instagram Post"
                placeholder="blurred"
              ></StaticImage>
            </InstagramLink>
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

const InstagramLink = styled(Flex)`
  width: 400px;
  height: 400px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  filter: opacity(70%);
  transition: 0.3s ease;

  &:hover {
    filter: opacity(100%);
  }
`;
