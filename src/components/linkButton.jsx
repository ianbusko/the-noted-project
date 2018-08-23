import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import '../less/button.less';

const LinkButton = ({ buttonText, pageUrl }) => (
  <Link
    className="link-button"
    to={pageUrl}
  >
    {buttonText}
  </Link>
);

LinkButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  pageUrl: PropTypes.string.isRequired,
};

export default LinkButton;
