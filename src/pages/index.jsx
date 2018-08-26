import React from 'react';
import Layout from '../layouts/index';
import withMetadata from '../layouts/withMetadata';
import SplashBackground from '../components/splashBackground';
import logo from '../images/logo-icon.svg';
import '../less/splash.less';
import SplashLinks from '../components/splash/splashLinks';

const LayoutWithMetadata = withMetadata(Layout);

const IndexPage = () => (
  <LayoutWithMetadata isSplash>
    <section className="splash__title">
      <img
        src={logo}
        alt="The Noted Project"
        className="splash__logo"
      />
      <hr className="splash__divider" />
      <div className="splash__header">
        <h1>
          Telling the stories of Karen musicians on the Thai-Burma border
        </h1>
      </div>
    </section>
    <hr className="splash__mobile-divider" />
    <SplashLinks />
    <SplashBackground />
  </LayoutWithMetadata>
);

export default IndexPage;
