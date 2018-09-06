import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from './closeIcon';
import '../less/videoPlayer.less';

// eslint-disable-next-line
class VideoPlayer extends React.Component {
  render() {
    const { isActive, onCloseClick, videoUrl } = this.props;
    return (
      <div className={`video-player ${
        isActive ? 'active' : ''}`}
      >
        <CloseIcon
          onCloseClick={onCloseClick}
        />
        {/* eslint-disable-next-line */}
        <iframe
          id="tnpVideo"
          className="video-player__frame"
          src={videoUrl}
          width="640"
          height="272"
          frameBorder="0"
          allow="fullscreen"
        />
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default VideoPlayer;
