import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const StoryMetaTags = ({
  shareUrl, shareTitle, shareDescription, shareImageUrl,
}) => (
  <Helmet>
    <meta property="og:url" content={shareUrl} />
    <meta property="og:title" content={shareTitle} />
    <meta property="og:description" content={shareDescription} />
    <meta property="og:image" content={shareImageUrl} />
  </Helmet>
);

StoryMetaTags.propTypes = {
  shareUrl: PropTypes.string.isRequired,
  shareTitle: PropTypes.string.isRequired,
  shareDescription: PropTypes.string.isRequired,
  shareImageUrl: PropTypes.string.isRequired,
};

export default StoryMetaTags;
