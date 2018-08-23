import { graphql } from 'gatsby';

const SITE_TITLE_QUERY = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }`;

// eslint-disable-next-line
// export { SITE_TITLE_QUERY };
// export default SITE_TITLE_QUERY;
// eslint-disable-next-line
export { SITE_TITLE_QUERY };
