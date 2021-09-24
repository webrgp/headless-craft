import React from 'react'

export const RichTextBlock = ({ body }) => {
  return (
    <div className="mb-5" dangerouslySetInnerHTML={{ __html: body }} />
  )
}
