import React from 'react';
import PropTypes from 'prop-types';
import '../less/media.less';

// TODO: factory to translate classes from types
const SocialLink = ({ type, mediaUrl }) => (
  <a
    className={`media icon ${type}`}
    href={mediaUrl}
  >
    <span className="sr-only" style={{ display: 'none' }}>
      {type}
    </span>
  </a>
);

SocialLink.propTypes = {
  type: PropTypes.string.isRequired,
  mediaUrl: PropTypes.string.isRequired,
};

export default SocialLink;
