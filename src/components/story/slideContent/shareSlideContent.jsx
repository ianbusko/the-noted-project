import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import ShareLink from '../../shareLink';
import { ShareLinkType } from '../../../shareLinkTypes';
import '../../../less/shareSlideContent.less';

const shareLinks = [
  { type: ShareLinkType.Email, text: 'email' },
  { type: ShareLinkType.Facebook, text: 'facebook' },
  { type: ShareLinkType.Twitter, text: 'twitter' },
];

class ShareSlideContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shareUrl: '',
    };
  }

  componentDidMount() {
    const { storySlug } = this.props;
    this.setState({
      shareUrl: `${window.location.host}/story/${storySlug}`,
    });
  }

  render() {
    const { shareUrl } = this.state;
    const { sharingText } = this.props;
    return (
      <div className="share-slide-content">
        <p className="share-slide-content__text">{sharingText}</p>

        <div className="share-slide-content__share-row">

          <div className="share-links">
            <ShareLink
              linkType={ShareLinkType.Placeholder}
              linkText="Share this Story"
            />
            <div className="link-wrapper">
              {shareLinks.map(link => (
                <ShareLink
                  key={link.type}
                  linkType={link.type}
                  linkText={link.text}
                  linkUrl={shareUrl}
                />
              ))}
            </div>
          </div>

          <ShareLink
            linkType={ShareLinkType.Story}
            linkText="next story"
          />
        </div>
      </div>
    );
  }
}

ShareSlideContent.propTypes = {
  storySlug: PropTypes.string.isRequired,
  sharingText: PropTypes.string.isRequired,
};

export default ShareSlideContent;

export const shareSlideContentFragment = graphql`
  fragment shareSlideContentFragment on ContentfulSlideContentShare{
    sharingTitle
    sharingText
  }
`;
