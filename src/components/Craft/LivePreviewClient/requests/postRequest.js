import { gql, request } from "graphql-request";

const PostPreviewQuery = gql`
  query PostQuery($uid: [String]) {
    entry(uid: $uid) {
      ... on blog_default_Entry {
        uid
        uri
        title
        typeHandle
        sectionHandle
        seomatic {
          metaTitleContainer
          metaTagContainer
          metaLinkContainer
          metaJsonLdContainer
        }
        coverPicture {
          ... on mainFileUploads_Asset {
            url: url @transform(width: 960, height: 480, quality: 80, mode: "crop")
            title
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
              }
            }
          }
        }
      }
    }
  }
`
export const PostRequest = ({ apiUrl, uid }) => {
  return () => request(
    apiUrl,
    PostPreviewQuery,
    {uid}
  )
}