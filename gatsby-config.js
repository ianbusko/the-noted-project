const PostCssPresetEnv = require('postcss-preset-env');
const AutoPrefixer = require('autoprefixer');
const Contentful = require('./.contentful.json');

module.exports = {
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
