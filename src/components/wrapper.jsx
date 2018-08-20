import React from 'react';
import PropTypes from 'prop-types';
import '../less/wrapper.less';

const Wrapper = ({ children, isStory }) => (
  <section className={`wrapper ${isStory && 'story'}`}>
    { children }
  </section>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  isStory: PropTypes.bool,
};

Wrapper.defaultProps = {
  isStory: false,
};

export default Wrapper;
