import { ShareLinkType } from './shareLinkTypes';

function getShareLinkUrl(type, url, sharingText) {
  switch (type) {
    case ShareLinkType.Facebook:
      return encodeURI(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
    case ShareLinkType.Email:
      return encodeURI(`mailto:?subject=${'The Noted Project'}&body=${url}`);
    case ShareLinkType.Twitter:
      return encodeURI(`https://twitter.com/intent/tweet?url=https://${encodeURI(url)}&text=${encodeURIComponent(sharingText)}`);
    default:
      return url;
  }
}

export default getShareLinkUrl;
