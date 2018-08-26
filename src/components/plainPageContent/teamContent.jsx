import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import logo from '../../images/logo-text-brown.svg';
import Biography from './biography';
import '../../less/teamContent.less';

const GetBios = biographies => biographies.map((biography) => {
  const {
    name, role, bioText, headshot, socialLinks,
  } = biography;
  const bioTextHtml = get(bioText, 'childMarkdownRemark.html');
  const headshotUrl = get(headshot, 'file.url');

  return (
    <Biography
      name={name}
      role={role}
      bioTextHtml={bioTextHtml}
      headshotUrl={headshotUrl}
      socialLinks={socialLinks}
      key={`bio-${name}`}
    />
  );
});

const TeamContent = ({ pageHeader, pageTextHtml, biographies }) => (
  <article>
    <header>
      <img
        alt="The Noted Project"
        src={logo}
        height="121"
        style={{ marginBottom: '1rem' }}
      />
    </header>
    <h1 className="team-content__header">{pageHeader}</h1>
    <div
      className="team-content__text"
      // eslint-disable-next-line
      dangerouslySetInnerHTML={{ __html: pageTextHtml }}
    />
    <h1>Our Team</h1>
    <hr style={{ marginBottom: '2rem' }} />
    {GetBios(biographies)}
  </article>
);

TeamContent.propTypes = {
  pageHeader: PropTypes.string.isRequired,
  pageTextHtml: PropTypes.string.isRequired,
  // eslint-disable-next-line
  biographies: PropTypes.arrayOf(PropTypes.object),
};

export default TeamContent;

export const pageQuery = graphql`
  fragment layoutAboutUsFragment on ContentfulLayoutOurTeam {
    pageHeader
    pageText{
      childMarkdownRemark{
        html
      }
    }
    biographies{
      ... biographyFragment
    }
  }
`;
