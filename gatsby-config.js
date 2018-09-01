const Contentful = require('./.contentful.json');

module.exports = {
  siteMetadata: {
    title: 'The Noted Project',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-eslint',
    'gatsby-plugin-less',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-contentful',
      options: Contentful,
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'average',
        ],
      },
    },
  ],
};
