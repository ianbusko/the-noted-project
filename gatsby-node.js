const Promise = require('bluebird');
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const storyPage = path.resolve('./src/templates/story.jsx');
    const plainPage = path.resolve('./src/templates/plainPage.jsx');
    resolve(
      graphql(
        `
          {
            allContentfulLayout{
              edges{
                node{
                  slug
                }
              }  
            }
            allContentfulStory{
              edges{
                node{
                  slug
                }
              }
            }
          }
        `,
      ).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }

        const plainPages = result.data.allContentfulLayout.edges;
        plainPages
          .filter(page => page.node.slug)
          .forEach((page) => {
            createPage({
              path: `${page.node.slug}`,
              component: plainPage,
              context: {
                slug: page.node.slug,
              },
            });
          });

        const storyPages = result.data.allContentfulStory.edges;
        storyPages.forEach((page) => {
          createPage({
            path: `/story/${page.node.slug}`,
            component: storyPage,
            context: {
              slug: page.node.slug,
            },
          });
        });
      }),
    );
  });
};
