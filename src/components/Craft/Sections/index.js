import React from 'react'
import { BlogSection } from './Blog'

export const Sections = ({ entry }) => {

  const sectionType = {
    'blog': BlogSection,
    'notFound': null
  }

  const Section = sectionType[entry.sectionHandle || 'notFound']

  return Section !== null &&  (
    <Section {...entry} />
  )
}
