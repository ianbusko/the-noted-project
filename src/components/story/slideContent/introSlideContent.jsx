import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import ArrowLink from '../arrowLink';
import logoIcon from '../../../images/logo-icon.svg';

const IntroSlideContent = ({ title, previousStoryLink, nextStoryLink }) => (
  <div className="three-columns grid">

    <ArrowLink
      direction="left"
      linkText="Previous Story"
      linkUrl={previousStoryLink}
    />

    <div className="center-column grid">
      <div className="row no-mobile">
        <div className="logo">
          <img
            src={logoIcon}
            height="101px"
            alt="The Noted Project"
          />
        </div>
      </div>
      <div className="row">
        <h1>{ title }</h1>
      </div>
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
