import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import withMetadata from '../layouts/withMetadata';
import PlainChildContent from '../components/plainPageContent/childContent';
import '../less/plainPage.less';

const LayoutWithMetaData = withMetadata(Layout);

const PlainPage = ({ data }) => (
  <LayoutWithMetaData isPlain>
    <PlainChildContent contentData={data.contentfulLayout.content[0]} />
  </LayoutWithMetaData>
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
