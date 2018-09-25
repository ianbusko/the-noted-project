import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { get } from 'lodash';
import Layout from '../components/layout';
import SplashBackground from '../components/splashBackground';
import logo from '../images/logo-icon.svg';
import SplashStoryLink from '../components/splashStoryLink';
import '../less/splash.less';

const IndexPage = ({ data }) => {
  const splashData = get(data, 'contentfulLayoutSplash');
  const {
    tagline, splashBackgroundVideo, splashMobileBackground, stories,
  } = splashData;
  return (
    <Layout isSplash>
      <section className="splash__title">
        <img
          src={logo}
          alt="The Noted Project"
          className="splash__logo"
        />
        <hr className="splash__divider" />
        <div className="splash__header">
          <h1>
            {tagline}
          </h1>
        </div>
      </section>
      <hr className="splash__mobile-divider" />
      <div className="splash__links">
        {stories.map(link => (
          <SplashStoryLink
            title={link.title}
            story={link.slug}
            key={link.slug}
          />
        ))}
      </div>
      <SplashBackground
        backgroundImageUrl={splashMobileBackground.file.url}
        videoUrl={splashBackgroundVideo}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    contentfulLayoutSplash: PropTypes.shape({
      tagline: PropTypes.string.isRequired,
      splashBackgroundVideo: PropTypes.string.isRequired,
      splashMobileBackground: PropTypes.shape({
        file: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }),
      }),
      stories: PropTypes.arrayOf(PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })),
    }).isRequired,
  }).isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  query splashContent{
    contentfulLayoutSplash{
      tagline
      splashBackgroundVideo
      splashMobileBackground{
        file{
          url
        }
      }
      stories{
        slug
        title
      }
    }
  }
`;
