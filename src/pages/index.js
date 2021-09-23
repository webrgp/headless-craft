import * as React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import parse from 'html-react-parser'
import { Layout } from "../components/Layout"
import { PostListingItem } from "../components/PostListingItem"

export const query = graphql`
  query HomeQuery {
    posts: allCraftBlogDefaultEntry {
      nodes {
        uid
        uri
        title
        excerpt
        coverPicture {
          ... on Craft_mainFileUploads_Asset {
            url
            title
            listingCover: localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 320,
                  height: 160,
                  quality: 80
                )
              }
            }
          }
        }
      }
    }
    home: craftHomePageHomePageEntry {
      seomatic {
        ... on Craft_SeomaticType {
          metaTitleContainer
          metaTagContainer
          metaLinkContainer
          metaJsonLdContainer
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const { posts, home } = data

  return (
    <Layout>
      { home && home.seomatic && (
        <Helmet>
          {parse(home.seomatic.metaTitleContainer)}
          {parse(home.seomatic.metaJsonLdContainer)}
          {parse(home.seomatic.metaLinkContainer)}
          {parse(home.seomatic.metaTagContainer)}
        </Helmet>
      )}
      <h1>Get started with Live Preview!</h1>
      <p className="fs-5 col-md-8">Check out the series on <a href="https://rodrigopassos.com">RodrigoPassos.com</a></p>

      <hr className="col-3 col-md-2 mb-5" />

      <ul className="icon-list">
        {posts && posts.nodes && posts.nodes.map(post => (
          <PostListingItem key={post.uid} post={post} />
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
