import React from 'react';
import '../less/splashBackground.less';

// TODO: configure the bg video in Contentful
const SplashBackground = () => (
  <div className="splash-background">
    <iframe
      title="The Noted Project"
      id="splash-background__video"
      src="//player.vimeo.com/video/177154800?api=1&background=1"
      frameBorder="0"
      webkitallowfullscreen
      mozallowfullscreen
      allowFullScreen
    />
  </div>
);

export default SplashBackground;
