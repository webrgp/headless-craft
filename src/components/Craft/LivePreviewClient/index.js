import React from 'react'
import { parse } from 'query-string'
import { CraftCMSQuery } from './api'
import { Sections } from '../Sections'

export const LivePreviewClient = ({location}) => {

  const searchParams = parse(location.search)

  const { isLoading, data } = CraftCMSQuery(searchParams)

  if (isLoading) return (
    <p>Loading...</p>
  )

  const { entry } = data

  return entry && <Sections entry={entry} />
}
