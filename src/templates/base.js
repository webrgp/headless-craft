import React from 'react'
import { Sections } from '../components/Craft/Sections'

const Base = ({ pageContext }) => {
  const { entry } = pageContext

  return <Sections entry={entry} />
}

export default Base