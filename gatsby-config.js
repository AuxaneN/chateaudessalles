module.exports = {
  siteMetadata: {
    title: `Château des Salles`,
    description: `Château des Salles`,
    author: `@webape.dev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `chateau-des-salles`,
        short_name: `cds`,
        start_url: `/`,
        background_color: `#eee7dd`,
        theme_color: `#5a715c`,
        display: `standalone`,
        icon: `src/images/CDS_BrancheL.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Cormorant`,
            variants: [`500`,`600`, `700`],
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
