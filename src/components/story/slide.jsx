import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SlideContentChild from './slideContentChild';
import SlideContentTypes from '../../slideContentTypes';
import '../../less/slide.less';
import '../../less/slideBackgroundCover.less';

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

const Slide = ({
  backgroundImageUrl,
  hoverText,
  slideContent,
  onCardSelected,
}) => (
  // eslint-disable-next-line
  <section className={`slide ${getSlideClasses(slideContent.__typename)}`}>
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
    />
  </section>
);

Slide.propTypes = {
  // eslint-disable-next-line
  slideContent: PropTypes.object.isRequired,
  backgroundImageUrl: PropTypes.string.isRequired,
  hoverText: PropTypes.string,
  onCardSelected: PropTypes.func.isRequired,
};

Slide.defaultProps = {
  hoverText: '',
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
