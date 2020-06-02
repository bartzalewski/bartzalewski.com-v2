module.exports = {
  siteMetadata: {
    title: `Bart Zalewski | Front-End Developer`,
    author: `Bart Zalewski`,
    role: `Front-End Developer`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        head: true,
        anonymize: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bart Zalewski | Front-End Developer`,
        short_name: `Bart Zalewski`,
        start_url: `/`,
        background_color: `#02D463`,
        theme_color: `#02D463`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              linkImagesToOriginal: false,
              loading: `lazy`,
              wrapperStyle: `max-width: 100%; height: 200px`,
              maxWidth: 5000,
            },
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
