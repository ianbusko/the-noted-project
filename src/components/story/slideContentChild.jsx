import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import SlideContentTypes from '../../slideContentTypes';
import IntroSlideContent from './slideContent/introSlideContent';
import QuoteSlideContent from './slideContent/quoteSlideContent';
import ShareSlideContent from './slideContent/shareSlideContent';
import TextSlideContent from './slideContent/textSlideContent';
import VideoSlideContent from './slideContent/videoSlideContent';

function getSwitch(data, onCardSelected) {
  // eslint-disable-next-line
  switch (data.__typename) {
    case SlideContentTypes.IntroContent:
      return <IntroSlideContent title="slide content" />;
    case SlideContentTypes.QuoteContent:
      return (
        <QuoteSlideContent
          alignment={data.quoteAlignment}
          attribution={data.quoteAttribution}
          quoteText={data.quoteText.quoteText}
        />
      );
    case SlideContentTypes.ShareContent:
      return <ShareSlideContent />;
    case SlideContentTypes.TextContent: {
      const headerImageUrl = get(data, 'headerImage.file.url');
      const textAst = get(data, 'text.childMarkdownRemark.htmlAst');
      return (
        <TextSlideContent
          onCardSelected={onCardSelected}
          textAst={textAst}
          headerImageUrl={headerImageUrl}
          title={data.title}
        />
      );
    }
    case SlideContentTypes.VideoContent:
      return <VideoSlideContent videoUrl={data.vimeoUrl} />;
    default:
      return null;
  }
}

const SlideChildContent = ({ slideContent, onCardSelected }) => (
  <React.Fragment>{getSwitch(slideContent, onCardSelected)}</React.Fragment>
);

SlideChildContent.propTypes = {
  // eslint-disable-next-line
  slideContent: PropTypes.object.isRequired,
  onCardSelected: PropTypes.func.isRequired,
};

export default SlideChildContent;
