import React from 'react';
import PropTypes from 'prop-types';
import '../less/closeIcon.less';

const CloseIcon = ({ onCloseClick, isCard }) => (
  // eslint-disable-next-line
  <div
    role="button"
    className={`close-icon ${isCard ? 'card' : ''}`}
    onClick={onCloseClick}
  />
);

CloseIcon.propTypes = {
  onCloseClick: PropTypes.func.isRequired,
  isCard: PropTypes.bool,
};

CloseIcon.defaultProps = {
  isCard: false,
};

export default CloseIcon;
