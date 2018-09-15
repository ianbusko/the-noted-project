import React from 'react';
import PropTypes, { shape } from 'prop-types';
import Wrapper from '../wrapper';
import HoverArea from './hoverArea';
import NavDots from './navDots';
import Slide from './slide';
import SlideContentTypes from '../../slideContentTypes';
import ScrollHelper from './scrollHelper';

const SlideArea = ({
  slides,
  activeIndex,
  isScrolling,
  newIndex,
  storyTitle,
  storySlug,
  nextStorySlug,
  previousStorySlug,
  onCardSelected,
  onScroll,
  onScrollTo,
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
    <React.Fragment>
      <HoverArea />
      <NavDots
        targets={slides.map(slide => ({ id: slide.id }))}
        activeDot={isScrolling ? newIndex : activeIndex}
        onDotClicked={onScrollTo}
      />
      <Wrapper
        isStory
        onScroll={onScroll}
      >
        {slides.map((slide, index) => (
          <Slide
            backgroundImageUrl={slide.backgroundImage.file.url}
            hoverText={slide.photoCaption}
            slideContent={slide.slideContent[0]}
            onCardSelected={onCardSelected}
            key={slide.id}
            textSlideIndex={getTextSlideIndex(slide.slideContent[0].__typename)}
            textSlideTotal={textSlideCount}
            storyName={storyTitle}
            storySlug={storySlug}
            nextStorySlug={nextStorySlug}
            previousStorySlug={previousStorySlug}
            isActive={index === activeIndex}
            isLeaving={index === activeIndex && isScrolling}
            isTransitioning={index === newIndex && isScrolling}
          />
        ))}
      </Wrapper>
      <ScrollHelper
        showRing={activeIndex === 0 && !isScrolling}
        showViewText={activeIndex === 0 && !isScrolling}
        showVideoText={
          slides[activeIndex].slideContent[0].__typename === SlideContentTypes.VideoContent
          && !isScrolling
        }
        showArrow={
          (!isScrolling && activeIndex !== (slides.length - 1))
          || (isScrolling && newIndex !== (slides.length - 1))
        }
      />

    </React.Fragment>
  );
};

SlideArea.propTypes = {
  activeIndex: PropTypes.number,
  isScrolling: PropTypes.bool,
  newIndex: PropTypes.number,
  // eslint-disable-next-line
  slides: PropTypes.arrayOf(shape({})),
  storyTitle: PropTypes.string.isRequired,
  storySlug: PropTypes.string.isRequired,
  onCardSelected: PropTypes.func.isRequired,
  onScroll: PropTypes.func.isRequired,
  onScrollTo: PropTypes.func.isRequired,
  nextStorySlug: PropTypes.string.isRequired,
  previousStorySlug: PropTypes.string.isRequired,
};

SlideArea.defaultProps = {
  activeIndex: 0,
  isScrolling: false,
  newIndex: 0,
};

export default SlideArea;
