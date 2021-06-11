module.exports = {
  siteMetadata: {
    title: "Free Foodie",
    siteUrl: "https://freefoodie.gatsbyjs.io/",
  },
  plugins: [
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `45769541085`,
        access_token: "bc10acf06e633eeecb8be6875568c986",
        instagram_id: "1110884146095941",
        paginate: 100,
        maxPosts: 1000,
        hashtags: true,
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
