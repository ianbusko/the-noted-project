import React from 'react';
import PropTypes from 'prop-types';
import '../less/footer.less';

const GetYear = () => new Date().getYear() + 1900;

const getStoryClass = isStory => `tnp-footer ${isStory ? 'story' : ''}`;

const Footer = ({ isStory }) => (
  <footer className={getStoryClass(isStory)}>
    ©THE NOTED PROJECT
    {' '}
    { GetYear() }
    {' '}
    | All Rights Reserved
  </footer>
);

Footer.propTypes = {
  isStory: PropTypes.bool,
};

Footer.defaultProps = {
  isStory: false,
};

export default Footer;
