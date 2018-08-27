import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
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
  position: 'relative',
};

const PlainPageLayout = ({ children, metaData }) => (
  <div style={backgroundStyles}>
    <Helmet
      title={metaData.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Navigation isPlain />
    <main className="plain-page">
      <Wrapper>
        {children}
      </Wrapper>
    </main>
    <Footer />
  </div>
);

PlainPageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  metaData: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default PlainPageLayout;
