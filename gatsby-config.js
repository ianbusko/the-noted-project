const Contentful = require('./.contentful.json');

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-source-contentful',
      options: Contentful,
    },
  ],
};
