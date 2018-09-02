import React from 'react';
import PropTypes from 'prop-types';
import '../less/wrapper.less';

const Wrapper = ({ children, isStory, onScroll }) => (
  <section className={`wrapper ${isStory && 'story'}`} onWheel={onScroll}>
    { children }
  </section>
);

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  isStory: PropTypes.bool,
  onScroll: PropTypes.func,
};

Wrapper.defaultProps = {
  isStory: false,
  onScroll: () => {},
};

export default Wrapper;
