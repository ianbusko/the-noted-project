import React from 'react';
import PropTypes from 'prop-types';
import '../../less/cardHeader.less';

const CardHeader = ({ imageUrl, title }) => (
  <header
    className="card-header"
    style={{
      backgroundImage: `url(https:${imageUrl}`,
    }}
  >
    <h1>{ title }</h1>
  </header>
);

CardHeader.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default CardHeader;
