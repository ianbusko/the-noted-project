import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import SocialLink from '../socialLink';
import '../../less/biography.less';

const getSocialLinks = (name, socialLinks) => socialLinks.map(
  link => (<SocialLink type={link.type} mediaUrl={link.url} key={`${name}-${link.type}`} />),
);

const Biography = ({
  name, role, bioTextHtml, headshotUrl, headshotAlt, socialLinks,
}) => (
  <section className="biography" key={`biography-${name}`}>
    <div className="biography__images">
      <div className="biography__social-links">
        {getSocialLinks(name, socialLinks)}
      </div>
      <div className="biography__headshot">
        <img
          src={headshotUrl}
          alt={headshotAlt}
          height="239"
          width="208"
        />
      </div>
    </div>
    <div className="biography__description">
      <h2 className="biography__name">{name}</h2>
      <h3 className="biography__role">{role}</h3>
      <div
        className="biography__text"
        dangerouslySetInnerHTML={{ __html: bioTextHtml }}
      />
    </div>
  </section>
);

Biography.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  bioTextHtml: PropTypes.string.isRequired,
  headshotUrl: PropTypes.string.isRequired,
  headshotAlt: PropTypes.string,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
};

Biography.defaultProps = {
  headshotAlt: '',
  socialLinks: [],
};

export default Biography;

export const pageQuery = graphql`
  fragment biographyFragment on ContentfulBio {
    name
    role
    bioText{
      childMarkdownRemark {
        html
      }
    }
    headshot{
      file {
        url
      }
    }
    socialLinks{
      type
      url
    }
  }
`;
