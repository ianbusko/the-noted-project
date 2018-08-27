import React from 'react';
import PropTypes from 'prop-types';
import '../../less/arrowLink.less';

const ArrowLink = ({ direction, linkText, linkUrl }) => (
  <div className="arrow-link">
    <a href={linkUrl} className={`arrow-link__link ${direction}`}>
      <span>{linkText}</span>
      <div className={`arrow ${direction}`} />
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
