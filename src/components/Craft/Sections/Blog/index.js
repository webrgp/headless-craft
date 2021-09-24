import React from 'react'
import { DefaultType } from './EntryTypes/defaultType'

export const BlogSection = entry => {

  const entryType = {
    'default': DefaultType,
    'notFound': null
  }

  const EntryType = entryType[entry.typeHandle || 'notFound']

  return EntryType !== null &&  (
    <EntryType {...entry} />
  )
}
