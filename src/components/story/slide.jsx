import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SlideContentChild from './slideContent/slideContentChild';
import SlideContentTypes from '../../slideContentTypes';
import '../../less/slide.less';
import '../../less/slideBackgroundCover.less';
import '../../less/slideAnimations.less';

const getSlideClasses = (slideContentType) => {
  switch (slideContentType) {
    case SlideContentTypes.IntroContent:
      return 'hero show-helper-text no-hover';
    case SlideContentTypes.VideoContent:
      return 'video-slide';
    case SlideContentTypes.TextContent:
      return 'responsive-slide';
    case SlideContentTypes.ShareContent:
      return 'share-slide';
    default:
      return '';
  }
};

class Slide extends React.PureComponent {
  render() {
    const {
      backgroundImageUrl,
      hoverText,
      slideContent,
      onCardSelected,
      textSlideIndex,
      textSlideTotal,
      storyName,
      isActive,
      isTransitioning,
      isLeaving,
      storySlug,
      nextStorySlug,
      previousStorySlug,
    } = this.props;

    return (
      <section className={`slide ${getSlideClasses(slideContent.__typename)}
        ${isActive ? 'slide--active' : ''}
        ${isTransitioning ? 'slide--transitioning' : ''}
        ${isLeaving ? 'slide--leaving' : ''}`}
      >
        <div
          className="slide-background"
          style={{
            backgroundImage: `url(https:${backgroundImageUrl})`,
          }}
        />

        <div className="slide-background-cover" />

        { hoverText && (
          <div className="hover-text">
            { hoverText }
          </div>
        )}
        <SlideContentChild
          slideContent={slideContent}
          onCardSelected={onCardSelected}
          textSlideIndex={textSlideIndex}
          textSlideTotal={textSlideTotal}
          storyName={storyName}
          storySlug={storySlug}
          nextStorySlug={nextStorySlug}
          previousStorySlug={previousStorySlug}
        />
      </section>
    );
  }
}

Slide.propTypes = {
  // eslint-disable-next-line
  slideContent: PropTypes.object.isRequired,
  backgroundImageUrl: PropTypes.string.isRequired,
  onCardSelected: PropTypes.func.isRequired,
  textSlideIndex: PropTypes.number.isRequired,
  textSlideTotal: PropTypes.number.isRequired,
  storyName: PropTypes.string.isRequired,
  storySlug: PropTypes.string.isRequired,
  nextStorySlug: PropTypes.string.isRequired,
  previousStorySlug: PropTypes.string.isRequired,
  hoverText: PropTypes.string,
  isActive: PropTypes.bool,
  isLeaving: PropTypes.bool,
  isTransitioning: PropTypes.bool,
};

Slide.defaultProps = {
  hoverText: '',
  isActive: false,
  isLeaving: false,
  isTransitioning: false,
};

export default Slide;

export const storySlide = graphql`
  fragment storySlideFragment on ContentfulSlide{
    id
    photoCaption
    backgroundImage {
      file{
        url
      }
    }
    slideContent{
      __typename
      ... shareSlideContentFragment
      ... introSlideContentFragment
      ... quoteSlideContentFragment
      ... textSlideContentFragment
      ... videoSlideContentFragment
    }
  }
`;
