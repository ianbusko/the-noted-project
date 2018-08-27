import React from 'react';
import { graphql } from 'gatsby';
import ShareLink from '../../shareLink';
import { ShareLinkType } from '../../../shareLinkTypes';
import '../../../less/shareSlideContent.less';

const ShareSlideContent = () => (
  <div className="share-slide-content">
    <p className="share-slide-content__text">Watch the next story or share this story with your friends.</p>

    <div className="share-slide-content__share-row">

      <div className="share-links">
        <ShareLink
          linkType={ShareLinkType.Placeholder}
          linkText="Share this story"
        />
        <div className="link-wrapper">
          <ShareLink
            linkType={ShareLinkType.Email}
            linkText="email"
          />
          <ShareLink
            linkType={ShareLinkType.Facebook}
            linkText="facebook"
          />
          <ShareLink
            linkType={ShareLinkType.Twitter}
            linkText="twitter"
          />
        </div>
      </div>

      <ShareLink
        linkType={ShareLinkType.Story}
        linkText="next story"
      />
    </div>
  </div>
);

export default ShareSlideContent;

export const shareSlideContentFragment = graphql`
  fragment shareSlideContentFragment on ContentfulSlideContentShare{
    sharingTitle
  }
`;
