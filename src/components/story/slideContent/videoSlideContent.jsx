import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import VideoPlayIcon from '../../videoPlayIcon';
import VideoPlayer from '../../videoPlayer';
import '../../../less/videoSlideContent.less';

class VideoSlideContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };

    this.playVideo = this.playVideo.bind(this);
    this.stopVideo = this.stopVideo.bind(this);
  }

  playVideo() {
    this.setState({
      isPlaying: true,
    });
  }

  stopVideo() {
    this.setState({
      isPlaying: false,
    });
  }

  render() {
    const { videoUrl } = this.props;
    const { isPlaying } = this.state;
    return (
      <div className={`${isPlaying ? 'z-fix' : ''}`}>
        <div className="video-label">
          <span className="video-label__text">Watch the Video</span>
          <VideoPlayIcon onPlayClick={this.playVideo} />
        </div>

        <VideoPlayer videoUrl={videoUrl} onCloseClick={this.stopVideo} isActive={isPlaying} />
      </div>
    );
  }
}

VideoSlideContent.propTypes = {
  videoUrl: PropTypes.string.isRequired,
};

export default VideoSlideContent;

export const videoSlideContentFragment = graphql`
  fragment videoSlideContentFragment on ContentfulSlideContentVideo{
    vimeoUrl
  }
`;
