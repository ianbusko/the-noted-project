import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import Wrapper from '../components/wrapper';
import CardArea from '../components/cardArea';
import tile from '../images/tile.gif';
import '../less/overrides.less';
import '../less/layout.less';
import '../less/fonts.less';

const backgroundStyles = {
  backgroundColor: '#fef8f0',
  backgroundImage: `url('${tile}')`,
};

const Layout = ({
  children, isStory, isPlain, isSplash, isCardActive, infoCards,
}) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div style={(isPlain ? backgroundStyles : {})}>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Navigation isStory={isStory} isPlain={isPlain} showLightMenu={isStory || isSplash} />
        <main>
          {/* TODO: move this out of main */}
          { isStory && infoCards.length > 0
            && (
            <CardArea isActive={isCardActive}>
              { infoCards }
            </CardArea>
            )
          }
          <Wrapper isStory={isStory}>
            {children}
          </Wrapper>
          {/* TODO: move footer below main */}
          <Footer isStory={isStory} />
        </main>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isStory: PropTypes.bool,
  isPlain: PropTypes.bool,
  isSplash: PropTypes.bool,
  isCardActive: PropTypes.bool,
  infoCards: PropTypes.arrayOf(PropTypes.object),
};

Layout.defaultProps = {
  isStory: false,
  isPlain: false,
  isSplash: false,
  isCardActive: false,
  infoCards: [],
};

export default Layout;
