import React from 'react';
import PropTypes, { shape } from 'prop-types';
import Wrapper from '../wrapper';
import Slide from './slide';
import SlideContentTypes from '../../slideContentTypes';

const SlideArea = ({
  slides, activeIndex, isScrolling, newIndex, storyTitle, onCardSelected, onScroll,
}) => {
  let textSlideIndex = 0;
  const getTextSlideIndex = (slideType) => {
    if (slideType === SlideContentTypes.TextContent) {
      textSlideIndex += 1;
      return textSlideIndex;
    }
    return textSlideIndex;
  };
  const textSlideCount = slides.filter(
    slide => slide.slideContent[0].__typename === SlideContentTypes.TextContent,
  ).length;
  return (
    <Wrapper isStory onScroll={onScroll}>
      {slides.map((slide, index) => (
        <Slide
          backgroundImageUrl={slide.backgroundImage.file.url}
          hoverText={slide.photoCaption}
          slideContent={slide.slideContent[0]}
          onCardSelected={onCardSelected}
          key={slide.id}
          // eslint-disable-next-line
          textSlideIndex={getTextSlideIndex(slide.slideContent[0].__typename)}
          textSlideTotal={textSlideCount}
          storyName={storyTitle}
          isActive={index === activeIndex}
          isLeaving={index === activeIndex && isScrolling}
          isTransitioning={index === newIndex && isScrolling}
        />
      ))}
    </Wrapper>
  );
};

SlideArea.propTypes = {
  activeIndex: PropTypes.number,
  isScrolling: PropTypes.bool,
  newIndex: PropTypes.number,
  // eslint-disable-next-line
  slides: PropTypes.arrayOf(shape({})),
  storyTitle: PropTypes.string.isRequired,
  onCardSelected: PropTypes.func.isRequired,
  onScroll: PropTypes.func.isRequired,
};

SlideArea.defaultProps = {
  activeIndex: 0,
  isScrolling: false,
  newIndex: 0,
};

export default SlideArea;
