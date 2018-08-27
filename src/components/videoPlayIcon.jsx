import React from 'react';
import PropTypes from 'prop-types';
import '../less/videoPlayIcon.less';

const VideoPlayIcon = ({ onPlayClick }) => (
  // eslint-disable-next-line
  <div
    role="button"
    className="play-icon"
    onClick={onPlayClick}
  />
);

VideoPlayIcon.propTypes = {
  onPlayClick: PropTypes.func.isRequired,
};

export default VideoPlayIcon;
