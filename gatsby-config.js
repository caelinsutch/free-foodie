module.exports = {
  siteMetadata: {
    title: "Free Foodie",
    siteUrl: "https://freefoodie.gatsbyjs.io/",
  },
  plugins: [
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token:
          "IGQVJXaEcwWWc0SmJSTXlmdEgxbDlnUGVMWGdYckNjaWJsTjU1RC1NZA2E5Umw1SlYwQWFncHVHaS1LV09pbzFPUG5LakhsN1RLSml3aHNoVm9wem9YMEJQXzd6YlFmVGx3TUdqMjljclZAiak5KRTBfWQZDZD",
      },
    },
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    "@chakra-ui/gatsby-plugin",
    "gatsby-plugin-typescript",
    "gatsby-plugin-gatsby-cloud",
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-smoothscroll`,
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop"],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
  ],
};
