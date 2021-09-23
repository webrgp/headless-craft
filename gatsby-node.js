const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query PostsQuery {
      posts: allCraftBlogDefaultEntry {
        nodes {

          uid
          uri
          title

          seomatic {
            ... on Craft_SeomaticType {
              metaTitleContainer
              metaTagContainer
              metaLinkContainer
              metaJsonLdContainer
            }
          }

          coverPicture {
            ... on Craft_mainFileUploads_Asset {
              url
              title
              detailCover: localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 960,
                    height: 480,
                    quality: 80
                  )
                }
              }
            }
          }

          contentBlocks {
            ... on Craft_contentBlocks_richText_BlockType {
              uid
              typeHandle
              body
            }
            ... on Craft_contentBlocks_picture_BlockType {
              uid
              typeHandle
              image {
                ... on Craft_mainFileUploads_Asset {
                  url
                  title
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
            }
          }

        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  const { posts } = result.data

  posts.nodes.forEach(post => createPage({
    path: post.uri,
    component: path.resolve('./src/templates/post.js'),
    context: { post }
  }))
}