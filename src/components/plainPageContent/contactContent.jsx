import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Button from '../button';

const ContactContent = ({ emailAddress }) => (
  <article style={{ flex: '1' }}>
    <header>
      <h1>Get in Touch</h1>
      <hr />
    </header>
    <Button
      buttonText="Contact Us"
      url={`mailto:${emailAddress}?subject=TNP%20Contact`}
    />
  </article>
);

ContactContent.propTypes = {
  emailAddress: PropTypes.string.isRequired,
};

export default ContactContent;

export const pageQuery = graphql`
  fragment layoutContact on ContentfulLayoutContact{
    contactEmailAddress
  }
`;
