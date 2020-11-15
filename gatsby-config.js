require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const path = require("path")

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Cozmic Creatives`,
    author: `Matthew Bracke`,
    keywords: [`design`, `web development`, `portfolio`, `create`],
    social: {
      twitter: `matthewbracke`,
    },
    description: `Welcome to Cozmic Creatives`,
    siteUrl: `https://cozmiccreatives.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cozmic Creatives`,
        short_name: `CC`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/assets/img/logo.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:200,400,700`,
          `Roboto\:300,400`,
          `Merriweather`,
          `Roboto Mono`,
        ],
        display: "swap",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
        components: path.join(__dirname, "src/components"),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              showCaptions: true,
              wrapperStyle: "border-radius:5px; overflow:hidden",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `jn91smkbn299`,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
  ],
}
