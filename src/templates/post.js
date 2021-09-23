import React from 'react'
import { Helmet } from 'react-helmet'
import parse from 'html-react-parser'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { ContentBlocks } from '../components/ContentBlocks'
import { Layout } from '../components/Layout'

const Post = ({ pageContext }) => {
  const { post } = pageContext
  const [coverPicture] = post.coverPicture
  return (
    <Layout>
      { post.seomatic && (
        <Helmet>
          {parse(post.seomatic.metaTitleContainer)}
          {parse(post.seomatic.metaJsonLdContainer)}
          {parse(post.seomatic.metaLinkContainer)}
          {parse(post.seomatic.metaTagContainer)}
        </Helmet>
      )}
      <h1 className="mb-2">{post.title}</h1>
      <GatsbyImage
        alt={coverPicture.title}
        image={getImage(coverPicture.detailCover)}
        className="mx-auto d-block mb-5"
      />
      <ContentBlocks blocks={post.contentBlocks} />
    </Layout>
  )
}

export default Post