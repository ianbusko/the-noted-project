import React from 'react';
import PropTypes from 'prop-types';
import PlainContentTypes from '../../plainContentTypes';
import ThanksContent from './thanksContent';
import ContactContent from './contactContent';
import TeamContent from './teamContent';

function getSwitch(data) {
  // eslint-disable-next-line
  switch (data.__typename) {
    case PlainContentTypes.THANKS_CONTENT:
      return (
        <ThanksContent
          key={`${data.contentType}`}
          specialThanks={data.specialThanks}
          kickstarterSupporters={data.kickstarterSupporters}
        />
      );
    case PlainContentTypes.CONTACT_CONTENT:
      return (
        <ContactContent
          emailAddress={data.contactEmailAddress}
          key={`${data.contentType}`}
        />
      );
    case PlainContentTypes.TEAM_CONTENT:
      return (
        <TeamContent
          pageHeader={data.pageHeader}
          pageTextHtml={data.pageText.childMarkdownRemark.html}
          biographies={data.biographies}
          socialLinks={data.socialLinks}
          key={`${data.contentType}`}
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
