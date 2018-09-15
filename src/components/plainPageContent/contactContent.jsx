import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Button from '../button';

const ContactContent = ({ emailAddress, emailSubject, bodyCopy }) => (
  <article style={{ flex: '1' }}>
    <header>
      <h1>Get in Touch</h1>
      <hr />
    </header>
    <div
      dangerouslySetInnerHTML={{ __html: bodyCopy.html }}
    />
    <Button
      buttonText="Contact Us"
      url={`mailto:${emailAddress}?subject=${encodeURI(emailSubject)}`}
    />
  </article>
);

ContactContent.propTypes = {
  emailAddress: PropTypes.string.isRequired,
  emailSubject: PropTypes.string.isRequired,
  bodyCopy: PropTypes.string.isRequired,
};

export default ContactContent;

export const pageQuery = graphql`
  fragment layoutContact on ContentfulLayoutContact{
    contactEmailAddress
    emailSubject
    bodyCopy{
      childMarkdownRemark{
        html
      }
    }
  }
`;
