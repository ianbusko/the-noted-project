import React from 'react';
import PropTypes from 'prop-types';
import Player from '@vimeo/player';
import { graphql } from 'gatsby';
import VideoPlayIcon from '../../videoPlayIcon';
import VideoPlayer from '../../videoPlayer';
import '../../../less/videoSlideContent.less';

const videoPlayerId = 'tnpVideo';

class VideoSlideContent extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      player: undefined,
    };

    this.playVideo = this.playVideo.bind(this);
    this.stopVideo = this.stopVideo.bind(this);
    this.handleScreenResize = this.handleScreenResize.bind(this);
  }

  componentDidMount() {
    this.setState({
      player: new Player(videoPlayerId),
    });
    window.addEventListener('resize', this.handleScreenResize);
  }

  componentWillUnmount() {
    window.addEventListener('resize', this.handleScreenResize);
  }

  playVideo() {
    // TODO: find a more elegant solution to this.
    document.querySelector('body').style.overflow = 'hidden';
    this.setState({
      isPlaying: true,
    });
  }

  stopVideo() {
    const { player } = this.state;
    player.pause();
    document.querySelector('body').style.overflow = '';
    this.setState({
      isPlaying: false,
    });
  }

  handleScreenResize() {
    this.stopVideo();
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

        <VideoPlayer
          videoPlayerId={videoPlayerId}
          videoUrl={videoUrl}
          onCloseClick={this.stopVideo}
          isActive={isPlaying}
        />
      </div>
    );
  }
}

VideoSlideContent.propTypes = {
  videoUrl: PropTypes.string.isRequired,
};

export default VideoSlideContent;

export const videoSlideContentFragment = graphql`
  fragment videoSlideContentFragment on ContentfulSlideContentVideo {
    vimeoUrl
  }
`;
