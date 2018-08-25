import React from 'react';
import PropTypes from 'prop-types';
import '../../less/thanksList.less';

const ThanksList = ({ title, names }) => (
  <section className="thanks-list">
    <h2 className="thanks-list__title">
      {title}
    </h2>
    <ul className="thanks-list__items">
      {names.map(name => (
        <li
          className="thanks-list__item"
          key={`thanks-${name}`}
        >
          {name}
        </li>
      ))}
    </ul>
  </section>
);

ThanksList.propTypes = {
  title: PropTypes.string.isRequired,
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ThanksList;
