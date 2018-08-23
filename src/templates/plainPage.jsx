import React from 'react';
import { graphql } from 'gatsby';
import PlainPageLayout from '../layouts/plainPage';

const PlainPage = () => (
  <PlainPageLayout>
    <div />
    <span>Welcome to the new plain page!</span>
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
      }
    }
  }
`;
