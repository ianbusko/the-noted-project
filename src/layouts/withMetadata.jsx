import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

function withMetadata(WrappedComponent) {
  return props => (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }`}
      render={data => (
        <WrappedComponent
          metaData={data.site.siteMetadata}
          {...props}
        />)}
    />
  );
}

export default withMetadata;
