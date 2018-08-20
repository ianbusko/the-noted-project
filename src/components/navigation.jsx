import React from 'react';
import PropTypes from 'prop-types';
import MobileMenu from './mobileMenu';
import NavTrigger from './navTrigger';
import '../less/header.less';

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      isMenuActive: false,
    };

    this.onNavTriggerClick = this.onNavTriggerClick.bind(this);
  }

  onNavTriggerClick() {
    const { isMenuActive } = this.state;
    if (!isMenuActive) {
      this.setState({
        isMenuActive: true,
      });
    } else {
      this.setState({
        isMenuActive: false,
      });
    }
  }

  getClasses(isStory, isSplash) {
    return `${isStory ? 'header-row--story' : ''} ${isSplash ? 'header-row--splash' : ''}`;
  }

  render() {
    const {
      isStory, isSplash, isPlain, showLightMenu,
    } = this.props;
    const { isMenuActive } = this.state;
    return (
      <header
        role="navigation"
        className={`header-row ${
          this.getClasses(isStory, isSplash)
        }${isMenuActive ? ' menu-active' : ''}`}
      >
        <section className={`tnp-header ${showLightMenu ? 'light' : ''}`}>
          <div className={`header-logo-wrapper ${isPlain ? 'plain' : ''}`}>
            <a className="header-logo" href="\" />
          </div>
          <nav className="header-links no-mobile">
            <a href="\team">
              Our Team
            </a>
            <a href="\contact">
              Contact
            </a>
            <a href="\thanks">
              Thanks
            </a>
            <a href="http://blog.thenotedproject.org" target="_blank">
              Blog
            </a>
          </nav>
          <div className="header-media no-mobile">
            <div className="share-links">
              <div className="share-link placeholder">
                <span>
                  Share
                </span>
              </div>
              <div className="link-wrapper">
                <a className="share-link email" href="mailto:?subject=The%20Noted%20Project&body=http://www.thenotedproject.org" target="_blank">
                  <span>
                    Email
                  </span>
                </a>
                <a className="share-link facebook" href="https://www.facebook.com/sharer/sharer.php?u=TheNotedProject.org" target="_blank">
                  Facebook
                </a>
                <a href="https://twitter.com/share?url=https%3A%2F%2Fwww.thenotedproject.org&text=Share%20The%20Noted%20Project:" className="share-link twitter" target="_blank">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <NavTrigger onTriggerClick={this.onNavTriggerClick} isActive={isMenuActive} />
        </section>
        <MobileMenu isActive={isMenuActive} />
      </header>
    );
  }
}

Navigation.propTypes = {
  isStory: PropTypes.bool,
  isSplash: PropTypes.bool,
  isPlain: PropTypes.bool,
  showLightMenu: PropTypes.bool,
};

Navigation.defaultProps = {
  isStory: false,
  isSplash: false,
  isPlain: false,
  showLightMenu: false,
};

export default Navigation;
