import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

export const Img = props => {

  const { image, alt, ...rest } = props

  if ('localFile' in image) {
    return (
      <GatsbyImage
        alt={alt}
        image={getImage(image.localFile)}
        {...rest}
      />
    )
  }

  return (
    <img
      alt={alt}
      src={image.url}
      {...rest}
    />
  )
}