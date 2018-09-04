import React from 'react';
import PropTypes from 'prop-types';
import { GetShareLinkClasses } from '../shareLinkTypes';
import getShareLinkUrl from '../shareLinkUrls';
import '../less/shareLink.less';

const ShareLink = ({ linkType, linkText, linkUrl }) => (
  <a
    className={`share-link ${GetShareLinkClasses(linkType)}`}
    href={getShareLinkUrl(linkType, linkUrl)}
    target="_blank"
    rel="noopener noreferrer"
  >
    <span>{linkText}</span>
  </a>
);

ShareLink.propTypes = {
  linkType: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkUrl: PropTypes.string,
};

ShareLink.defaultProps = {
  linkUrl: '',
};

export default ShareLink;
