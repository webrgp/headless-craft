const path = require(`path`)

const createEntryPage = (createPage, entry) => {
  createPage({
    path: entry.uri,
    component: path.resolve('./src/templates/base.js'),
    context: { entry }
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query PostsQuery {
      entries: allBlogDefaultEntry {
        nodes {
          uid
          uri
          title
          typeHandle
          sectionHandle

          seomatic {
            ... on SeomaticType {
              metaTitleContainer
              metaTagContainer
              metaLinkContainer
              metaJsonLdContainer
            }
          }

          coverPicture {
            ... on mainFileUploads_Asset {
              url
              title
              localFile {
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
            ... on contentBlocks_richText_BlockType {
              uid
              typeHandle
              body
            }
            ... on contentBlocks_picture_BlockType {
              uid
              typeHandle
              image {
                ... on mainFileUploads_Asset {
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

  const { entries } = result.data

  entries.nodes.forEach(entry => createEntryPage(createPage, entry))
}