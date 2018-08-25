import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import ThanksList from './thanksList';

const ThanksContent = ({ specialThanks, kickstarterSupporters }) => (
  <article>
    <header>
      <h1>Thank You!</h1>
      <hr />
    </header>
    <ThanksList
      title="Special Thanks"
      names={specialThanks}
    />
    <ThanksList
      title="Kickstarter Supporters"
      names={kickstarterSupporters}
    />
  </article>
);

ThanksContent.propTypes = {
  specialThanks: PropTypes.arrayOf(PropTypes.string).isRequired,
  kickstarterSupporters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ThanksContent;

export const pageQuery = graphql`
  fragment layoutThanks on ContentfulLayoutThanks {
    specialThanks
    kickstarterSupporters
  }
`;
