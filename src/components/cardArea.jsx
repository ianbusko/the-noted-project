import React from 'react';
import PropTypes from 'prop-types';
import '../less/cardArea.less';

const CardArea = ({ isActive, children }) => (
  <section className={`card-area ${isActive ? 'card--visible card--loaded' : ''}`}>
    { children }
  </section>
);

CardArea.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
};

CardArea.defaultProps = {
  isActive: false,
};

export default CardArea;
