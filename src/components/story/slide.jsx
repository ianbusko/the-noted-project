import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SlideContentChild from './slideContentChild';
import '../../less/hover-area.less';
import '../../less/slide.less';
import '../../less/slideBackgroundCover.less';
import '../../less/videoSlide.less';

const Slide = ({
  backgroundImageUrl,
  hoverText,
  slideContent,
}) => (
  <section className="slide">
    <div
      className="slide-background"
      style={{
        backgroundImage: `url(https:${backgroundImageUrl})`,
      }}
    />

    <div className="slide-background-cover" />

    <div className="hover-text">
      { hoverText }
    </div>
    <SlideContentChild
      slideContent={slideContent}
    />
  </section>
);

Slide.propTypes = {
  // eslint-disable-next-line
  slideContent: PropTypes.object.isRequired,
  backgroundImageUrl: PropTypes.string.isRequired,
  hoverText: PropTypes.string,
  // eslint-disable-next-line
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
