import React from 'react';
import '../less/mobileMenu.less';
import '../less/media.less';

const MobileMenu = () => (
  <section className="mobile-menu">
    <ul>
      <li><a href="\team">Our Team</a></li>
      <li><a href="\contact">Contact</a></li>
      <li><a href="\thanks">Thanks</a></li>
      <li><a href="http://blog.thenotedproject.org" target="_blank" rel="noopener noreferrer">Blog</a></li>
    </ul>
    <div className="header-media">
      <div className="share-tnp">
        Share
        <br />
        #THENOTEDPROJECT
      </div>
      <div className="mobile-menu__share">
        <a
          className="facebook media icon"
          href="https://www.facebook.com/sharer/sharer.php?u=TheNotedProject.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ display: 'none' }}>Share on Facebook</span>
        </a>
        <a
          className="twitter media icon"
          href="https://twitter.com/share?url=https%3A%2F%2Fwww.thenotedproject.org&text=Share%20The%20Noted%20Project:"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ display: 'none' }}>Share on Twitter</span>
        </a>
      </div>
    </div>
  </section>
);

export default MobileMenu;
