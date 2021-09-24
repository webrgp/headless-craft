import React from 'react'
import { Helmet } from 'react-helmet'
import parse from 'html-react-parser'
import { ContentBlocks } from '../../../ContentBlocks'
import { Layout } from '../../../../Layout'
import { Img } from '../../../../Img'

export const DefaultType = entry => {
  const [coverPicture] = entry.coverPicture
  return (
    <Layout>
      { entry.seomatic && (
        <Helmet>
          {parse(entry.seomatic.metaTitleContainer)}
          {parse(entry.seomatic.metaJsonLdContainer)}
          {parse(entry.seomatic.metaLinkContainer)}
          {parse(entry.seomatic.metaTagContainer)}
        </Helmet>
      )}
      <h1 className="mb-2">{entry.title}</h1>
      <Img
        alt={coverPicture.title}
        image={coverPicture}
        className="mx-auto d-block w-100 mb-5"
      />
      <ContentBlocks blocks={entry.contentBlocks} />
    </Layout>
  )
}
