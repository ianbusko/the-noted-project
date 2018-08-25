import React from 'react';
import PropTypes from 'prop-types';
import PlainContentTypes from '../../plainContentTypes';
import ThanksContent from './thanksContent';

function getSwitch(data) {
  // eslint-disable-next-line
  switch (data.__typename) {
    case PlainContentTypes.THANKS_CONTENT:
      return (
        <ThanksContent
          key={data.contentType}
          specialThanks={data.specialThanks}
          kickstarterSupporters={data.kickstarterSupporters}
        />
      );
    default:
      return null;
  }
}

const PlainChildContent = ({ contentData }) => (
  <React.Fragment>
    {getSwitch(contentData)}
  </React.Fragment>
);

PlainChildContent.propTypes = {
  // eslint-disable-next-line
  contentData: PropTypes.object.isRequired,
};

export default PlainChildContent;
