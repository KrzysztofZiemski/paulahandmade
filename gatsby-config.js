const { useGatsbyConfig } = require("gatsby-plugin-ts-config");
require("dotenv").config()

module.exports = useGatsbyConfig(
  () => ({
    flags: {
      DEV_SSR: false,
    },
    siteMetadata: {
      title: ``,
      description: ``,
      author: `@krzysztofziemski`,
      siteUrl: `https://www.paulahandmade.pl/`,
    },
    plugins: [
      `gatsby-plugin-netlify`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-image`,
      {
        resolve: `gatsby-source-datocms`,
        options: {
          apiToken: process.env.API_DATO_CMS,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        },
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-plugin-material-ui`,
        options: {
          stylesProvider: {
            injectFirst: true,
          },
        },
      },
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [`Roboto\:300,400,700`, `Lato\:300,400,700`],
          display: "swap",
        },
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `Paula handmade`,
          short_name: `Paula handmade`,
          start_url: `/`,
          background_color: `#663399`,
          theme_color: `#663399`,
          display: `minimal-ui`,
          icon: `src/images/logo-icon.png`,
        },
      },
      `gatsby-plugin-gatsby-cloud`,
      // this (optional) plugin enables Progressive Web App + Offline functionality
      // To learn more, visit: https://gatsby.dev/offline
      // `gatsby-plugin-offline`,
    ],
  })
)
