module.exports = function(api) {
  api.loadSource(async actions => {});

  api.createPages(async ({ createPage, graphql }) => {
    const { data } = await graphql(`
      query {
        Prismic {
          allBlogposts {
            edges {
              node {
                title
                hero
                description
                body {
                  ...structuredPart
                  ...quotePart
                  ...codePart
                }
                _meta {
                  tags
                  uid
                  id
                }
              }
            }
          }
        }
      }

      fragment structuredPart on Prismic_BlogpostBodyText {
        type
        label
        primary {
          text
        }
      }

      fragment quotePart on Prismic_BlogpostBodyQuote {
        type
        label
        primary {
          quote
        }
      }

      fragment codePart on Prismic_BlogpostBodyCode {
        type
        label
        primary {
          code
        }
      }
    `);

    await Promise.all(
      data.Prismic.allBlogposts.edges.map(async d => {
        const { data } = await graphql(`
          query {
            Prismic {
              allBlogposts(
                similar: { documentId: "XmgQohIAAB8AeWe5", max: 3 }
                sortBy: meta_lastPublicationDate_DESC
              ) {
                edges {
                  node {
                    title
                    hero
                    description
                    _meta {
                      tags
                      uid
                      firstPublicationDate
                    }
                  }
                }
              }
            }
          }
        `);

        createPage({
          path: `/post/${d.node._meta.uid}`,
          component: './src/templates/Post.vue',
          context: {
            post: d.node,
            similar: data.Prismic.allBlogposts.edges.map(x => x.node),
          },
        });
      })
    );
  });
};
