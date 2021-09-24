import React from 'react'
import { RichTextBlock } from './richTextBlock'
import { PictureBlock } from './pictureBlock'

export const ContentBlocks = ({ blocks }) => {

  const components = {
    'richText': RichTextBlock,
    'picture': PictureBlock,
    'notFound': null
  }

  return (
    <div>
      {blocks && blocks.map( block => {
        const Block = components[block.typeHandle || 'notFound']
        return Block !== null && <Block key={block.uid} {...block} />
      })}
    </div>
  )
}
