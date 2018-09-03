import React from 'react';
import PropTypes from 'prop-types';
import '../../less/scrollHelper.less';

const ScrollHelper = ({ showRing, showVideoText, showViewText }) => (
  <div className={`scroll-helper ${showRing ? 'scroll-helper--ring' : ''}`}>
    <span style={{ opacity: showViewText ? '1' : '0' }}>
      scroll to navigate
    </span>
    <span style={{ opacity: showVideoText ? '1' : '0' }}>
      View the Story
    </span>
    <div className="scroll-helper__arrow" />
  </div>
);

ScrollHelper.propTypes = {
  showRing: PropTypes.bool.isRequired,
  showViewText: PropTypes.bool.isRequired,
  showVideoText: PropTypes.bool.isRequired,
};

export default ScrollHelper;
