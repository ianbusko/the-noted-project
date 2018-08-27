import React from 'react';
import PropTypes from 'prop-types';

const ArrowLink = ({ direction, linkText, linkUrl }) => (
  <div className={`arrow-column grid ${direction}`}>
    <a href={linkUrl} className="arrow-link">
      <span>{linkText}</span>
    </a>
  </div>
);

ArrowLink.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  linkText: PropTypes.string.isRequired,
  linkUrl: PropTypes.string,
};

ArrowLink.defaultProps = {
  linkUrl: '#',
};

export default ArrowLink;
