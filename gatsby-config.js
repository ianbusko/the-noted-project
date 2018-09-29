const PostCssPresetEnv = require('postcss-preset-env');
const AutoPrefixer = require('autoprefixer');
const dotenv = require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'The Noted Project',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-plugin-less',
      options: {
        postCssPlugins: [PostCssPresetEnv(), AutoPrefixer()],
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID || '',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'average',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-105571503-1',
        head: true,
        anonymize: true,
        respectDNT: true,
      },
    },
  ],
};
