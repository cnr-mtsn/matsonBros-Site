module.exports = {
  siteMetadata: {
    title: "dev",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-XSE0FL76SP",
      },
    },
    "gatsby-plugin-react-helmet",
  ],
};
