import React from 'react'

export const RichTextBlock = ({ body }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: body }} />
  )
}
