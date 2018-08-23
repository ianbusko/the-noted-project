import React from 'react';
import PropTypes from 'prop-types';
import LinkButton from './linkButton';
import '../less/splashStoryLink.less';

const SplashStoryLink = ({ title, story }) => (
  <div className="story-link">
    <p className="story-link__name">
      {title}
    </p>
    <LinkButton
      buttonText="View the Story"
      pageUrl={`/story/${story}`}
    />
  </div>
);

SplashStoryLink.propTypes = {
  title: PropTypes.string.isRequired,
  story: PropTypes.string.isRequired,
};

export default SplashStoryLink;
