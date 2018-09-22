import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import SlideContentTypes from '../../../slideContentTypes';
import IntroSlideContent from './introSlideContent';
import QuoteSlideContent from './quoteSlideContent';
import ShareSlideContent from './shareSlideContent';
import TextSlideContent from './textSlideContent';
import VideoSlideContent from './videoSlideContent';

function getSwitch(
  data,
  onCardSelected,
  textSlideIndex,
  textSlideTotal,
  storyName,
  storySlug,
  nextStorySlug,
  previousStorySlug,
) {
  switch (data.__typename) {
    case SlideContentTypes.IntroContent:
      return (
        <IntroSlideContent
          title={data.title}
          previousStorySlug={previousStorySlug}
          nextStorySlug={nextStorySlug}
        />
      );
    case SlideContentTypes.QuoteContent:
      return (
        <QuoteSlideContent
          alignment={data.quoteAlignment}
          attribution={data.quoteAttribution}
          quoteText={data.quoteText.quoteText}
        />
      );
    case SlideContentTypes.ShareContent:
      return (
        <ShareSlideContent
          storySlug={storySlug}
          sharingText={data.sharingText}
          sharingTitle={data.sharingTitle}
          nextStorySlug={nextStorySlug}
        />
      );
    case SlideContentTypes.TextContent: {
      const headerImageUrl = get(data, 'headerImage.file.url');
      const textAst = get(data, 'text.childMarkdownRemark.htmlAst');
      return (
        <TextSlideContent
          onCardSelected={onCardSelected}
          textAst={textAst}
          headerImageUrl={headerImageUrl}
          headerTitle={data.headerTitle}
          textSlideIndex={textSlideIndex}
          textSlideTotal={textSlideTotal}
          storyName={storyName}
        />
      );
    }
    case SlideContentTypes.VideoContent:
      return <VideoSlideContent videoUrl={data.vimeoUrl} />;
    default:
      return null;
  }
}

const SlideChildContent = ({
  slideContent,
  onCardSelected,
  textSlideIndex,
  textSlideTotal,
  storyName,
  storySlug,
  nextStorySlug,
  previousStorySlug,
}) => (
  <React.Fragment>
    {getSwitch(slideContent,
      onCardSelected,
      textSlideIndex,
      textSlideTotal,
      storyName,
      storySlug,
      nextStorySlug,
      previousStorySlug)}
  </React.Fragment>
);

SlideChildContent.propTypes = {
  // eslint-disable-next-line
  slideContent: PropTypes.object.isRequired,
  onCardSelected: PropTypes.func.isRequired,
  textSlideIndex: PropTypes.number.isRequired,
  textSlideTotal: PropTypes.number.isRequired,
  storyName: PropTypes.string.isRequired,
  storySlug: PropTypes.string.isRequired,
  nextStorySlug: PropTypes.string.isRequired,
  previousStorySlug: PropTypes.string.isRequired,
};

export default SlideChildContent;
