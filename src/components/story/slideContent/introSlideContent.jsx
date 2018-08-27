import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import ArrowLink from '../arrowLink';
import logoIcon from '../../../images/logo-icon.svg';
import '../../../less/introSlideContent.less';

const IntroSlideContent = ({ title, previousStoryLink, nextStoryLink }) => (
  <div className="intro-slide">

    <ArrowLink
      direction="left"
      linkText="Previous Story"
      linkUrl={previousStoryLink}
    />

    <div className="intro-slide__main">
      <img
        className="intro-slide__logo"
        src={logoIcon}
        height="101px"
        alt="The Noted Project"
      />
      <h1 className="intro-slide__title">{ title }</h1>
    </div>

    <ArrowLink
      direction="right"
      linkText="Next Story"
      linkUrl={nextStoryLink}
    />

  </div>
);

IntroSlideContent.propTypes = {
  title: PropTypes.string.isRequired,
  previousStoryLink: PropTypes.string,
  nextStoryLink: PropTypes.string,
};

IntroSlideContent.defaultProps = {
  previousStoryLink: '',
  nextStoryLink: '',
};

export default IntroSlideContent;

export const introSlideContentFragment = graphql`
  fragment introSlideContentFragment on ContentfulSlideContentIntro{
    title
  }
`;
