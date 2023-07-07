'use client'

import {
  QueryClient,
  QueryClientProvider as QueryClientProviderDefault,
} from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
})

export default function QueryClientProvider(props: {
  children: React.ReactNode
}) {
  const { children } = props
  return (
    // Provide the client to your App
    <QueryClientProviderDefault client={queryClient}>
      {children}
    </QueryClientProviderDefault>
  )
}
