import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import PlainPageLayout from '../layouts/plainPage';
import withMetadata from '../layouts/withMetadata';
import PlainChildContent from '../components/plainPageContent/childContent';
import '../less/plainPage.less';

const PlainPageWithMetadata = withMetadata(PlainPageLayout);

const PlainPage = ({ data }) => (
  <PlainPageWithMetadata>
    <PlainChildContent contentData={data.contentfulLayout.content[0]} />
  </PlainPageWithMetadata>
);

PlainPage.propTypes = {
  // eslint-disable-next-line
  data: PropTypes.object,
};

export default PlainPage;

export const pageQuery = graphql`
  query LayoutBySlug($slug: String!) {
    contentfulLayout(slug: { eq: $slug }){
      slug
      title
      content{
        __typename
        ... layoutThanks
        ... layoutContact
        ... layoutAboutUsFragment
      }
    }
  }
`;
