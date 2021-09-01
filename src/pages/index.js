import * as React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from 'react-helmet'
import parse from 'html-react-parser'

export const query = graphql`
  query HomeQuery {
    posts: allCraftBlogDefaultEntry {
      nodes {
        uid
        uri
        title
        excerpt
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
    <main>
      { home && home.seomatic && (
        <Helmet>
          {parse(home.seomatic.metaTitleContainer)}
          {parse(home.seomatic.metaJsonLdContainer)}
          {parse(home.seomatic.metaLinkContainer)}
          {parse(home.seomatic.metaTagContainer)}
        </Helmet>
      )}
      <h1>Gatsby + Craft Blog</h1>
      <ul>
        {posts && posts.nodes && posts.nodes.map(post => (
          <li key={post.uid}>
            <Link to={`/${post.uri}`}>
              <h3>{post.title}</h3>
            </Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage
