import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../closeIcon';

const CloseArea = ({ onCloseClick }) => (
  <div className="close-area">
    <CloseIcon
      onCloseClick={onCloseClick}
      isCard
    />
  </div>
);

CloseArea.propTypes = {
  onCloseClick: PropTypes.func.isRequired,
};

export default CloseArea;
