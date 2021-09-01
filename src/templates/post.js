import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import parse from 'html-react-parser'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { ContentBlocks } from '../components/ContentBlocks'

const Post = ({ pageContext }) => {
  const { post } = pageContext
  const [coverPicture] = post.coverPicture
  return (
    <main>
      { post.seomatic && (
        <Helmet>
          {parse(post.seomatic.metaTitleContainer)}
          {parse(post.seomatic.metaJsonLdContainer)}
          {parse(post.seomatic.metaLinkContainer)}
          {parse(post.seomatic.metaTagContainer)}
        </Helmet>
      )}
      <Link to="/">
        <h3>Gatsby + Craft Blog</h3>
      </Link>
      <GatsbyImage
        alt={coverPicture.title}
        image={getImage(coverPicture.localFile)}
      />
      <h1>{post.title}</h1>
      <ContentBlocks blocks={post.contentBlocks} />
    </main>
  )
}

export default Post