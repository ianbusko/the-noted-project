import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Navigation from './navigation';
import Footer from './footer';
import Wrapper from './wrapper';
import CardArea from './cardArea';
import LoadingOverlay from './loadingOverlay';
import tile from '../images/tile.gif';
import favicon from '../images/favicon/favicon-32.png';
import '../less/overrides.less';
import '../less/layout.less';
import '../less/fonts.less';

function getStyles(isPlain) {
  if (isPlain) {
    return {
      backgroundColor: '#fef8f0',
      backgroundImage: `url('${tile}')`,
      position: 'relative',
    };
  }
  return {};
}

function getTitle(isStory, metaDataTitle, pageTitle) {
  if (isStory) {
    return `${metaDataTitle} | ${pageTitle}`;
  }
  return metaDataTitle;
}

const Layout = ({
  children, isStory, isPlain, isCardActive, infoCards, metaData, storyTitle,
}) => (
  <div style={getStyles(isPlain)}>
    <Helmet
      title={getTitle(isStory, metaData.title, storyTitle)}
      meta={[
        { name: 'og:url', content: 'Sample' },
        { name: 'og:type', content: 'website' },
        { name: 'og:title', content: metaData.title },
        { name: 'og:image', content: 'sample, something' },
        { name: 'og:description', content: 'sample, something' },
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
      ]}
    />
    <Navigation
      isStory={isStory}
      isPlain={isPlain}
      showLightMenu={!isPlain}
    />
    <LoadingOverlay />
    <main>
      { isStory && infoCards.length > 0
        && (
        <CardArea isActive={isCardActive}>
          { infoCards }
        </CardArea>
        )
      }
      {isStory && children }
      {!isStory && (
        <Wrapper>
          {children}
        </Wrapper>
      )}
      <Footer isStory={isStory} />
    </main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isStory: PropTypes.bool,
  isPlain: PropTypes.bool,
  isCardActive: PropTypes.bool,
  infoCards: PropTypes.arrayOf(PropTypes.object),
  metaData: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
  storyTitle: PropTypes.string,
};

Layout.defaultProps = {
  isStory: false,
  isPlain: false,
  isCardActive: false,
  infoCards: [],
  storyTitle: '',
};

export default Layout;
