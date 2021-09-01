import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export const PictureBlock = ({ image }) => {

  const [ pic ] = image

  return (
    <GatsbyImage
      alt={pic.title}
      image={getImage(pic.localFile)}
    />
  )
}
