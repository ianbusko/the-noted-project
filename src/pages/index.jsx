import React from 'react';
import Layout from '../layouts/index';
import SplashBackground from '../components/splashBackground';
import SplashStoryLink from '../components/splashStoryLink';
import logo from '../images/logo-icon.svg';
import '../less/splash.less';

const IndexPage = () => (
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
          Telling the stories of Karen musicians on the Thai-Burma border
        </h1>
      </div>
    </section>
    <hr className="splash__mobile-divider" />
    {/* TODO: bind to list of available stories */}
    <section className="splash__links">
      <SplashStoryLink title="La June Paw" story="lajunepaw" />
      <SplashStoryLink title="Eh Klo Moo" story="lajunepaw" />
      <SplashStoryLink title="Deepunu" story="lajunepaw" />
      <SplashStoryLink title="Wa Wa" story="lajunepaw" />
      <SplashStoryLink title="Nai De Kulu" story="lajunepaw" />
    </section>

    <SplashBackground />
  </Layout>
);

export default IndexPage;
