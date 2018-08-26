import React from 'react';
import { graphql } from 'gatsby';
import PlainPageLayout from '../layouts/plainPage';
import PlainChildContent from '../components/plainPageContent/childContent';
import '../less/plainPage.less';

// eslint-disable-next-line
const PlainPage = ({data}) => (
  <PlainPageLayout>
    <PlainChildContent contentData={data.contentfulLayout.content[0]} />
  </PlainPageLayout>
);

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
