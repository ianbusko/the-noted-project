import React from 'react';
import PropTypes from 'prop-types';
import '../less/splashBackground.less';

const SplashBackground = ({ backgroundImageUrl, videoUrl }) => (
  <div
    className="splash-background"
    style={{
      backgroundImage: `url(${backgroundImageUrl})`,
    }}
  >
    <iframe
      title="The Noted Project"
      id="splash-background__video"
      src={videoUrl}
      frameBorder="0"
      allow="fullscreen"
    />
  </div>
);

SplashBackground.propTypes = {
  backgroundImageUrl: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
};

export default SplashBackground;
