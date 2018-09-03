import React from 'react';
import PropTypes from 'prop-types';
import '../../less/navDots.less';

const NavDots = ({ targets, activeDot, onDotClicked }) => (
  <div className="nav-dots">
    <ul>
      {targets.map((target, index) => (
        <li
          className={`${activeDot === index ? 'current' : ''}`}
          key={target.id}
        >
          {/* eslint-disable-next-line */}
          <a
            role="button"
            onClick={() => onDotClicked(index)}
          >
            <span style={{ display: 'none' }}>
              {`Scroll to slide ${index}`}
            </span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

NavDots.propTypes = {
  targets: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string }),
  ).isRequired,
  activeDot: PropTypes.number.isRequired,
  onDotClicked: PropTypes.func.isRequired,
};

export default NavDots;
