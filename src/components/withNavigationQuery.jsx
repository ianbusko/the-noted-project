import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

export default function withNavigationQuery(WrappedComponent) {
  return props => (
    <StaticQuery
      query={graphql`
        query NavigationQuery {
          contentfulSiteMetaContent{
            links{
              title
              slug
            }
            siteUrl
            twitterShareBody
          }
        }
      `}
      render={
        data => <WrappedComponent data={data} {...props} />
      }
    />
  );
}
