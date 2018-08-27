import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import '../../../less/quoteSlideContent.less';

function getQuoteClasses(direction, hasAttribution) {
  switch (direction) {
    case 'left':
      return 'quote-content__quote--bordered quote-content__quote--left-align';
    case 'center':
      return hasAttribution ? '' : 'quote-content__quote--bordered';
    case 'right':
      return 'quote-content__quote--bordered quote-content__quote--right-align';
    default:
      return '';
  }
}

const QuoteSlideContent = ({ alignment, attribution, quoteText }) => (
  <div className="quote-content">
    <p className={`quote-content__quote ${getQuoteClasses(alignment, attribution)}`}>
      { quoteText }
    </p>
    {
      attribution !== ''
        && <h2 className="quote-content__attribution">{attribution}</h2>
    }
  </div>
);

QuoteSlideContent.propTypes = {
  alignment: PropTypes.oneOf(['left', 'right', 'center']).isRequired,
  quoteText: PropTypes.string.isRequired,
  attribution: PropTypes.string,
};

QuoteSlideContent.defaultProps = {
  attribution: '',
};

export default QuoteSlideContent;

export const quoteSlideContentFragment = graphql`
  fragment quoteSlideContentFragment on ContentfulSlideContentQuote{
    quoteText{
      quoteText
    }
    quoteAlignment
    quoteAttribution
  }
`;
