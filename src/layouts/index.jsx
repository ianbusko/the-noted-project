import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import Wrapper from '../components/wrapper';
import CardArea from '../components/cardArea';
import LoadingOverlay from '../components/loadingOverlay';
import tile from '../images/tile.gif';
import favicon from '../images/favicon/favicon-32.png';
import '../less/overrides.less';
import '../less/layout.less';
import '../less/fonts.less';

function getStyles(isCardActive, isPlain) {
  if (isPlain) {
    return {
      backgroundColor: '#fef8f0',
      backgroundImage: `url('${tile}')`,
      position: 'relative',
    };
  }
  return {};
}

function getTitle(isStory, metaDataTitle, storyTitle) {
  if (isStory) {
    return `${metaDataTitle} | ${storyTitle}`;
  }
  return metaDataTitle;
}

const Layout = ({
  children, isStory, isPlain, isSplash, isCardActive, infoCards, metaData, storyTitle,
}) => (
  <div style={getStyles(isCardActive, isPlain)}>
    <Helmet
      title={getTitle(isStory, metaData.title, storyTitle)}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
      ]}
    />
    <Navigation isStory={isStory} isPlain={isPlain} showLightMenu={isStory || isSplash} />
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
      <Wrapper isStory={isStory}>
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
  isSplash: PropTypes.bool,
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
  isSplash: false,
  isCardActive: false,
  infoCards: [],
  storyTitle: '',
};

export default Layout;
