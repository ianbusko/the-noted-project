import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import ArrowLink from '../arrowLink';
import logoIcon from '../../../images/logo-icon.svg';
import '../../../less/introSlideContent.less';

const IntroSlideContent = ({ title, previousStorySlug, nextStorySlug }) => (
  <div className="intro-slide">

    <ArrowLink
      direction="left"
      linkText="Previous Story"
      linkUrl={`/story/${previousStorySlug}`}
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
      linkUrl={`/story/${nextStorySlug}`}
    />

  </div>
);

IntroSlideContent.propTypes = {
  title: PropTypes.string.isRequired,
  previousStorySlug: PropTypes.string,
  nextStorySlug: PropTypes.string,
};

IntroSlideContent.defaultProps = {
  previousStorySlug: '',
  nextStorySlug: '',
};

export default IntroSlideContent;

export const introSlideContentFragment = graphql`
  fragment introSlideContentFragment on ContentfulSlideContentIntro{
    title
  }
`;
