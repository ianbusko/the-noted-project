const PostCssPresetEnv = require('postcss-preset-env');
const AutoPrefixer = require('autoprefixer');
const Contentful = require('./.contentful.json');

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
