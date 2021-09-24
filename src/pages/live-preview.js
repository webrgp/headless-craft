import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { LivePreviewClient } from '../components/Craft/LivePreviewClient'

const queryClient = new QueryClient()

const LivePreview = ({location}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <LivePreviewClient location={location}  />
    </QueryClientProvider>
  )
}

export default LivePreview