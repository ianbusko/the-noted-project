import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import get from 'lodash/get';
import SplashStoryLink from '../splashStoryLink';

const SplashLinks = () => (
  <StaticQuery
    query={graphql`
      query SplashQuery {
        allContentfulStory{
          edges{
            node{
              slug
              title
            }
          }
        }
      }
    `}
    render={(data) => {
      const stories = get(data, 'allContentfulStory.edges').map(edge => edge.node);
      return (
        <div className="splash__links">
          {stories.map(node => (
            <SplashStoryLink
              title={node.title}
              story={node.slug}
            />
          ))}
        </div>
      );
    }}
  />
);

export default SplashLinks;
