import React from 'react';
import '../less/mobileMenu.less';
import '../less/media.less';

const MobileMenu = () => (
  <section className="mobile-menu">
    <ul>
      <li><a href="\team">Our Team</a></li>
      <li><a href="\contact">Contact</a></li>
      <li><a href="\thanks">Thanks</a></li>
      <li><a href="http://blog.thenotedproject.org" target="_blank">Blog</a></li>
    </ul>
    <div className="header-media">
      <a className="share-tnp">
        Share
        <br />
        #THENOTEDPROJECT
      </a>
      <div className="horizontal icons grid">
        <div className="horizontal row">
          <a className="facebook media icon" href="https://www.facebook.com/sharer/sharer.php?u=TheNotedProject.org" target="_blank" />
          <a className="twitter media icon" href="https://twitter.com/share?url=https%3A%2F%2Fwww.thenotedproject.org&text=Share%20The%20Noted%20Project:" target="_blank" />
        </div>
      </div>
    </div>
  </section>
);

export default MobileMenu;
