import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql, Link } from 'gatsby';
import get from 'lodash/get';
import MobileMenu from './mobileMenu';
import ShareLink from './shareLink';
import '../less/header.less';

const Navigation = ({
  isStory, isSplash, isPlain, showLightMenu, data,
}) => {
  const links = get(data, 'contentfulSiteMetaContent.links')
    .map(link => ({
      slug: link.slug ? link.slug : '',
      title: link.title,
    }));
  const siteUrl = get(data, 'contentfulSiteMetaContent.siteUrl');
  const twitterShareBody = get(data, 'contentfulSiteMetaContent.twitterShareBody');

  return (
    <>
      <header
        role="navigation"
        className={`header-row
          ${isStory ? 'header-row--story' : ''}
          ${isSplash ? 'header-row--splash' : ''}`
        }
      >
        <section className={`tnp-header ${showLightMenu ? 'light' : ''}`}>
          <div className={`header-logo-wrapper ${isPlain ? 'plain' : ''}`}>
            <div className="header-logo">
              <span style={{ display: 'none' }}>The Noted Project Home</span>
            </div>
          </div>
          <nav className="header-links no-mobile">
            {links.map(link => (
              <Link
                to={`${link.slug}`}
                key={`${link.slug}`}
              >
                {link.title}
              </Link>
            ))}
          </nav>
          <div className="header-media no-mobile">
            <div className="share-links">
              <ShareLink
                linkType="placeholder"
                linkText="Share"
              />
              <div className="link-wrapper">
                <ShareLink
                  linkType="email"
                  linkText="Email"
                  linkUrl={siteUrl}
                />
                <ShareLink
                  linkType="facebook"
                  linkText="Facebook"
                  linkUrl={siteUrl}
                />
                <ShareLink
                  linkType="twitter"
                  linkText="Twitter"
                  linkUrl={siteUrl}
                  linkTextContent={twitterShareBody}
                />
              </div>
            </div>
          </div>
        </section>
      </header>
      <MobileMenu
        links={links}
        isPlain={isPlain}
      />
    </>
  );
};

Navigation.propTypes = {
  isStory: PropTypes.bool,
  isSplash: PropTypes.bool,
  isPlain: PropTypes.bool,
  showLightMenu: PropTypes.bool,
  data: PropTypes.shape({
    allContentfulLayout: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          slug: PropTypes.string,
          title: PropTypes.string,
        }),
      })),
    }),
  }).isRequired,
};

Navigation.defaultProps = {
  isStory: false,
  isSplash: false,
  isPlain: false,
  showLightMenu: false,
};

// export default Navigation;
export default props => (
  <StaticQuery
    query={graphql`
      query NavigationQuery {
        contentfulSiteMetaContent{
          links{
            title
            slug
          }
          siteUrl
          twitterShareBody
        }
      }
    `}
    render={
      data => <Navigation data={data} {...props} />
    }
  />
);
