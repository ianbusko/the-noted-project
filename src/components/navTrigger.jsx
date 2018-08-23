import React from 'react';
import PropTypes from 'prop-types';
import '../less/navTrigger.less';

const NavTrigger = ({ onTriggerClick, isActive }) => (
  // eslint-disable-next-line
  <div
    role="button"
    className={`nav-trigger ${isActive ? 'nav-trigger--active' : ''}`}
    onClick={onTriggerClick}
  >
    <span />
    <span />
    <span />
  </div>
);

NavTrigger.propTypes = {
  isActive: PropTypes.bool,
  onTriggerClick: PropTypes.func,
};

NavTrigger.defaultProps = {
  isActive: false,
  onTriggerClick: () => {},
};
export default NavTrigger;
