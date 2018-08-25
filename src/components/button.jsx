import React from 'react';
import PropTypes from 'prop-types';
import '../less/button.less';

const Button = ({ buttonText, url }) => (
  <a
    className="dark link-button"
    href={url}
  >
    {buttonText}
  </a>
);

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Button;
