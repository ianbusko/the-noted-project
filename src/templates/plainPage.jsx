import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PlainChildContent from '../components/plainPageContent/childContent';
import '../less/plainPage.less';

const PlainPage = ({ data }) => (
  <Layout isPlain>
    <PlainChildContent contentData={data.contentfulLayout.content[0]} />
  </Layout>
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
