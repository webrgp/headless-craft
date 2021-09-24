import React from 'react'
import { Img } from '../../Img'

export const PictureBlock = ({ image }) => {

  const [ pic ] = image

  return (
    <Img
      alt={pic.title}
      image={pic}
      className="mx-auto d-block w-100 mb-5"
    />
  )
}
