import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import Wrapper from '../components/wrapper';
import tile from '../images/tile.gif';
import '../less/overrides.less';
import '../less/layout.less';
import '../less/fonts.less';

const backgroundStyles = {
  backgroundColor: '#fef8f0',
  backgroundImage: `url('${tile}')`,
};

const PlainPageLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }`}
    render={data => (
      <div style={backgroundStyles}>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Navigation isPlain />
        <main>
          <Wrapper>
            {children}
          </Wrapper>
        </main>
        <Footer />
      </div>
    )}
  />
);

PlainPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlainPageLayout;
