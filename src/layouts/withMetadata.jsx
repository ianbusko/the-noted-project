import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

function withMetadata(WrappedComponent) {
  return props => (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          contentfulSiteMetaContent{
            siteTitle
            siteUrl
            metaImage {
              file{
                url
              }
            }
            metaDescription
          }
        }`}
      render={data => (
        <WrappedComponent
          metaData={data.contentfulSiteMetaContent}
          {...props}
        />)}
    />
  );
}

export default withMetadata;
