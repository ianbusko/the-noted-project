import React from 'react';
import PropTypes from 'prop-types';
import SlideContentTypes from '../../slideContentTypes';
import IntroSlideContent from './slideContent/introSlideContent';

function getSwitch(data) {
  // eslint-disable-next-line
  switch (data.__typename) {
    case SlideContentTypes.IntroContent:
      return <IntroSlideContent title="slide content" />;
    default:
      return null;
  }
}

const SlideChildContent = ({ slideContent }) => (
  <React.Fragment>{getSwitch(slideContent)}</React.Fragment>
);

SlideChildContent.propTypes = {
  // eslint-disable-next-line
  slideContent: PropTypes.object.isRequired,
};

export default SlideChildContent;
