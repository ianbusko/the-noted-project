const ShareLinkType = {
  Story: 'story',
  Facebook: 'facebook',
  Email: 'email',
  Twitter: 'twitter',
  Placeholder: 'placeholder',
};

function GetShareLinkClasses(type) {
  switch (type) {
    case ShareLinkType.Email:
      return 'email';
    case ShareLinkType.Facebook:
      return 'facebook';
    case ShareLinkType.Twitter:
      return 'twitter';
    case ShareLinkType.Story:
      return 'story';
    case ShareLinkType.Placeholder:
      return 'placeholder';
    default:
      return '';
  }
}

export { ShareLinkType, GetShareLinkClasses };
